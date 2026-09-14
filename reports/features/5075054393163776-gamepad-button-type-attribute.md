# Gamepad button type attribute

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** In developer trial (Behind a flag)

## Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

### Motivation

Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

## Ecosystem Status

- **Momentum:** High (140 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Gamepad button type attribute is currently In developer trial (Behind a flag) in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)*
  > Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute Skip to site navigation (Press enter) Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute Matt Reynolds Thu, 23 Jul 2026 18:17:05 -0700 This is meant to...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Gamepad button type attribute Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Gamepad button type attribute Chromestatus Thu, 23 Jul 2026 18:16:43 -0700 Contact emails [email&#160;protected] , [...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Gamepad button type attribute Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Gamepad button type attribute Chromestatus Thu, 23 Jul 2026 15:39:16 -0700 Contact emails [email&#16...
- [Gamepad - GDevelop documentation](https://wiki.gdevelop.io/gdevelop5/all-features/gamepad) *(wiki.gdevelop.io)*
  > Gamepad - GDevelop documentation Skip to content Interface Games Games dashboard Marketing Project manager Scene editor Events editor Preview Debugger Gameplay tests Profile More Objects Edit points Tiled Sprite Panel Sprite ("9 patch") Tilemap Light...
- [How to Use the HTML5 Gamepad API (with complete examples) - DEV Community](https://dev.to/gaberomualdo/a-complete-guide-to-the-html5-gamepad-api-2k) *(dev.to · 2024-02-12T04:51:34)*
  > How to Use the HTML5 Gamepad API (with complete examples) - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to Comments Save Boost Pick as gem Copy l...
- [Gamepad Input in C++/XInput – Tutorial (Part 3) \| Lawrence McCauley](https://lcmccauley.wordpress.com/2014/01/10/gamepadtutorial-part3) *(lcmccauley.wordpress.com · 2017-08-30T01:10:13)*
  > Gamepad Input in C++/XInput &#8211; Tutorial (Part 3) | Lawrence McCauley Skip to primary content Lawrence McCauley Programming blog and portfolio of Lawrence McCauley Search Gamepad Input in C++/XInput &#8211; Tutorial (Part 3) Posted on January 10,...
- [What Is a Gamepad? A Beginner’s Guide to Game Controllers](https://youweitrade.com/blogs/blog/what-is-a-gamepad-a-beginner-s-guide-to-game-controllers) *(youweitrade.com · 2025-02-24T08:49:31)*
  > Analog Sticks (Thumbsticks): These are the small joystick-like controls found on the left and right sides of the gamepad. Analog sticks provide precise control over movement in 3D games, offering full range of motion (up, down, left, right, diagonall...
- [How To Set Up And Use A Gamepad With GameMaker \| GameMaker](https://gamemaker.io/en/tutorials/coffee-break-tutorials-setting-up-and-using-gamepads-gml) *(gamemaker.io · 2022-12-29T00:00:00)*
  > As you can see, getting the appropriate button is a case of <strong>checking the pad index and then the button constant that we want to use</strong> (you can find a list of all button constants here), just like you would a keyboard check or a mouse b...
- [Using a Gamepad \| REV DUO Control System \| REV Robotics Documentation](https://docs.revrobotics.com/duo-control/hello-robot-java/using-a-gamepad) *(docs.revrobotics.com)*
  > For example, <strong>a button that is not pressed will return a value of False (or 0) and a button that is pressed will return the value True (or 1)</strong>. Float data is a number that can include decimal places and positive or negative values.
- [The JavaScript Gamepad API: A Practical Guide to Reading Controller Input - DEV Community](https://dev.to/trkb/the-javascript-gamepad-api-a-practical-guide-to-reading-controller-input-2lmc) *(dev.to · 2026-07-26T02:33:48)*
  > <strong>Buttons are objects with a pressed boolean and an analog value, not plain booleans</strong>. Axes are floats from -1 to 1 that are almost never exactly 0, which is what dead zones exist to absorb.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong> Tracking bug #339841686 ↗ (opens in new window) | ChromeStatus....
- [Buttons](https://developer.adobe.com/commerce/pwa-studio/integrations/pagebuilder/components/Buttons) *(developer.adobe.com · 2025-05-05T00:00:00)*
  > View detailed API reference documentation about the buttons content type of the Page Builder component for PWA Studio storefront projects.
- [Adobe](https://developer.adobe.com/commerce/pwa-studio/includes/auto-generated/pagebuilder/lib/content-types/buttons/buttons) *(developer.adobe.com)*
  > <strong>This component is part of the Page Builder / PWA integration</strong>. It can be consumed without Page Builder.
- [PWA implementations and attributes](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/pwa-implementations) *(developer.adobe.com)*
  > Deprecated. Check ProductInterface attributes · ProductAttributeMetadata implements AttributeMetadataInterface

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075054393163776`)*
  > Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute Skip to site navigation (Press enter) Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute Matt Reynolds Thu, 23 Jul 2026 18:17:05 -0700 This i...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > [blink-dev] Intent to Prototype: Gamepad button type attribute Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Gamepad button type attribute Chromestatus Thu, 23 Jul 2026 18:16:43 -0700 Contact emails [email&#160;prot...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > [blink-dev] Ready for Developer Testing: Gamepad button type attribute Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Gamepad button type attribute Chromestatus Thu, 23 Jul 2026 15:39:16 -0700 Contact emails ...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 7 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5075054393163776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"xingri.github.io/gamepad-button-type" -site:xingri.github.io` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Gamepad button type attribute" API` — *Core feature API query* (2 returned)
  - `"Gamepad button type attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Gamepad button type attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Gamepad button type attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 11 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075054393163776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075054393163776)
- [Specification](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- [Chromium Tracking Bug](https://crbug.com/339841686)
