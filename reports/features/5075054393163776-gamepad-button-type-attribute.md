# Gamepad button type attribute

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** In developer trial (Behind a flag)

## Overview

Gamepad API defines standard indices for 17 common gamepad buttons. The GamepadButton type attribute provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like "trackpad".

### Motivation

Gamepad API should provide an interoperable way to identify common buttons that are not included in the standard set of buttons, particularly the trackpad button that appears on PlayStation gamepads.

## Ecosystem Status

- **Momentum:** High (250 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The GamepadButton 'type' attribute extends the Gamepad API to provide standardized string identifiers (such as "trackpad") for buttons beyond the 17 standard mapped indices. Currently in Developer Trial behind a flag in Chrome 152, the feature addresses long-standing fragmentation when handling controller-specific inputs like PlayStation touchpad buttons. Cross-browser consensus is still forming through W3C Gamepad Working Group discussions without formal Gecko or WebKit shipments yet.

### Recommendations
- Actionable Advice: Do not rely on the 'type' attribute exclusively in production today. Use progressive enhancement by checking `'type' in GamepadButton.prototype` (or inspecting connected button instances), while keeping existing controller mapping heuristics as fallbacks.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEz1TnK7Gng72AKatDp3dRA3fEvdm-Q8yVdeLiKvt9RDNaxhJMtezduf0CqluOLMQYb-ve2TJWw0FxvUviHXMGnMqozjpFRbAlqkQqYWCCgkSaDDHyoI_FlWwFrQjhwHFch0bm5CmZH) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [adamjones.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFA-3IKGKoVOEX7q7_uKyjGaH3S5H5-C6zV_gQ47sGlQwjzi1N7ieztxuP22TzYJThoB5G1TIi5W6VZvgOtk4SEcVHzHk_tdAp6e2tKlG4jW9rAbwLEL0TpXXX4Dhl7RJc=) *(vertexaisearch.cloud.google.com)*
  > The standard W3C Gamepad API mapping for an Xbox controller - Adam Jones&#x27;s Blog The standard W3C Gamepad API mapping for an Xbox controller Adam Jones Personally This is my personal blog, where I write solely in my personal capacity. It does not...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHsq-TonFvNoucz4gPahcPC3eqK6-oRnvfoOoh_CFLHWvk14fZ9MZakRHsil52I9dhXu5K96BPl0Gzmp9jxaeGJZ-eO0Zd87d0eUH28bSKpBr95wkEOqrhP5cXysJOlEJL8_4e15h0dMLzZ7OH89VNYuIa77HW9af_9hJ5y2paUslybUqzm2LavGrhrTV1jA8TNCvdf) *(vertexaisearch.cloud.google.com)*
  > GamepadButtons Enum (Windows.Gaming.Input) - Windows apps | Microsoft Learn Skip to main content Skip to in-page navigation Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the late...
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGO-ZScdgjf2zXKJf3YAWtRU-P30IfpJhNvkMhbWypkcsmqKnepw0Wxk9iwi6PKDXTbEjW5m2ucHMRUevDYzw4F-7iH72YrX-ck9tAWwyz9PT1I0ry-l4sseD6yGvIDbo-stALQRhdm1JbqQ34vGDHDqg==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **Gamepad API** defines a standard mapping for 17 common buttons (indices 0–16, covering standard face buttons, shoulder triggers/bumpers, thumbstick clicks, D-pad, and menu/home buttons). However, many modern
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEMH9YU1RnHnNs26AWKx3ps22874q5AkYelEqzEWZVI_LFUsrQ-P110tSzySGj1u7c0m3-V0hxtGX98H0P0sYeu20YSRGj531QuDQPamiBBz-5Otpx7a6y84EuUGG1eFno7HoOX39wGw-ETeu4qPqQU) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 Release Notes - Chrome Platform Status Chrome 152 Release Notes Preview 🏛️ Release notes for Chrome 151 and earlier are archived on developer.chrome.com. Browse archive ↗ (opens in new window) Capabilities (Fugu) CPU Performance API # Lin...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGhGydBqf8nH1If0vPzU2GMAFAHYQWz7luAJetPyHM00_uaBZ-DcZ_kp5azyvxdaPkniX9_MW1tfzwCG0ufBMTuEZ66E2nboW28lI4NCSID6J0_HPmzsU6g2AJTXDflLfxeQkrHw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **Gamepad API** defines a standard mapping for 17 common buttons (indices 0–16, covering standard face buttons, shoulder triggers/bumpers, thumbstick clicks, D-pad, and menu/home buttons). However, many modern
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEGr5UZTemb0qtfJp09PRwoVVFshcNtWsIUvc1Z5rbzGdfpOlfw4UiH03l6uAxvj1eVuAgOG9C71_HmlmSk4x5LZwSpYaD9KPLBByQfACw-Ci3GixvN11ofqvmcVb7s-yP5VCuVhkT4MfMS3CkYua4-7_q_Ag==) *(vertexaisearch.cloud.google.com)*
  > GamepadButton - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs GamepadButton Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español 日本語 Русский 中文 (简体) GamepadButton Baseline...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJWkeVX4pO_HMhA2r_Gzg8_-6OAVpqKKcZPorjni-XvUl3b7ApB5oK12SzqeZAMgVliP_5fhPi9nROWRVk50xJyRmsVPILru_ndcvP_EPIbrZtK3CG2JqffSpUs1JubRBn8DyTE5ZMBxXutZa43OIj254=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **Gamepad API** defines a standard mapping for 17 common buttons (indices 0–16, covering standard face buttons, shoulder triggers/bumpers, thumbstick clicks, D-pad, and menu/home buttons). However, many modern
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGt1fBfZ_XORQkQB2RQkkpGTfu_JXtYmXXVfsrI6OTJsbE-EXa4WjRYXPetH9Kmwaim-MEr-NNzeO-FmTwbP57zHfNCl0EytLPDEevaR2XOUqyNPEJfcA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **Gamepad API** defines a standard mapping for 17 common buttons (indices 0–16, covering standard face buttons, shoulder triggers/bumpers, thumbstick clicks, D-pad, and menu/home buttons). However, many modern
- [chadaustin.me](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8kUhBYs5xWJ3C3j4Td45Xq4cCyBRqU8icMOb1euG24gCuUVN4kccJZiYqK6_b1nYB_d3k3OaJYLFWvU9t1qp9bMnVfm2-mtI9wjl23nz-7rfnZRo7IVtOdVguStLtz7sP-q5h) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The standard **Gamepad API** defines a standard mapping for 17 common buttons (indices 0–16, covering standard face buttons, shoulder triggers/bumpers, thumbstick clicks, D-pad, and menu/home buttons). However, many modern
- [Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)*
  > &gt; *<strong>No information provided* &gt; &gt; ... &gt; &gt; No milestones specified</strong> &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5075054393163776 &gt; &gt; This intent message was gene...
