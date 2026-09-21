# Gamepad button type attribute

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** In developer trial (Behind a flag)

## Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

### Motivation

Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Gamepad button type attribute is currently In developer trial (Behind a flag) in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFTpd2yng4vwXAtlJDnGMf7ql9j951vv9_PBIsNy8R673gQdxCx-gxKaKmgo-O6toNp7cnpol5_Br9Zji2xGW6OS4PxsxHepfNnqQrXvZ2T_81SaBo=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **Gamepad API** traditionally maps game controllers to the "Standard Gamepad" layout, which defines standard indices for 17 buttons (indices 0–16: face buttons, bumpers, triggers, D-pad, thumbstick clicks, and menu/start/sel
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpW6oiE4sL0mg6MTMfwEj8lMk8MfEOdmbOGhsSXcu8CtRD9cH_bIUrXiOJXaNLPbd_GvP8MgWgKwU-H9KAWzVQc95vTOgPHfmu8UZjOSvCeZNri4HbUYVR-L5GZSIIXNsumzhlml1xhGCVgrhLQ9FALjpCrCmzRTvsRKkCbVgbyGD5HnY=) *(vertexaisearch.cloud.google.com)*
  > שיחה עם הבקר של Stadia עם WebHID | Blog | Chrome for Developers דילוג לתוכן הראשי / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEj6hS5ExmWAd8kJJuszO6vlIUigQ5CMHUTAwV-VKNO0MYJlYO2FoR_nHAilOGtDilK7zAz1oJpPiM_377OOfFA1M3-tUdxoCQ0rlb5rndhb3XDEAR71c48FrYNznJ6-_MvHK3Vz1N3) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHl2G9_785FUBwd-VlN7o9nszm3AxNi_c_HZUgqeLociPW-pYsOj8zB05OUMG0XdjbFbGMji4wHxafKvYk2P5K0j82MLs6M-0le9Uy8BXZoKxPpNspo4Pdd29NC5IEbYqUlGJISzLzF) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQERSzQYJauNtegzfHrEcf-jP2XTdu8QCqjm6IdpVoxkqqcyXCZ_EFj3G-OOqbkfFqOJ7yLjwsfKDj7VLNxtGnu67ia55_3rv6bVdU3RYAWRcTMISTKGKJdPfSAv4c1mq3crBJTe6gD5) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGkZnLf39t8l4991sEvyFlh_aCqbC5BOaHVl_oG-yztMEvcJhbjYETrHkODxyQRTv9QNCAfjU7g7ATo41TOX7vT_s-4YsT-YamCbC6K3hMlQcIpSOOlmEPhL9ow_7mQ-L7j_uyr2QgXj0k5tk-xTJD-ImOlcLHYlv-QvL-sc2c3a5Jz) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **Gamepad API** traditionally maps game controllers to the "Standard Gamepad" layout, which defines standard indices for 17 buttons (indices 0–16: face buttons, bumpers, triggers, D-pad, thumbstick clicks, and menu/start/sel
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGmRvQ6LaoEDCdzpx61KFiaQ7r6esGn_5Xm5pmwob3vbM8-OSYGkqUp8QcEIODMAFGekovfIu0Zabi4qL08iPvjexcL1xu_92y1CM7HE7wizbdAjgNg9j6ysDNzzw4Rg3HB0TtWq_v6kXshuiWWsg==) *(vertexaisearch.cloud.google.com)*
  > Experimental Chromium Web Platform Features | Polypane This website works best with JavaScript enabled. Skip to content Skip to footer Polypane Brand kit Copy icon as SVG Copy logo as SVG Brand guidelines Homepage Search Changelog Polypane 30.1 Lates...
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaV6JXah4P37lzbGbcOY93--6sHyngWMga5aZ4avIRy2GLX-CSSLkurKEjdmiMD5hUdW-F6764bCiyEkuyKht4NCDqCIRjYSHqlI_R8Z2d7CQPf-7skC_ToiqVvzQMT6oihrWHzNh5-SFtykVk0JA=) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGz6EjmS8z51g7_8O677iwvcRtPXd3b6WfhM2Rxlirkg-L-k2yv8_CgCcqx1VO_NN60JWb1vPNEDnyDrV_rFnujHhaiQd62UWncxxr2FjJeD4el5xxD7w==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Overview  The **Gamepad API** traditionally maps game controllers to the "Standard Gamepad" layout, which defines standard indices for 17 buttons (indices 0–16: face buttons, bumpers, triggers, D-pad, thumbstick clicks, and menu/start/sel
- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)*
  > &gt; *<strong>No information provided* &gt; &gt; ... &gt; &gt; No milestones specified</strong> &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5075054393163776 &gt; &gt; This intent message was gene...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [Gamepad - GDevelop documentation](https://wiki.gdevelop.io/gdevelop5/all-features/gamepad) *(wiki.gdevelop.io)*
  > <strong>Use the Gamepad type condition or the Gamepads::GamepadType(gamepad) expression to identify the type of controller connected</strong> (Xbox, PlayStation 4, PlayStation 3, Steam controller, etc.). This lets you display the correct button promp...
- [How to Use the HTML5 Gamepad API (with complete examples) - DEV Community](https://dev.to/gaberomualdo/a-complete-guide-to-the-html5-gamepad-api-2k) *(dev.to · 2024-02-12T04:51:34)*
  > Before we begin, note that the gamepad API may not detect a gamepad until you press a button or move a stick on the controller.
- [Gamepad Input in C++/XInput – Tutorial (Part 3) \| Lawrence McCauley](https://lcmccauley.wordpress.com/2014/01/10/gamepadtutorial-part3) *(lcmccauley.wordpress.com · 2017-08-30T01:10:13)*
  > The ‘XINPUT_Buttons‘ array contains the XInput values (which are really just hexadecimal values) for all the buttons we’re supporting and the order of the values in the array matches the order of the values in the ‘XButtonIDs‘ struct (you’ll soon see...
- [How To Set Up And Use A Gamepad With GameMaker \| GameMaker](https://gamemaker.io/en/tutorials/coffee-break-tutorials-setting-up-and-using-gamepads-gml) *(gamemaker.io · 2022-12-29T00:00:00)*
  > As you can see, getting the appropriate button is a case of <strong>checking the pad index and then the button constant that we want to use</strong> (you can find a list of all button constants here), just like you would a keyboard check or a mouse b...
- [What Is a Gamepad? A Beginner’s Guide to Game Controllers](https://youweitrade.com/blogs/blog/what-is-a-gamepad-a-beginner-s-guide-to-game-controllers) *(youweitrade.com · 2025-02-24T08:49:31)*
  > Analog Sticks (Thumbsticks): These are the small joystick-like controls found on the left and right sides of the gamepad. Analog sticks provide precise control over movement in 3D games, offering full range of motion (up, down, left, right, diagonall...
- [Using a Gamepad \| REV DUO Control System \| REV Robotics Documentation](https://docs.revrobotics.com/duo-control/hello-robot-java/using-a-gamepad) *(docs.revrobotics.com)*
  > For example, <strong>a button that is not pressed will return a value of False (or 0) and a button that is pressed will return the value True (or 1)</strong>. Float data is a number that can include decimal places and positive or negative values.
- [The JavaScript Gamepad API: A Practical Guide to Reading Controller Input - DEV Community](https://dev.to/trkb/the-javascript-gamepad-api-a-practical-guide-to-reading-controller-input-2lmc) *(dev.to · 2026-07-26T02:33:48)*
  > <strong>Buttons are objects with a pressed boolean and an analog value, not plain booleans</strong>. Axes are floats from -1 to 1 that are almost never exactly 0, which is what dead zones exist to absorb.
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong> Tracking bug #339841686 ↗ (opens in new window) | ChromeStatus....
- [Buttons](https://developer.adobe.com/commerce/pwa-studio/integrations/pagebuilder/components/Buttons) *(developer.adobe.com · 2025-05-05T00:00:00)*
  > View detailed API reference documentation about the buttons content type of the Page Builder component for PWA Studio storefront projects.
- [PWA implementations and attributes](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/pwa-implementations) *(developer.adobe.com)*
  > Deprecated. Check ProductInterface attributes · ProductAttributeMetadata implements AttributeMetadataInterface

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075054393163776`)*
  > &gt; *<strong>No information provided* &gt; &gt; ... &gt; &gt; No milestones specified</strong> &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5075054393163776 &gt; &gt; This intent messag...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...

## 📚 Platform Documentation & Specifications

- [GamepadButton](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton) *(developer.mozilla.org)*
- [GamepadButton: touched property](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/touched) *(developer.mozilla.org)*
- [GamepadButton: pressed property](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton/pressed) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 27 result(s) found across 7 planned queries — **13 verified relevant**
  - `"chromestatus.com/feature/5075054393163776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"xingri.github.io/gamepad-button-type" -site:xingri.github.io` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Gamepad button type attribute" API` — *Core feature API query* (2 returned)
  - `"Gamepad button type attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Gamepad button type attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Gamepad button type attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **2 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 11 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075054393163776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075054393163776)
- [Specification](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- [Chromium Tracking Bug](https://crbug.com/339841686)
