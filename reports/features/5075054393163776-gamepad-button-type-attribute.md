# Gamepad button type attribute

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** In developer trial (Behind a flag)

## Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

### Motivation

Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The Gamepad Button Type attribute (\`GamepadButton.prototype.type\`) addresses a long-standing limitation in the Gamepad API by providing a standardized enum identifier for inputs beyond the 17 standard gamepad button indices, starting primarily with the PlayStation controller 'trackpad' button. Spearheaded by Google and NVIDIA in the W3C Gamepad Working Group (PR #196), it entered developer trials behind the \`GamepadButtonTypes\` flag in Chromium 152. Broad cross-engine consensus is still developing, with no formal positions committed yet by Mozilla Gecko or Apple WebKit.

### Recommendations
- Actionable Advice: Web gaming and input pipeline developers should test the feature behind flags in Chromium 152+ and provide feedback on button enum granularity in the W3C Gamepad issue tracker. Production applications must treat \`button.type\` strictly as a progressive enhancement (\`'type' in button\`), retaining index-based fallbacks and ID mapping for Firefox and Safari.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEkBK5XHQTrYcdnwarhBPxl0CG--UTc6BCFtWoD1Ly9ahDALKyg-2szTDbh3zTlr3wc8v8nTbKxY6b2Vv4CP-CXooT6A8xDpyvacg7Wn5VAH6aVEVk1NRqg4ZHc17dQPmNX4SBR4E=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHRcxv551HVU_iXxfYBAX_W5EzaPm8H2cE89PzlQCAiKIeUCdmRw6hyjN_ZNp2yPHhKupjdXgLzVPDM0GWw-BZpmP3p4plndbO2BVqc5REicbqrSn_F) *(vertexaisearch.cloud.google.com)*
  > Play the Chrome dino game with your gamepad | Articles | web.dev Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไท...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEoVsJOeTYNj7P5pYD7h6dFu5dinJ2PRvVOShw4pAZzSPvPP_w5xnwxAfFQ-p6zOtI1VN89mrSikOzHIdxWAHbqUo-k6owHrS8BXC_PzkId1CFZjt1CAoVOJFJDBrVbQg==) *(vertexaisearch.cloud.google.com)*
  > Proposal for the Gamepad Interop 2027 · Issue #231 · w3c/gamepad · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessio...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGi0YqGDp7-KAo1mqOEqm_fJmI10bwronNqU5GmsPiXUz_eV4xxB7nGfBGjyL9w2nF1EI2TcwWK2P5sazSy_oVuA7gLZdpdJOy3ZwqoACpoddUd_cBw2cRadO4cAknEew==) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 Release Notes - Chrome Platform Status Chrome 152 Release Notes Preview Scheduled Stable Release August 25, 2026 🏛️ Release notes for Chrome 151 and earlier are archived on developer.chrome.com. Browse archive ↗ (opens in new window) Capa...
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGHBCz7PRtiMi1D_JLrSL13W1sRQNelH5czox2gU5pufLrea6k_Z2V2AReajl_XjT6qZdJ8vljKcz2ZnKtPVhta4M5FoHExI2FRW4qnA5voKDdKChDfdrIFk8uPkrz3FpTWmcRiUVD7UxN40dWzX7SG6wGAmGBDl6BxRmIIBVcmPA==) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQnw0kl_Z2nEHna71V2SsSip-07gX6OKXsDmHdp-97_BzqYMeeRBC1IVeO9N6oZKBwpsd-uM6vLyfQS-fih9u9P60Mw5RL5jtdl3NaY-bl00MQlHA3n_4s7JLHMmLu3jzDekb5U72TKxFNMZFAIa-j) *(vertexaisearch.cloud.google.com)*
  > Google Issue Tracker Sign in
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7xpkUMpMppPCmEZcv7GmDJ1qj0_7_8QMi4-grsrf8Vuefamtbk7YAt8izdUGbekikL6x_6I-POI6dUyoNRrRcgFu2EOU_SGXVSGNQUHLrtTAq-zDU7AgJyFpRW223QR2UT9VBCpWPbXBO4TcnjM-m4OAE) *(vertexaisearch.cloud.google.com)*
  > GamepadButton - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs GamepadButton Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español 日本語 Русский 中文 (简体) GamepadButton Baseline...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFaZJid94TsJGVvptrrpMPvj-lOBSGnwb8AiH5XI7Ty8E2zWNkOdH1-AaVd8DtyGSRrmTXfriDFok9DD5Vatdp-Ygsgw328-ACLJMY5qNalhNcA-i_LTYjQ3Poiye03WV5BPncPOW11JYKn4RsO4eHxRGBJCpQa2vfK-abKXJASDqPiCbTx8go=) *(vertexaisearch.cloud.google.com)*
  > Using the Gamepad API - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Gamepad API Using the Gamepad API Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 Русский 中...
- [polypane.app](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEle34507D22yVky9ey2zBcxZLVJ4AbBMNeZbzyC2rQiIQWW2k-Kv85tK148FPUzcLQz2oZIFFombmnccXWBlXpwvHDcuWGaeZ6gFdEXS1tM10Jk8JBjUF0hp2rXbSIVsci1rzttoD6k9B_Dku0) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Modern controllers (such as the PlayStation DualShock 4 / DualSense, Steam Deck, and various pro controllers) feature inputs that do not fit into the standard 17-button layout defined by the W3C Gamepad API (indices 0–16,
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE5B7qfRC78vpfUnvPKL6KakjovOiga04Qgu6g1-hdH7s0kV6J26CT8xQRuF_y2MxswjF-QHvsHxQBD8sqVg4eYSrELZifwHZo3A9xWmJcrdKpxzMA1xR-TKOpzbrYS3LVjSw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Modern controllers (such as the PlayStation DualShock 4 / DualSense, Steam Deck, and various pro controllers) feature inputs that do not fit into the standard 17-button layout defined by the W3C Gamepad API (indices 0–16,
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEIH2J9oydsdZwxJFXn6Bck-IdRcdVlYXubfAfeqt8Wuf9NHTXi7i95S5QYmPgFHfuIhqOomEP0EPt7Z-CmDiF7PTlXtjgNxKll6E_KMk9-5FzCd96mhqnuWvOyqhI5NC6mBBhAOg84nTxXcM4rdjBrLfxYnm1VTA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Modern controllers (such as the PlayStation DualShock 4 / DualSense, Steam Deck, and various pro controllers) feature inputs that do not fit into the standard 17-button layout defined by the W3C Gamepad API (indices 0–16,
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4v0_eceyLJB1UUO_qXNt2YpY6Tm4XgbDPiMPLJMpuBvEhSEyf65Nh9xOh6OXrzlHApiiGeDWs_4W4LGIka5APegvWPtAELvoZ-wTr70Yw9DiRSiucov5PW8P64XShXorRrmgm0CSJ) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  Modern controllers (such as the PlayStation DualShock 4 / DualSense, Steam Deck, and various pro controllers) feature inputs that do not fit into the standard 17-button layout defined by the W3C Gamepad API (indices 0–16,
- [Re: \[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)*
  > &gt; *<strong>No information provided* &gt; &gt; ... &gt; &gt; No milestones specified</strong> &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5075054393163776 &gt; &gt; This intent message was gene...
- [\[blink-dev\] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [\[blink-dev\] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [How to Use the HTML5 Gamepad API (with complete examples) - DEV Community](https://dev.to/gaberomualdo/a-complete-guide-to-the-html5-gamepad-api-2k) *(dev.to · 2024-02-12T04:51:34)*
  > Before we begin, note that the gamepad API may not detect a gamepad until you press a button or move a stick on the controller.
- [Gamepad - GDevelop documentation](https://wiki.gdevelop.io/gdevelop5/all-features/gamepad) *(wiki.gdevelop.io)*
  > <strong>Use the Gamepad type condition or the Gamepads::GamepadType(gamepad) expression to identify the type of controller connected</strong> (Xbox, PlayStation 4, PlayStation 3, Steam controller, etc.). This lets you display the correct button promp...
- [Gamepad Input in C++/XInput – Tutorial (Part 3) \| Lawrence McCauley](https://lcmccauley.wordpress.com/2014/01/10/gamepadtutorial-part3) *(lcmccauley.wordpress.com · 2017-08-30T01:10:13)*
  > We’ll start with a basic check of ‘GetButtonPressed‘, a boolean function which returns true if the specified button is pressed or false, if the button is not pressed. Before we can get to that, we need to add an array of all the button values we want...
- [How To Set Up And Use A Gamepad With GameMaker \| GameMaker](https://gamemaker.io/en/tutorials/coffee-break-tutorials-setting-up-and-using-gamepads-gml) *(gamemaker.io · 2022-12-29T00:00:00)*
  > This can be done because, as we explained earlier, the trigger buttons are analogue and will return a value from 0 to 1, which can then be used to determine the rate of fire. Once again in the step event add the following after all the rest of the co...
- [Using a Gamepad \| REV DUO Control System \| REV Robotics Documentation](https://docs.revrobotics.com/duo-control/hello-robot-java/using-a-gamepad) *(docs.revrobotics.com)*
  > For this tutorial we will be focusing ... gamepad that will act as User 1 (gamepad1, in code) <strong>press the options button and the Cross/A button on the gamepad at the same time</strong>....
- [What Is a Gamepad? A Beginner’s Guide to Game Controllers](https://youweitrade.com/blogs/blog/what-is-a-gamepad-a-beginner-s-guide-to-game-controllers) *(youweitrade.com · 2025-02-24T08:49:31)*
  > Analog Sticks (Thumbsticks): These are the small joystick-like controls found on the left and right sides of the gamepad. Analog sticks provide precise control over movement in 3D games, offering full range of motion (up, down, left, right, diagonall...
- [The JavaScript Gamepad API: A Practical Guide to Reading Controller Input - DEV Community](https://dev.to/trkb/the-javascript-gamepad-api-a-practical-guide-to-reading-controller-input-2lmc) *(dev.to · 2026-07-26T02:33:48)*
  > <strong>Buttons are objects with a pressed boolean and an analog value, not plain booleans</strong>. Axes are floats from -1 to 1 that are almost never exactly 0, which is what dead zones exist to absorb.
- [How PWA (Progressive Web Apps) are Changing the Mobile Gaming Landscape - DEV Community](https://dev.to/no_momo/how-pwa-progressive-web-apps-are-changing-the-mobile-gaming-landscape-444g) *(dev.to · 2026-07-15T03:12:52)*
  > Today, PWA games can leverage: Pointer Lock &amp; Gamepad APIs: <strong>Full keyboard/mouse lock and native game controller support (Xbox, PlayStation controllers) are supported natively in the browser</strong>.
- [Buttons](https://developer.adobe.com/commerce/pwa-studio/integrations/pagebuilder/components/Buttons) *(developer.adobe.com · 2025-05-05T00:00:00)*
  > View detailed API reference documentation about the buttons content type of the Page Builder component for PWA Studio storefront projects.
- [Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9) *(dev.to · Randal L. Schwartz · Sep 20)*
  > How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.

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

- **Brave Search:** 27 result(s) found across 7 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5075054393163776" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"xingri.github.io/gamepad-button-type" -site:xingri.github.io` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html" -site:pr-preview.s3.amazonaws.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Gamepad button type attribute" API` — *Core feature API query* (2 returned)
  - `"Gamepad button type attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Gamepad button type attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Gamepad button type attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **4 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075054393163776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075054393163776)
- [Specification](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- [Chromium Tracking Bug](https://crbug.com/339841686)
