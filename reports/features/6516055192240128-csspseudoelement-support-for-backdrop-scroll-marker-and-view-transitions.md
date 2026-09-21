# CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:  ::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.  ::scroll-marker: can be used to collect click statistics.  view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

### Motivation

Support for CSSPseudoElement - which is currently only defined for ::after, ::before, and ::marker - is now being extended to include several new pseudo-elements:

::backdrop: useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog's content. This eliminates the need for complex intersection logic to determine where the click occurred.

::scroll-marker: can be used to collect click statistics.

view transitions: enables geometry-aware view transitions.It also allows you to intercept a view transition mid-flight to start a new one, utilizing the coordinates of the currently animating element to avoid sudden visual jumps.

## Ecosystem Status

- **Momentum:** High (560 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium's extension of the CSSPseudoElement interface to ::backdrop, ::scroll-marker, and view-transition pseudos delivers long-awaited programmatic access to pseudo-element event targets and geometry. This notably solves perennial developer headaches like native dialog-backdrop click handling and mid-flight view transition handoffs without complex coordinate math. While the CSS Working Group resolved in favor of broadening CSSPseudoElement to standardized tree-abiding pseudo-elements, multi-engine interoperability remains in early stages with Chromium shipping ahead of the pack.

### Recommendations
- Actionable Advice: Use this capability as a progressive enhancement by feature-detecting element.pseudo() for dialog closing and view transition interruptions. Retain existing fallback coordinate checks or synthetic overlay wrappers for Safari and Firefox users until baseline interoperability is achieved.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- Standards Activity (Mozilla): Latest discussion from @danielsakhapov: "Addition - in https://github.com/w3c/csswg-drafts/issues/13804 it was resolved that CSSPseudoElement now supports all standardized non-element-backed ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [CSSPseudoElement interface](https://github.com/WebKit/standards-positions/issues/607) [open]
- **Mozilla:** [CSSPseudoElement interface](https://github.com/mozilla/standards-positions/issues/1345) [open]

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdofsePtRSt3-pLkf_SyFUdLbmzc6tTJRsLioMMvI4RhDdwF8r9-fufWc1JQU48GfMPSjHK6BD_NNs5oObwHg49mchHmyzGi9fyt1vOXyDlF5ZBDRsUFS_5yxeMn_F1BHBFAhWDnN0cl4=) *(vertexaisearch.cloud.google.com)*
  > [css-pseudo] Add ::backdrop and ::view-transitions to the CSSPseudoElement&#39;s allowed pseudo-elements list · Issue #2456 · mozilla/wg-decisions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearanc...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHjgBwmSPDqyDgGIfaqITv-RFqUR8j6brl9zQa6D7J8860G_XDA9znFFFtdDDj6sJVDiQpurGZkY5I83kORP4G3AFvapEHl9Tg3cExbCyyVr3nhoB9ZR11bH0LKuYlCB9sa3is6Vn5f) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFgt0dQnlCDRlAI3JvFl7T1k47vANKuJF0OVVahFljmXPtED7PDbg15xpoZCXpoi_kSXfasagq575pi0WrW7apvxQE2fi8EwCTydUiAgubsc9XHl40E_opFia3-GTuAMdqZc2j5rT4h) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH6gupUruHqYTDVNBwc401JILiq32SZrsMKwfRk4-bWEoyRfz7k0adooN7-LbdmdCnuJfXf7Iq1K2NtKysWNfWB4mu5VEB_9s1leh3uUSMgtL7VP-Nc2hGgZtYU5yYEtvB9fkPx8m8ig-N5zQ==) *(vertexaisearch.cloud.google.com)*
  > GitHub - danielsakhapov/CSSPseudoElementDoc: A document describing a bunch of open questions on the CSSPseudoElement IDL interface design · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance setting...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGCqYrpVBo7ZxHqbv5ZeyvD26P8vCArxng_H59cDLXwG7lKOIzDYobIl7Mt59XPoJWXe_Y_3UkDr6suGIViHn8qDeYgjEu7pU4lZDEAe_tErNLeWsxpgcBLz0hvX3T_Cg==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in August | Blog | web.dev Skip to main content / English Русский فارسی বাংলা Sign in Blog Home Blog New to the web platform in August Stay organized with collections Save and categorize content based on your preferences. Disc...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFdWyotuaxXmoUUMeG5fuiRYcUZggAgKRv8eU8-pWhCFUq_w5c4lEpDtDWGd7AHFXKBCmZZWTDVTJtDDWIhBGvrZKaMap4CW_p4tlbWHsVEdtWtZ_prYK3sKsFiIiE0Sbbx9OReMnc=) *(vertexaisearch.cloud.google.com)*
  > [css-pseudo] Can we make pseudo-elements first-class citizens in the DOM? · Issue #11559 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGFdFndzDbKwffszU78YGjEF4_014UqSpcwscFwVq57S-J2niqrhDjHzse75Z5UfDYI-32DPDx0l8366x23zPgK2d30mW_S6zFfWGdxiBadj6ojLfkAF79cwPmYAcFvqf-u_FwRCaaw) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 Beta | Blog | Chrome for Developers Zum Hauptinhalt springen / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH1vh8LMG0q2K-P_C4t_Lar3VTEt5oaCD8gy-53bf1zXqxX8JLehElOG9wSQAaGWujapL7kbuviLeKoPTUvBMdVKjOf69eX2WIiBAcD6H_Gk2jsnLojzClXJbRTou0SdXNlpVyNQ9xacAdVTTzvy0sEpHfMY-0hTiLO2O50vVDTZ4VjYVue) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGm7Glzs_oA_v6ALptV5so1T3l1oXRT1bQf9wV8eNWY-SXddqzuFKfVmNPJssQSeizHnx36UVHYtHOokgcj2DclKYmS895jHS8CFbZUAejZ3tgWA3VQBwwS03n8Tx1RMgFZ1sLy) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The CSS Working Group (CSSWG) and Chromium have expanded the **`CSSPseudoElement`** interface. Previously, `CSSPseudoElement` (accessed primarily via `element.pseudo(type)`) was strictly limited to `::before`, `::after`, and `::marker`.
