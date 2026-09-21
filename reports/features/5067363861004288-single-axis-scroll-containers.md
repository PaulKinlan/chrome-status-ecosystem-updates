# Single-axis scroll containers

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** In developer trial (Behind a flag)

## Overview

Extends the \`overflow\` property to support scrollable values together with \`clip\` (for example, \`overflow: scroll clip\`). This allows \`position: sticky\` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using \`overflow: clip\` stays in place.

### Motivation

The CSS `overflow` property currently allows behavior to be specified per axis, but it does not provide a way to make a scroll container responsible for only a single axis. The affects features that depend on scroll containers, namely `position: sticky` and DOM scroll APIs.

For example, authors may want to use `position: sticky` to create a table that keeps both the top and left labels in view while the user scrolls through large content. Or they may want to create a carousel that is visually clipped on one axis, while ensuring that `scrollIntoView()` does not unexpectedly move that clipped axis.

Please see the explainer for more details.

## Ecosystem Status

- **Momentum:** High (495 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Single-axis scroll containers address a longstanding CSS limitation by permitting scrollable keywords alongside 'clip' (such as 'overflow: scroll clip'), enabling true 1D scrollers without unintentionally forcing 2D scroll contexts. Following CSS Working Group resolutions, the feature has entered developer testing across Chrome 153 pre-release channels (Beta/Dev/Canary) with an anticipated stable target around Chrome 158. Cross-engine consensus is forming around the CSSWG specifications, though official WebKit and Gecko standards positions and TAG reviews remain open as edge cases like 'touch-action' and scroll-snap propagation are evaluated.

### Recommendations
- Actionable Advice: Teams should validate complex sticky layouts and horizontally scrolling containers in Chrome 153+ pre-release channels to identify any unintended overflow behavioral shifts. Avoid relying on 'overflow: \[scroll\|auto\] clip' in production until cross-browser implementations land, continuing to isolate multidirectional scrolling via nested wrappers for broader legacy support.
- Standards Activity (Mozilla): Latest discussion from @freedebreuil: "&gt; How does this play with touch-action?  Thanks, good point. I think the right model is that scroll containers are now per-axis. For \`touch-action\`, t..."
- Standards Activity (W3C TAG): Latest discussion from @freedebreuil: "Thanks @lukewarlow. The breaking change is limited to the case where \`clip\` on one axis is combined with a scrollable overflow value on the other (for..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome for Developers (@ChromiumDev) on X" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Single-axis scroll containers](https://github.com/WebKit/standards-positions/issues/680) [open]
- **Mozilla:** [Single-axis scroll containers](https://github.com/mozilla/standards-positions/issues/1418) [open]
- **W3C TAG:** [Other Spec Review: Single-Axis Scroll Containers](https://github.com/w3ctag/design-reviews/issues/1222) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome for Developers (@ChromiumDev) on X](https://x.com/ChromiumDev/status/2098134897923658034) — *by @ChromiumDev, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) `v7.2.1` — Infinite scroll component for React. Zero runtime dependencies, IntersectionObserver-based, TypeScript-first. Window scroll, fixed-height, and custom container modes. Pull-to-refresh and inverse (chat) scroll included.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGrpmReIcFmrFS2CW2-qwBgmEoWqypYB0HkebC1GcCKqOiZRbYJ-zfZc1VIJgv-fxDKzBujNTWaEMw3svUN0zrZ0Jxws1GJ0RUJBTAGJjvUxrcY0hszBNRZ8S-aV_9abkq2glPPJLpDj89X) *(vertexaisearch.cloud.google.com)*
  > What&#39;s new in web UI | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษา...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHrwc6wc-1eZatLGUfDkU1DKw4T7LS5a9PLgEKmx_r-mv5q4SDGCA-58CYAoIxqXz7U0OzsqgzfoOFKFJPpClS5zrdhPCZL2p5bhGHrnBvQNI5Tma_P5zAqi-Zdo6icGbpjIK9LiAmms9SPaYI6tL4cp7RbjQUfc5YtNbAPNglVEICdYaSrPYk=) *(vertexaisearch.cloud.google.com)*
  > デベロッパー テストの準備完了: 単一軸スクロール コンテナ | Blog | Chrome for Developers メイン コンテンツにスキップ / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษา...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLdtV93TMES00gX2J6cNbt2aw-uKW5VJjQE4z3YFq-vtjjgo44HKwtUKVacDCTqJA-MED0JbaDIxcMXl7ZQi7eY0uWyBhflKmXfvTYH81j2a-dr9SYwVPLCkTnWA_tiq0GCEx-3Fj_ZnFtF-FnhvOZSxlDAuKgbCjsYUDDRw==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/single-axis-scroll-containers: Single-Axis Scroll Containers explainer · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHc9yBlYy9c0eGnKNCRrRBt-Di6Wp7vRHiPfveSfIp7iTZsst4BklKbLs666N--JE-qby91fFA-gydjyjQIRzBGEB0EUIQrDI1xngM4I_WWjbLJKJZw3PbPBx9C85aklk6sfVbFoyrD45sme3OZW1Nb1OihbK1KKQ==) *(vertexaisearch.cloud.google.com)*
  > GitHub - explainers-by-googlers/single-axis-scroll-snap: Scroll snap for single axis scroll containers · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_MbQTtSH-1IGrQ1a7rnXeKEHbNwX83Hl04k7map3HPgTyDNM8UTlYCvjzEwxd77b7jP0hb1BIMRwMpOHsqev3FYH7AjUv8vuGnVIwCHwBeGLJMqksxQ==) *(vertexaisearch.cloud.google.com)*
  > Chrome 新功能 | Docs | Chrome for Developers 跳至主要內容 / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG1_OUHnz-ppP_u5p5vDXhhQm07wc7RrmwW-2AzUj4rP8Hs7GOnavYyDMfb8gE2O3-TjNR0tnB1Z6yiEpDrO0aXkyBzs8bhER8EXAtpI729z_Ak6ZpUcuNoEVumjDihbUm4NE5AzKqFtt1lSpIShaJTBsEVW2BeIorvDud4yXxyhDV9Y1XbgJQ=) *(vertexaisearch.cloud.google.com)*
  > Gotowe do testów deweloperskich: kontenery z przewijaniem w jednej osi | Blog | Chrome for Developers Przejdź do głównej treści / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt T...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHcs0TPpihcU7UxpiyjeKDivHP01TAy9GffTm4ejAkxYKNraKRQAEjQZGzNNdPIoBedGuPdGfRW8XP8-bhVcfkcmZMcD32UFylTSivh64oEyScT2gt9uXgeShNdqd695zA7dadl) *(vertexaisearch.cloud.google.com)*
  > Chrome 153 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGo-aWQuD8qoLl7ainK4jVmgbQsbiwUqSJAtb9MWOzkrRWn5V0QIWA8zdWlY1_XfSvC8cAouw1LWkF2oAU-KE-jaBokfq5YpP5Kh3gK9EIGqeOysAGOBQJpjMZTN5Y1Fh4NCk7VwALHIhjB) *(vertexaisearch.cloud.google.com)*
  > Other Spec Review: Single-Axis Scroll Containers · Issue #1222 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFh28byX-Oy4pG_TXtNdId2-nFCCHQ7nU1YlQ6f1u7_O-3JBL6M89una6Tv7iVJOznKYWM2N1GkDPwu2zLSXPhxOKznq6irvbejgJd8Gar9Ylf1hiv_LL6mI2yTJjMWLs1lzZ8rZjywJe4=) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-r2lhx_7PFxsjTXnqP6HOZwj5MVNaUYT6p2MEQh22EU5DHlIa2ca7WkClXKU9IAF7DQg-tZ66nNtMWG66FA388dJOVpo5EV-RmIVGSjxs4l-oBRu5in_0q8Rd5h8yhlmbBhUA5iku8TUXimKM2Ak1zoRo30XLI0Lfay7WIkcAtrHrNOSGZK8wT571wsOeEcL9kn1gb6q7ymzzQv0O) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [devpuff.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFOUui7veCQ3JZEyzpJiSgh_DVlKY0ZlRlpttuZgWTnvYZFnugka0zJJypvKNgHGdMnCrAGnE2rYd7r-jkxg4V8uIcIqaP4pb0aH1RFLTaCQABdLuD0gEeREDSTDSFpqA==) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgr6RG0ovZ32fxmvsCTVuWclYhfGF3htIKs85GLbcCUJZeYaCo3bVUg3P6xFDsjupFcIJNhnUcy9ZFprfT636cql5_GYT2uMY3VuLtTPcSg5alshzgeDH2PVtvzIxliWI63QCkplx6WygU-NX4VJFsr96VHzDr66WJPpsl7gbibxRElOw=) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnm4JkFwKDhDMaXbQWDelv6XvPWPANKXRK3f1pnQGzTEi4Qcu5w6Es7zJ4vY9jXcelZ1Op1bZRly-yOzUQVjchuDaa7A8dOyUBe-7BH__kHEUdZByxMpXfL-w2T-LqSqvq9bYkkvDR) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEcysUVvW6K6847PlPCugRHaJsI12hW7XKOklLm8Z9u5Lu5PxRQK0dZaKv-u_i4mXMHqkVvp1bcD3zD56GFRf8WBMsWKdl70jEGLwCU6I-yjnEZySVhk9khtuuycVqbH85EsGcpTuJ5) *(vertexaisearch.cloud.google.com)*
  > **Single-axis scroll containers** represent a significant milestone in CSS layout and scrolling behavior. Historically, CSS treated `overflow` such that setting a scrollable value (`scroll`, `auto`, `hidden`) on one axis while leaving the other axis
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] &gt;&gt;&g...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`</strong> ...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong> &gt; &gt;...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavior with th...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17200.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; *Blink component* &gt;&gt; Blink&gt;Layout ... a way to make a scroll container responsible &gt;&gt; for only a single axis. The affects features that depend on scroll &gt;&gt; containers, namely `position: sticky` and DOM scroll AP...
- [CSS Scroll Snap: The Complete Guide to Smooth Navigation \| Effect.Labs Blog](https://effect-labs.com/en/pages/blog/scroll-snap-sections.html) *(effect-labs.com · 2026-04-03T00:19:00)*
  > One of the most popular use cases for Scroll Snap is creating full-screen sections, as seen on many modern landing pages. ... /* Main container - takes full viewport */ .fullpage-container { height: 100vh; overflow-y: auto; scroll-snap-type: y mandat...
- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17374.html) *(mail-archive.com)*
  > This allows `position: sticky` to be constrained by different ancestor scroll containers per axis, and gives authors a way to ensure an axis using `overflow: clip` stays in place.
- [JavaScript scrollIntoView() Explained By Examples](https://www.javascripttutorial.net/javascript-dom/javascript-scrollintoview) *(javascripttutorial.net · 2023-12-17T10:16:36)*
  > In this tutorial, you&#x27;ll learn how to scroll an element into the view using the JavaScript scrollIntoView() method.
- [Javascript scrollIntoView() method \| by Twinkal Doshi \| Medium](https://twinkal189.medium.com/javascript-scrollintoview-method-198436f81648) *(twinkal189.medium.com · 2024-03-03T06:53:39)*
  > &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;style&gt; #scroll-div { margin-left: 100%; padding-right: 100%; height: 800px; background-color: pink; overflow: auto; } &lt;/style&gt; &lt;body&gt; &lt;h1&gt;Javascript scrollIntoView&lt;/h1&gt; &lt;button oncl...
- [HTML DOM Element scrollIntoView() Method](https://www.w3schools.com/jsref/met_element_scrollintoview.asp) *(w3schools.com)*
  > cssText getPropertyPriority() ... ❮ Previous ❮ Element Object Reference Next ❯ · <strong>Scroll the element with id=&quot;content&quot; into the visible area of the browser window</strong>: const element = document.getElementById(&quot;content&quot;)...
- [scrollIntoView: Browser Support, Options, Issues](https://www.testmuai.com/learning-hub/scrollintoview-browser-support) *(testmuai.com · 2026-05-02T00:00:00)*
  > scrollIntoView is <strong>a W3C JavaScript method that scrolls an element into view</strong>. Learn which browsers support it, the options it accepts, and the known issues.
- [Define where an element should be scrolled to using elem.scrollIntoView \| Stefan Judis Web Development](https://www.stefanjudis.com/today-i-learned/define-where-an-element-should-be-scrolled-to-using-elem-scrollintoview) *(stefanjudis.com · 2023-11-27T07:21:55)*
  > document.querySelector(&#x27;.some-elem&#x27;).scrollIntoView({ behavior: &#x27;smooth&#x27;, // &#x27;auto&#x27; or &#x27;smooth&#x27; block: &#x27;center&#x27;, // &#x27;start&#x27;, &#x27;center&#x27;, &#x27;end&#x27; or &#x27;nearest&#x27; inline...
- [JavaScript scrollIntoView() Method: Syntax, Parameters & Examples](https://codeshack.io/references/javascript/scrollintoview) *(codeshack.io · 2026-06-23T00:00:00)*
  > Click the button below.&lt;/p&gt; &lt;div style=&quot;height:120px&quot;&gt;&lt;/div&gt; &lt;p id=&quot;target&quot; style=&quot;color:#1c7ce9;font-weight:700&quot;&gt;&gt;&gt; Target paragraph &lt;&lt;&lt;/p&gt; &lt;div style=&quot;height:120px&quot...
- [scrollIntoView axis options](https://codepen.io/stefanjudis/pen/wvMVLOQ) *(codepen.io)*
  > You can apply CSS to your Pen from any stylesheet on the web. Just put a URL to it here and we&#x27;ll apply it, in the order you have them, before the CSS in the Pen itself. You can also link to another Pen here (use the .css URL Extension) and we&#...
- [Take control of your scroll - customizing pull-to-refresh and overflow effects \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/overscroll-behavior) *(developer.chrome.com · 2017-11-14T00:00:00)*
  > For situations like the Twitter PWA, it might make sense to disable the native pull-to-refresh action. Why? In this app, you probably don&#x27;t want the user accidentally refreshing the page. There&#x27;s also the potential to see a double refresh a...
- [\[css-overflow-4\] Allow scrollable overflow to be clipped in off-axis \[440038212\] - Chromium](https://issues.chromium.org/issues/440038212) *(issues.chromium.org)*
  > Make scroll timelines support single-axis scroll containers <strong>Scroll timelines set to `nearest` and view timelines now resolve to the nearest ancestor scroll container for the requested axis</strong>. For these cases, the writing mode of the ne...
- [CSS overflow property](https://www.w3schools.com/cssref/pr_pos_overflow.php) *(w3schools.com)*
  > div.ex1 { overflow: scroll; } div.ex2 { overflow: hidden; } div.ex3 { overflow: auto; } div.ex4 { overflow: clip; } div.ex5 { overflow: visible; } Try it Yourself »
- [CSS overflow-x property](https://www.w3schools.com/cssref/css3_pr_overflow-x.php) *(w3schools.com)*
  > div.ex1 { overflow-x: scroll; } ... » ... <strong>The overflow-x property specifies whether to clip the content, add a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges</strong>...
- [CSS The overflow Property](https://www.w3schools.com/css/css_overflow.asp) *(w3schools.com)*
  > <strong>With the hidden value, the overflow is clipped, and the rest of the content is hidden</strong>: You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content over...
- [Clipping Content Using the overflow CSS Property \| kirupa.com](https://www.kirupa.com/html5/clipping_content_using_css.htm) *(kirupa.com · 2013-08-03T00:00:00)*
  > Learn how to use the overflow CSS property to keep your normal and absolutely positioned content neatly contained within a boundary.
- [Configuring horizontal and vertical scrolling in Figma - LogRocket Blog](https://blog.logrocket.com/ux-design/configuring-horizontal-vertical-scrolling-figma) *(blog.logrocket.com · 2024-08-06T20:17:06)*
  > With your frame selected, this time under Overflow scrolling, select Horizontal and vertical scrolling: Now test out your prototype in presentation view. <strong>Place your cursor within the bounds of your frame and scroll up, down, left, and right</...
- [CSS - overflow-\* - とほほのWWW入門](https://www.tohoho-web.com/css/prop/overflow.htm) *(tohoho-web.com · 2025-03-09T00:00:00)*
  > position:sticky を使用する際、親要素に display:hidden を指定したい場合、hidden を指定してしまうと sticky が効かなくなります。hidden の代わりに display:clip を使用することでこの問題を回避することができます。 ... .my-clip-example { width: 400px; height: 180px; margin: 8px auto; border: 1px solid #ccc; overflow: auto; .c...
- [New in Chrome 153 \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/new-in-chrome-153) *(developer.chrome.com · 2026-09-08T00:00:00)*
  > <strong>Chrome 153 extends the CSS overflow property to support scrollable values (auto, scroll, hidden) combined with clip (for example, overflow: scroll clip or overflow: auto clip). This creates a scroll container for a single axis without turning...
- [The Symmetry of State: Why Flutter Deserves context.value and context.state](https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250) *(dev.to · Randal L. Schwartz · Sep 11)*
  > Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17221.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Best, &gt;&gt;&gt; &gt;&gt;&gt; Alex &gt;&gt;&gt; &gt;&gt;&gt; On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt;&gt;&gt; &gt;&gt;&gt;&gt; *Contact emails* &gt;&gt;&gt;&gt; [email protected] ...
- [\[blink-dev\] Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17143.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Explainer https://github.com/explainers-by-googlers/single-axis-scroll-containers Specification https://github.com/w3c/csswg-drafts/pull/13903 Summary <strong>Extends the `overflow` property to support scrollable values together with `clip`...
- [\[blink-dev\] Re: Intent to Ship: Single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17194.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Best, Alex On Tuesday, August 11, 2026 at 11:26:16 AM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/single-axis-scroll-containers</strong>...
- [\[blink-dev\] Intent to Prototype: Scroll snap for single-axis scroll containers](http://www.mail-archive.com/blink-dev@chromium.org/msg17201.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/single-axis-scroll-containers`)*
  > Blink component Blink&gt;Scroll Web Feature ID scroll-snap Motivation This is part of the single-axis scroll container feature (https://github.com/explainers-by-googlers/single-axis-scroll-containers) to <strong>align the scroll snap behavi...

## 📚 Platform Documentation & Specifications

- [Element: scrollIntoView() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) *(developer.mozilla.org)*
- [\[css-overflow-4\] Allow scrollable overflow to be visible in ...](https://github.com/w3c/csswg-drafts/issues/13445) *(github.com)*
- [\[css-overflow-4\] Allow scrollable overflow to be clipped in off-axis · Issue #12289 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12289) *(github.com)*
- [\[cssom-view\] Inconsistencies between partially offscreen scroll-into-view · Issue #4778 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/4778) *(github.com)*
- [\[cssom-view\] Add ScrollIntoViewMode ("always", "if-needed"); add FocusScrollOptions by zcorpan · Pull Request #5677 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/pull/5677) *(github.com)*
- [\[css-overflow\] Should the viewport accept \`overflow: clip\`? · Issue #12687 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12687) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 12 planned queries — **29 verified relevant**
  - `"chromestatus.com/feature/5067363861004288" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/single-axis-scroll-containers" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"github.com/w3c/csswg-drafts/pull/13903" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (0 returned)
  - `"Single-axis scroll containers" API` — *Core feature API query* (5 returned)
  - `"Single-axis scroll containers" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"scrollintoview()" OR "single-axis" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Single-axis scroll containers" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Single-axis scroll containers" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"single-axis scroll containers" OR "overflow: scroll clip" guide OR tutorial` — *Finds early developer guides, articles, and blog breakdowns exploring single-axis scroll containers and their impact on sticky positioning.* (8 returned)
  - `css ("overflow: scroll clip" OR "overflow: clip scroll") "position: sticky"` — *Surfaces real-world CSS code examples and demos using the combined scroll and clip overflow syntax for multi-directional sticky layouts.* (1 returned)
  - `"Single-axis scroll containers" ("intent to prototype" OR "intent to ship" OR chromestatus OR "standards-positions")` — *Tracks browser engine signals, Chromestatus entries, and WebKit/Gecko standards position issues regarding the feature.* (6 returned)
  - `site:github.com/w3c/csswg-drafts "single-axis scroll" OR ("overflow" "clip" "scrollIntoView")` — *Discovers CSS Working Group specification debates, issue tracking, and architectural feedback regarding DOM scrolling and clipping behavior.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 549 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5067363861004288)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5067363861004288)
- [Specification](https://github.com/w3c/csswg-drafts/pull/13903)
- [Chromium Tracking Bug](https://issues.chromium.org/440038212)