- [[blink-dev] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [[blink-dev] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [How to Use the HTML5 Gamepad API (with complete examples) - DEV Community](https://dev.to/gaberomualdo/a-complete-guide-to-the-html5-gamepad-api-2k) *(dev.to · 2024-02-12T04:51:34)*
  > Before we begin, note that the gamepad API may not detect a gamepad until you press a button or move a stick on the controller.
- [Gamepad - GDevelop documentation](https://wiki.gdevelop.io/gdevelop5/all-features/gamepad) *(wiki.gdevelop.io)*
  > <strong>Use the Gamepad type condition or the Gamepads::GamepadType(gamepad) expression to identify the type of controller connected</strong> (Xbox, PlayStation 4, PlayStation 3, Steam controller, etc.). This lets you display the correct button promp...
- [Gamepad Input in C++/XInput – Tutorial (Part 3) | Lawrence McCauley](https://lcmccauley.wordpress.com/2014/01/10/gamepadtutorial-part3) *(lcmccauley.wordpress.com · 2017-08-30T01:10:13)*
  > The ‘XINPUT_Buttons‘ array contains the XInput values (which are really just hexadecimal values) for all the buttons we’re supporting and the order of the values in the array matches the order of the values in the ‘XButtonIDs‘ struct (you’ll soon see...
- [Using a Gamepad | REV DUO Control System | REV Robotics Documentation](https://docs.revrobotics.com/duo-control/hello-robot-java/using-a-gamepad) *(docs.revrobotics.com)*
  > For example, <strong>a button that is not pressed will return a value of False (or 0) and a button that is pressed will return the value True (or 1)</strong>. Float data is a number that can include decimal places and positive or negative values.
- [How To Set Up And Use A Gamepad With GameMaker | GameMaker](https://gamemaker.io/en/tutorials/coffee-break-tutorials-setting-up-and-using-gamepads-gml) *(gamemaker.io · 2022-12-29T00:00:00)*
  > As you can see, getting the appropriate button is a case of <strong>checking the pad index and then the button constant that we want to use</strong> (you can find a list of all button constants here), just like you would a keyboard check or a mouse b...
- [What Is a Gamepad? A Beginner’s Guide to Game Controllers](https://youweitrade.com/blogs/blog/what-is-a-gamepad-a-beginner-s-guide-to-game-controllers) *(youweitrade.com · 2025-02-24T08:49:31)*
  > Analog Sticks (Thumbsticks): These are the small joystick-like controls found on the left and right sides of the gamepad. Analog sticks provide precise control over movement in 3D games, offering full range of motion (up, down, left, right, diagonall...
- [Define Your Gamepad - MiSTer FPGA Documentation](https://mister-devel.github.io/MkDocs_MiSTer/setup/controller) *(mister-devel.github.io)*
  > Select this option to configure your buttons on your gamepad: <strong>It will guide you through the process of detecting your general controller type by asking you to press a few d-pad buttons and maybe the analog sticks</strong>.
- [Buttons](https://developer.adobe.com/commerce/pwa-studio/integrations/pagebuilder/components/Buttons) *(developer.adobe.com · 2025-05-05T00:00:00)*
  > View detailed API reference documentation about the buttons content type of the Page Builder component for PWA Studio storefront projects.
- [PWA implementations and attributes](https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/pwa-implementations) *(developer.adobe.com)*
  > Deprecated. Check ProductInterface attributes · ProductAttributeMetadata implements AttributeMetadataInterface

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17055.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5075054393163776`)*
  > &gt; *<strong>No information provided* &gt; &gt; ... &gt; &gt; No milestones specified</strong> &gt; &gt; &gt; *Link to entry on the Chrome Platform Status* &gt; https://chromestatus.com/feature/5075054393163776 &gt; &gt; This intent messag...
- [[blink-dev] Intent to Prototype: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17054.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
  > Explainer https://xingri.githu... gamepad buttons. The GamepadButton type attribute <strong>provides an alternate, interoperable identifier for common buttons that are not included in the standard set, like &quot;trackpad&quot;.</strong>...
- [[blink-dev] Ready for Developer Testing: Gamepad button type attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg17052.html) *(mail-archive.com)* *(Cites: `https://xingri.github.io/gamepad-button-type`)*
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
- **Google Search Grounding (gemini-3.7-flash):** 10 result(s) found — **10 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 2 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 11 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5075054393163776)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5075054393163776)
- [Specification](https://pr-preview.s3.amazonaws.com/xingri/gamepad/pull/196.html#gamepadbuttontype-enum)
- [Chromium Tracking Bug](https://crbug.com/339841686)