- [chrome.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnzq8DlFA_8TDkXAj-1YjyZ8mmbMV4dWbQCiqvlYXCuvZkRTIWq4KVRPdWYjLYc7MrjugjhKhqNzYxdqmXPJqBik7Cgs1uAtLKz-bzcR_bbewZ9Wm3wMg8QA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The CSS Working Group (CSSWG) and Chromium have expanded the **`CSSPseudoElement`** interface. Previously, `CSSPseudoElement` (accessed primarily via `element.pseudo(type)`) was strictly limited to `::before`, `::after`, and `::marker`.
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFkhZZW4hpSsDbPxZNDo0Xg07SK_roipEUPKuaBf2Jco3EhNwP4m1D17l-yMmPr-w_SzZDbY2kczREm8lIFJvKBoJ-Z_fc3Tzh4AFByDP7v6deac9TsED7919oWTWpX6n8nK4k9Q9GjIIUvOBT6K2h7z-FqplZ7PkJQ_gh1LaEIY1GIrEAPDOs=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The CSS Working Group (CSSWG) and Chromium have expanded the **`CSSPseudoElement`** interface. Previously, `CSSPseudoElement` (accessed primarily via `element.pseudo(type)`) was strictly limited to `::before`, `::after`, and `::marker`.
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFjmqLQjalrSArDsaMtuqBf8UwnhODvZe8OQVx2_QZ6oOH_rRw5WSP6quk8ZSdKj8AvbGPiQ1VRtYUbgaucO9HoS8hvdAxfNr_H37KFmriSYYS48tqwsiE5EHSnprt3UiwGPhjjbUes3pQ=) *(vertexaisearch.cloud.google.com)*
  > ### Summary  The CSS Working Group (CSSWG) and Chromium have expanded the **`CSSPseudoElement`** interface. Previously, `CSSPseudoElement` (accessed primarily via `element.pseudo(type)`) was strictly limited to `::before`, `::after`, and `::marker`.
- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)*
  > &gt; *No information provided* &gt; &gt; ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</strong>....
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16843.html) *(mail-archive.com)*
  > On Thursday, June 4, 2026 at 11:01:29 PM UTC+3 Daniil Sakhapov wrote: &gt; ::scroll-marker click detection has been requested by our partners trying &gt; out CSS Carousels &gt; ::backdrop can be used to avoid intersection checks on dialog dismiss (by...
- [\[blink-dev\] Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16588.html) *(mail-archive.com)*
  > Explainer No information provided ... to include several new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [CSS ::backdrop Pseudo-element](https://www.w3schools.com/cssref/sel_backdrop.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [Day 22: the ::backdrop pseudo-element \| daily.dev](https://daily.dev/posts/day-22-the-backdrop-pseudo-element-kmhbpxmzx) *(daily.dev · 2026-06-22T14:45:20)*
  > A quick guide to the CSS ::backdrop pseudo-element, which <strong>lets you style the backdrop behind modal dialogs and fullscreen elements</strong>. Covers basic usage with...
- [CSS Pseudo-elements Reference](https://www.w3schools.com/CSSREF/css_ref_pseudo_elements.php) *(w3schools.com)*
  > accent-color align-content align-items align-self all animation animation-delay animation-direction animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function aspect-ratio backdrop-f...
- [CSS ::marker Pseudo-element](https://www.w3schools.com/cssref/sel_marker.php) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>The ::backdrop CSS pseudo-element represents a viewport-sized box rendered immediately beneath any element being presented in full-screen mode</strong>.
- [View Transitions API: Complete Guide to Page Transitions \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/page-transitions-api.html) *(effect-labs.com · 2026-02-10T00:00:00)*
  > Complete tutorial on the View Transitions API. Learn to create smooth page transitions and shared element animations with this new native API.
- [View Transitions API and CSS Scroll-Driven Animations: The Browser Wins of 2026 \| Frontend Horizon](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026) *(frontendhorizon.com · 2026-07-06T00:00:00)*
  > Two browser features that landed cross-platform in 2025-2026 and changed what we ship for motion on FH client sites — without adding any JavaScript framework.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Support for CSSPseudoElement, previously defined for ::after, ::before, and ::marker, extends to include several new pseudo-elements: ::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog cont...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > Support for CSSPseudoElement, ... <strong>::backdrop: Helps close a dialog when the backdrop is clicked without interfering with clicks inside the dialog content, eliminating the need for complex intersection logic</strong>...
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > Tracking bug #327449602 ↗ (opens ... new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the backdrop is clicked, without interfering with clicks inside the dialog&#x27;s content</strong>....
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > <strong>The CSSPseudoElement interface now supports the ::backdrop, ::scroll-marker, and ::view-transitions pseudo-elements, in addition to the ::after, ::before, and ::marker pseudo-elements</strong>.
- [CSS Wrapped 2024 - Chrome Demos](https://chrome.dev/css-wrapped-2024) *(chrome.dev)*
  > Custom Scrollbars demo. Use the color inputs to change the colors. ... In 2023, Chrome was the first browser to ship same-document view transitions, an exciting addition to the web platform that allows you to have rich and seamless transitions betwee...
- [PWA \| Backdrop CMS](https://backdropcms.org/project/pwa) *(backdropcms.org · 2026-01-06T00:00:00)*
  > See the pwa.api.php file for a code example. The example assumes the images exist within your theme folder. Linking to uploaded media would require different code. By default, the manifest has the following properties: ... Reliable — Loads instantly ...
- [View Transition API](https://progressier.com/pwa-capabilities/view-transition-api) *(progressier.com · 2026-05-13T00:00:00)*
  > Learn how View Transitions let you create smooth, automatic animations between page states for a more polished, app-like web experience.
- [Scroll-marker elements and pseudo-elements \| carousel](https://flackr.github.io/carousel/scroll-marker) *(flackr.github.io)*
  > The ::scroll-marker pseudo-element will <strong>create a focusable marker which when activated will scroll the element into view</strong>. It behaves as an anchor link with a scrollTargetElement set to the pseudo-element’s owning element.
- [🤯CSS Pseudo Elements/Classes you have never heard of! - DEV Community](https://dev.to/lampewebdev/css-pseudo-elements-classes-you-have-never-heard-of-30hl) *(dev.to · 2020-03-30T14:07:45)*
  > Most Browser will show a black background(backdrop) and videos if they have bars on the top and bottom are black. <strong>With the ::backdrop pseudo-element you can change that black backdrop to whatever color you like</strong>!
- [Guides: View transitions \| Next.js](https://nextjs.org/docs/app/guides/view-transitions) *(nextjs.org · 2026-08-25T00:00:00)*
  > If the destination suspends into a fallback first, no pair forms, and the content animates with its enter animation instead when it arrives. The morph works without any CSS. To customize it, add share=&quot;morph&quot; together with default=&quot;non...
- [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2) *(drafts.csswg.org · 2026-08-31T00:00:00)*
  > These captures are represented as a tree of pseudo-elements (detailed in § 5.2 View Transition Pseudo-elements), where the old visual state co-exists with the new state, allowing effects such as cross-fading while animating from the old to new size a...
- [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions) *(giacomocavalieri.me)*
  > Not all browsers fully support cross document view transitions yet, so here&#x27;s what it looks like for people using Firefox: <strong>The default animation can be changed using the ::view-transition-group() CSS pseudo-element</strong>.
- [Animating View Transitions](https://www.patterns.dev/vanilla/view-transitions) *(patterns.dev)*
  > These old and new versions are presented as pseudo elements and can be referenced in CSS with ::view-transition-old(root) and ::view-transition-new(root) respectively. For example, to emphasize the transition, we can lengthen the animation-duration l...
- [New in Chrome 152 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-152) *(developer.chrome.com)*
  > Support for CSSPseudoElement in JavaScript, previously defined for ::after, ::before, and ::marker, extends to several new pseudo-elements in Chrome 152: ::backdrop: <strong>Lets you handle interactions on modal dialog backdrops</strong>.
- [Re: \[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16845.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; *Blink component* ... several &gt;&gt;&gt;&gt;&gt;&gt;&gt; new pseudo-elements: ::backdrop: <strong>useful for closing a dialog when the &gt;&gt;&gt;&gt;&gt;&gt;&gt; backdrop is clicked, witho...
- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16668.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Blink component* &gt;&gt; Blink&gt;CSS ... need for complex intersection logic to &gt;&gt; determine where the click occurred. ::scroll-marker: <strong>can be used to collect &gt;&gt; click statistics</strong>....

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions](http://www.mail-archive.com/blink-dev@chromium.org/msg16597.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6516055192240128`)*
  > &gt; *No information provided* &gt; &gt; ... generated by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; -- <strong>You received this message because you are subscribed to the Google Groups &quot;blink-dev&quot; group</s...
- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://<strong>drafts.csswg.org/css-pseudo-4</strong>/#CSSPseudoElement-interface You can get to the pseudo-element of an element with Element.pseudo(). But some pseudos are defined to have other pseudos hanging off them, like with ::part(...
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com · 2023-05-31T21:21:53)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > please link to the spec section you&#x27;re talking about, or at least the spec I&#x27;m unfamiliar with the structure of the spec, but it pertains to the ::marker pseudoelement. I guess that means this: https://<strong>drafts.csswg.org/css...
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com · 2022-08-11T10:45:36)* *(Cites: `https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface`)*
  > https://drafts.csswg.org/css-pseudo-4/#highlight-styling <strong>The highlight pseudo-elements can only be styled by a limited set of properties that do not affect layout and can be applied performantly in a highly dynamic environment</stro...

## 📚 Platform Documentation & Specifications

- [\[css-pseudo-4\] should CSSPseudoElement have a pseudo() method? · Issue #3836 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/3836) *(github.com)*
- [Allow user-select on ::marker pseudoelements · Issue #8892 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/8892) *(github.com)*
- [\[css-pseudo\] highlight pseudos and non-applicable properties · Issue #7591 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7591) *(github.com)*
- [A beginner-friendly guide to view transitions in CSS \| MDN Blog](https://developer.mozilla.org/en-US/blog/view-transitions-beginner-guide) *(developer.mozilla.org)*
- [CSS view transitions - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/View_transitions) *(developer.mozilla.org)*
- [scroll-marker CSS pseudo-element - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::scroll-marker) *(developer.mozilla.org)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [\[css-pseudo\] Add ::backdrop and ::view-transitions to the CSSPseudoElement's allowed pseudo-elements list · Issue #13804 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13804) *(github.com)*
- [Pseudo-elements - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) *(developer.mozilla.org)*
- [CSS pseudo-elements - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Pseudo-elements) *(developer.mozilla.org)*
- [Pseudo-elements - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) *(developer.mozilla.org)*
- [\[css-pseudo\] Add \`::scroll-marker\` and \`::scroll-button\` to the \`CSSPseudoElement\`'s allowed pseudo-elements list · Issue #13346 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13346) *(github.com)*
- [CSS pseudo-elements - CSS \| MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_pseudo-elements) *(developer.mozilla.org)*
- [CSS View Transitions Module Level 1](https://www.w3.org/TR/css-view-transitions-1) *(w3.org)*
- [How to handle addEventListener on \`CSSPseudoElement\`? · Issue #12163 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12163) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 12 planned queries — **41 verified relevant**
  - `"chromestatus.com/feature/6516055192240128" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-pseudo-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" API` — *Core feature API query* (3 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"transitions.it" OR ":scroll-marker" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSSPseudoElement support for ::backdrop, ::scroll-marker and ::view-transitions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"CSSPseudoElement" "::backdrop" dialog (close OR click)` — *Search for tutorials and developer guides demonstrating how to handle dialog closing and backdrop clicks using the CSSPseudoElement interface.* (1 returned)
  - `"CSSPseudoElement" ("element.pseudo" OR "pseudo('::") ("::scroll-marker" OR "::backdrop")` — *Find practical JavaScript code snippets showcasing element.pseudo() invocation on newly supported pseudo-elements.* (8 returned)
  - `"CSSPseudoElement" "view-transition" (geometry OR animation OR "mid-flight")` — *Discover technical writeups explaining how to intercept view transitions mid-flight and read geometry using pseudo-element references.* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker") ("Intent to Ship" OR "Chrome Platform Status" OR "developer.chrome.com")` — *Track official browser release notes, Chromium intent discussions, and implementation status across web engines.* (8 returned)
  - `"CSSPseudoElement" ("::backdrop" OR "::scroll-marker") site:github.com/w3c/csswg-drafts` — *Investigate CSS Working Group specifications, discussions, and developer feedback regarding dispatching events on pseudo-elements.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 348 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6516055192240128)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6516055192240128)
- [Specification](https://drafts.csswg.org/css-pseudo-4/#CSSPseudoElement-interface)
