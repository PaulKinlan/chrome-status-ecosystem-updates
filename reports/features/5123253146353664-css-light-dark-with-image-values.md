# CSS light-dark() with image values

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Extends the CSS light-dark() function to accept image values (url(), image-set(), none) in author stylesheets, allowing image properties like background-image, list-style-image, border-image-source, cursor, and content to automatically switch between images based on the user's preferred color scheme. Previously this was only allowed in UA stylesheets. This aligns with the CSS Color 5 spec and matches Firefox's existing implementation.

### Motivation

Without this feature, web developers who want to switch images based on the user's color scheme preference must use @media (prefers-color-scheme) queries or maintain separate stylesheets for light and dark themes. This is verbose and error-prone, especially when the same element uses light-dark() for its color properties but must use a media query for its image properties.

The light-dark() function already supports color values, making it the natural place for image values as well. Allowing url(), image-set(), and none inside light-dark() for properties like background-image, list-style-image, border-image-source, cursor, and content lets developers keep light/dark variants co-located and consistent with their color declarations.

Firefox has already shipped this behavior. Aligning with the CSS Color 5 spec and Firefox removes an interoperability gap and reduces friction for developers building adaptive UIs.

## Ecosystem Status

- **Momentum:** High (430 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** CSS light-dark() with image values is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @nt1m: "Will mark this as positive a week from now pending objections...."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Use the character in the reference image as the same person. Preserve the face, hairstyle, hair color, eye color, appare" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS light-dark() with image values](https://github.com/WebKit/standards-positions/issues/658) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Use the character in the reference image as the same person. Preserve the face, hairstyle, hair color, eye color, appare](https://twitter.com/MioWorkshop/status/2096886200900653248) — *by @MioWorkshop, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Firefox DevTools on X: "You can now* simulate prefers-color-scheme media from the inspector, so you can implement a super fancy dark mode on your website 🌌 The button cycles through: - default (what's set at OS level) - dark - light *Nightly, will be in Firefox 87 — @nicolaschevobbe https://t.co/WyTCPuGrul" / X](https://twitter.com/FirefoxDevTools/status/1359896019757113344) — *by @FirefoxDevTools, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Steve Schoger on X: "🔥 When implementing dark mode, don’t throw away the visual cues in the light version by naively inverting the color scheme. Close elements should still be lighter and distant elements should still be darker – even in a dark UI. https://t.co/RNxgIppDmn" / X](https://twitter.com/steveschoger/status/1151160261170126850?lang=en) — *by @steveschoger, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Write for Mac on Twitter: "@firdaus_halim yes we have tweaked the CSS to incorporate the new dark theme. It will be saved on subsequent updates from now."](https://twitter.com/writeformac/status/498027057314426881) — *by @writeformac, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Webflow (@webflow) on X](https://twitter.com/webflow/status/1651959653150932994) — *by @webflow, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Dark Mode! - Moqups](https://twitter.com/moqups/status/1753463630916411654) — *by @moqups, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@csstools/postcss-light-dark-function](https://www.npmjs.com/package/@csstools/postcss-light-dark-function) `v3.0.4` — Use the light-dark() color function in CSS

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGEx_rj72QdEkEluLBhhiugvgISeZKZZdHWTyimtT8cwFjVBigFQ6n_goNupjUeUJbedRsJrg3fas_52P4mUaCmSVMR2Mh-S4vDyckBbwGGOoSVtTNm1V0GUiMHfpLVXAXW2yJ6XqwTg-iot8VW) *(vertexaisearch.cloud.google.com)*
  > CSS light-dark() with image values · Issue #658 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF2o7M8549xTgx4XFeQpE5F6Z-SqmhojVlzmzlysNMz0WrnUSTeW7c-ZlDObfu0EU8WEobqroCPr7nE8KrMKp3PzmBePyCSv67leohgSpDFT2dFw54zLTmwC4a3ccqbadMcM82Hi-Y=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [bram.us](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0Ne4i3DfXYcttf7kFM9FbykXMEqJsBgjjU2v9fjEDybSDJtS9S0PhZzQHzD_yhu1aVcuGYpfh8qPdv8qSIUVyo1El_cvBTsfzUat67r_SdgvxHCvhXR2hoXe6fOE-Rq1Qxq3r5iYBcNZXxL-IsymLwdQSVGtldqSbnnViVIWvq51Q_yD_FjdtV41SNCQXkNn0A1qf2iu0-tMXu2Q6vQ==) *(vertexaisearch.cloud.google.com)*
  > More Easy Light-Dark Mode Switching: light-dark() is about to support images! &#8211; Bram.us Skip to content Bram.us A rather geeky/technical weblog, est. 2001, by Bramus More Easy Light-Dark Mode Switching: light-dark() is about to support images! ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEslxFbEKqvgFZb50vBw8yoBksjo6RLo59WFIPS1oihuJ3WQ8zESGOAlrZTkmqmGLJq_58OOFBkqmxIMDv_bo2u-njxTGF5WTOqHMMaEsO36HpL-B2BkF_WhRNcRbR15y1hTJp5CNUH3JHwu5Mr7C8WCrsqxrO3JqSsxoxSTK7z1QcLLzJ6q0m3nVzaYWg=) *(vertexaisearch.cloud.google.com)*
  > light-dark() CSS function - CSS | MDN Skip to main content Skip to search Toggle sidebar Web CSS Reference Values <color> light-dark() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語 light-dark(...
- [daily.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFVvBJsOa8odiPyVw-mVFuNxexOhOMPlPQMikir7RAF9F3LdIsUvubPqw4BWS_E5dzSuiV1e1Mr-CVZfmKmJD0DMgTNRJBNYJj1ol0eVyLsbcz7-G7m33szKYla71IaXWycGRKL7w3EmmRFbEsOHkwd-15WxiTrPSxNcCoHbr-vvCccaeDxGf3ORPFxZGAsSL3-35JiOG99bBQZuilpe3hRRQ==) *(vertexaisearch.cloud.google.com)*
  > More Easy Light-Dark Mode Switching: light-dark() is... Bram.us Read post More Easy Light-Dark Mode Switching: light-dark() is about to support images! The CSS `light-dark()` function is being extended beyond colors to support `<image>` values, allow...
- [dev.to](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEVaeevgJZufzu8jBf2gYJfEsRJ1giezyXEAnXkKa6fU6tT9HKPsUXbWCeDmtbwy_Ny_IHAGhip2dEHJ2NuGqu7PI-szElj3JWNvJSFyiXsS6J4ua97L-FOQ_hcc2Apb0vy7zGm_xp9_fHGVmqL4LvbAzIyvaM1qOYTFvkcbEDe8ArNLOMm3vYvT-iC4Rn4OD7ZswP2) *(vertexaisearch.cloud.google.com)*
  > Toggle Light and Dark theme with user&#39;s OS preference as first using 10 lines of JavaScript - DEV Community Skip to content Powered by Algolia Log in Create account DEV Community Add reaction Like Unicorn Exploding Head Raised Hands Fire Jump to ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7dEBdPErO69UEldAxZyauhuIDrkDTbd2bCwsWOnd2xlXmVP1eSu5oyjNnjTuahM2L5zhab51jVgA6_YldqKYcc2bTj6-7xBAq_tvQM__4h2cyXjwTtafpMBfXbig5A0C5WT-whHmDnQ==) *(vertexaisearch.cloud.google.com)*
  > Come to the light-dark() Side | CSS-Tricks Skip to main content CSS-Tricks Since 2007 dark mode functions UI/UX Design Come to the light-dark() Side Sara Joy on Oct 25, 2024 You&#8217;d be forgiven for thinking coding up both a dark and a light mode ...
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEAYR1xsoc49j2l9dsnTphVPZayAQprJ6EZqNRd07OgO4DvkFId1hohKyN-PuDhAIaCmHmpY98XFTaGjkTAEWHuS1SmXl5qxjU_otBeIzR9l87yg0QxZ33OmYWIEs6oh5V3SonVZkNZaKiq7073CWIqXKc-R4Wkje3m3WZnPqLU3V3w08XI7ig5q5hPvY9yisY=) *(vertexaisearch.cloud.google.com)*
  > Medium Style Queries and a Custom light-dark() Function | by Luis Torres | Medium Sitemap Open in app Sign up Sign in Get app Write Search Sign up Sign in Luis Torres Frontend Engineer making things invisible CSS UI Front End Development Web Developm...
- [[blink-dev] Re: Intent to Ship: CSS light-dark() with image values](http://www.mail-archive.com/blink-dev@chromium.org/msg16615.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt;&gt; https://<strong>chromestatus.com/feature/5123253146353664</strong>?gate=6509279727190016 &gt;&gt;&gt;&gt; &gt;...
- [CSS Color Module Level 5](https://w3c.github.io/csswg-drafts/css-color-5) *(w3c.github.io)*
  > https://<strong>drafts.csswg.org/css-color-5</strong>/ Latest published version: https://www.w3.org/TR/css-color-5/ Previous Versions: https://www.w3.org/TR/2024/WD-css-color-5-20240229/ Feedback: CSSWG Issues Repository · Editors: Chris Lilley (W3C)...
- [[blink-dev] Intent to Ship: CSS light-dark() with image values](http://www.mail-archive.com/blink-dev@chromium.org/msg16584.html) *(mail-archive.com)*
  > Yes https://wpt.fyi/results/css/css-color/light-dark-image-none.html https://wpt.fyi/results/css/css-color/light-dark-image-none-interpolation.html https://wpt.fyi/results/css/css-properties-values-api/register-property-syntax-parsing.html https://wp...
- [[blink-dev] Re: Intent to Ship: CSS light-dark() with image values](http://www.mail-archive.com/blink-dev@chromium.org/msg16593.html) *(mail-archive.com)*
  > &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; &gt;&gt; *Debuggability* &gt;&gt; *No information provided* &gt;&gt; &gt;&gt; *Will this feature be supported on all six Blink platforms (Windows, Mac, &gt;&gt; Linux, ChromeOS, Android, and Androi...
- [CSS light-dark() function](https://www.w3schools.com/cssref/func_light-dark.php) *(w3schools.com)*
  > The CSS light-dark() function <strong>enables two color-value settings, and will return the first value if the user has set a light color theme, and the second value if the user has set a dark color theme</strong>.
- [Dark Mode in CSS Guide | CSS-Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web) *(css-tricks.com · 2025-09-05T15:18:43)*
  > You already know the basic task: <strong>swap lighter color values for darker ones and vice versa</strong>. But there are some UI elements and enhancements that are more nuanced and require more attention.
- [How I've used light-dark() for light and dark mode - Peter Brumby](https://www.pbrumby.com/2026/02/01/how-ive-used-light-dark-for-light-and-dark-mode) *(pbrumby.com · 2026-06-27T11:03:51)*
  > <strong>The light-dark() function lets you pick one value for light mode and another for dark mode</strong>. The browser will automatically choose which one to use. For light-dark() to work, you need to tell the browser your site supports both themes...
- [How to have Dark & Light Mode Images that also works with User Choice: Chip Cullen](https://chipcullen.com/how-to-have-dark-mode-image-that-works-with-user-choice-yo) *(chipcullen.com · 2022-04-15T00:00:00)*
  > <strong>&lt;picture&gt; &lt;source srcset=&quot;dark-mode.png&quot; media=&quot;(prefers-color-scheme: dark)&quot;&gt; &lt;img src=&quot;light-image.png&quot; alt=&quot;An image with two color modes&quot;&gt; &lt;/picture&gt;</strong> (Taken from thi...
- [[CSS] - How to Make an Image Appear Darker in CSS - | SheCodes](https://www.shecodes.io/athena/2560-how-to-make-an-image-appear-darker-in-css) *(shecodes.io)*
  > Learn how to make an image look darker in CSS <strong>using the brightness filter property</strong> and techiques discussed in this tutorial.
- [How to Toggle Dark Mode | Treehouse Blog](https://blog.teamtreehouse.com/dark-mode-in-css) *(blog.teamtreehouse.com · 2023-09-11T17:49:39)*
  > Because --main-bg-color holds the value of #333, background-color: var(--main-bg-color) is the same as writing background-color: #333 Why is this so awesome? Well because now if the color needs to be changed, we only need to change the variable. Not ...
- [How to implement light or dark modes in CSS | Creative Bloq](https://www.creativebloq.com/how-to/how-to-implement-light-or-dark-modes-in-css) *(creativebloq.com · 2021-02-21T18:51:21)*
  > Let&#x27;s see what happens when we add an image to our page. The methods we&#x27;ve explored so far either cause us to lose control over the styles or require a lot of maintenance in order to make sure everything is updated in dark mode. There&#x27;...
- [How to achieve dark/light mode with CSS. - DEV Community](https://dev.to/uduakabaci/how-to-achieve-darklight-mode-with-css-3p07) *(dev.to · 2021-12-08T12:10:02)*
  > Add that to the increasing need to support dark and light modes in your app and you’ll have an overwhelming app starring you in the face. It helps to have methodologies and pre-processors handy but even with these tools, CSS can easily balloon into a...
- [More Easy Light-Dark Mode Switching: light-dark() is about to support images! – Bram.us](https://www.bram.us/2026/03/19/more-easy-light-dark-mode-switching-light-dark-is-about-to-support-images) *(bram.us · 2026-03-19T00:00:00)*
  > <strong>CSS light-dark() is being extended to support images</strong>.
- [Light and dark mode image in HTML - DEV Community](https://dev.to/dailydevtips1/light-and-dark-mode-image-in-html-lji) *(dev.to · 2020-10-29T04:48:58)*
  > By default, it will show the light image, but it will show the dark image if the person prefers the dark scheme.
- [light-dark() | CSS-Tricks](https://css-tricks.com/almanac/functions/l/light-dark) *(css-tricks.com · 2025-10-07T17:23:12)*
  > <strong>The light-dark() function takes two color values—one for “light” mode and one for “dark” mode</strong>, and automatically switches between them depending on
- [How to make images react to light and dark mode](https://larsmagnus.co/blog/how-to-make-images-react-to-light-and-dark-mode) *(larsmagnus.co · 2022-09-04T00:00:00)*
  > In this example, the prefers-color-scheme CSS media feature is used to only show the dark-image.png if the condition of media evaluates to true. If the condition is false or if picture is unsupported, light-image.png will be displayed. See this in ac...
- [How to Support Light and Dark Themes in PWA Using Only CSS - DEV Community](https://dev.to/fedtti/how-to-support-light-and-dark-themes-in-pwa-using-only-css-6ca) *(dev.to · 2026-01-07T16:43:02)*
  > <strong>Web applications now need to be displayed in two modes: light and dark</strong>. There is no way around it,...
- [How to Provide Light and Dark Theme Color Variants in PWA - DEV Community](https://dev.to/fedtti/how-to-provide-light-and-dark-theme-color-variants-in-pwa-1mml) *(dev.to · 2026-01-07T11:36:13)*
  > Yes, because using CSS standards it’s possible to move the setting from the manifest to the HTML markup: this will load a different theme_color every time a user opens your PWA, directly taking the preferred value.
- [Psychology of colors - Light or Dark Mode | miTT PWA](https://mittl-medien.de/persuading-the-website-visitors-with-light-or-dark-mode) *(mittl-medien.de)*
  > <strong>Using the calc function with + or - operator over the CSS custom property --color-pwa-primary-l</strong>, we can reduce or increase, the light so, with less light is dark and more is lightened.
- [html - How do I implement dark mode into a PWA with no framework? - Stack Overflow](https://stackoverflow.com/questions/58578403/how-do-i-implement-dark-mode-into-a-pwa-with-no-framework) *(stackoverflow.com)*
  > However, the dark mode can still be applied by using a CSS class fallback. Copy/* Fallback for older browsers or manual mode */ body.dark { /* Dark mode variables go here */ } I’ve tested this in my PWA on iOS 13 and iPadOS, and they both seem to wor...
- [CSS and PWAs: Some Tips for Building Progressive Web Apps — SitePoint](https://www.sitepoint.com/pwa-css-considerations) *(sitepoint.com · 2024-11-13T16:52:14)*
  > You can also use CSS containment to limit the area of the page that needs to be re-rendered when styles change. Creating a dark mode for your PWA involves <strong>using CSS to provide an alternative color scheme that reduces light emitted by the scre...
- [Dark Mode Support - Real-World PWA: The Making Of Paint.Js.Org - Part 5 - Thinktecture AG](https://www.thinktecture.com/en/pwa/making-of-paint-js-dark-mode) *(thinktecture.com · 2022-03-09T07:44:28)*
  > Everything is achieved with the help of the prefers-color-scheme media query and CSS custom properties. ... Don’t miss any content on Angular, .NET Core, Blazor, Azure, and Kubernetes and sign up for our free monthly dev newsletter. ... A key aspect ...
- [App design | web.dev](https://web.dev/learn/pwa/app-design) *(web.dev)*
  > <strong>Using a meta tag, you can have options for different schemes, such as dark or light mode and they will be used based on the user&#x27;s preference</strong>. Background color: defines the color of the window before the app and its CSS are load...
- [How I Built a Dark Mode PWA without JS Libraries in 24 Hours - DEV Community](https://dev.to/mpuckett/how-i-built-a-dark-mode-pwa-without-js-libraries-in-24-hours-2hf2) *(dev.to · 2020-01-04T16:42:56)*
  > Although I always use Dark Mode, I wanted to use the native CSS media query that detects Dark Mode in the system settings, in case someone else was used to Light Mode instead:

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Re: Intent to Ship: CSS light-dark() with image values](http://www.mail-archive.com/blink-dev@chromium.org/msg16615.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5123253146353664`)*
  > &gt;&gt;&gt;&gt; *No information provided* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt;&gt; https://<strong>chromestatus.com/feature/5123253146353664</strong>?gate=6509279727190016 &gt;&gt;&gt...
- [csswg-drafts/css-color-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-color-5/Overview.bs) *(github.com)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > Group: csswg · TR: https://www.w3.org/TR/css-color-5/ ED: https://<strong>drafts.csswg.org/css-color-5</strong>/ Previous Version: https://www.w3.org/TR/2024/WD-css-color-5-20240229/ Work Status: exploring · !Delta Spec: yes · Editor: Chris...
- [CSS Color Module Level 5](https://www.w3.org/TR/css-color-5) *(w3.org · 2026-09-02T03:55:04)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > https://www.w3.org/TR/css-color-5/ Editor&#x27;s Draft: https://<strong>drafts.csswg.org/css-color-5</strong>/ Previous Versions: https://www.w3.org/TR/2026/WD-css-color-5-20260605/ https://www.w3.org/TR/2026/CRD-css-color-4-20260901/ Histo...
- [CSS Color Module Level 5](https://w3c.github.io/csswg-drafts/css-color-5) *(w3c.github.io)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > https://<strong>drafts.csswg.org/css-color-5</strong>/ Latest published version: https://www.w3.org/TR/css-color-5/ Previous Versions: https://www.w3.org/TR/2024/WD-css-color-5-20240229/ Feedback: CSSWG Issues Repository · Editors: Chris Li...
- [[css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com · 2026-06-06T16:37:56)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > See: https://<strong>drafts.csswg.org/css-color-5</strong>/#color-mix-result Interpolate a and b’s colors as described in CSS Color 4 § 13. Color Interpolation, with a progress percentage equal to (b’s percentage) / combined percentage), if...
- [[CSSWG] FPWD Request for CSS Color Module Level 5 · Issue #209 · w3c/transitions](https://github.com/w3c/transitions/issues/209) *(github.com · 2020-01-24T17:12:42)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > CSS Color Module Level 5 https://<strong>drafts.csswg.org/css-color-5</strong>/ Thursday 30 Jan · https://<strong>drafts.csswg.org/css-color-5</strong>/#abstract · https://<strong>drafts.csswg.org/css-color-5</strong>/#status (as ED for now...
- [[csswg-drafts] [css-color-5] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > The text states: &gt; This function takes, firstly, a single color (typically a background, but not necessarily), and then second, a list **of two or more** colors; where as the grammar indicates one or more is fine: &gt; color-contrast() =...
- [[css-color-5] Grammar for parsing relative colors? · Issue #7721 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7721) *(github.com · 2023-07-04T00:00:00)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > Is it just me, or is the grammar for parsing relative colors missing? https://<strong>drafts.csswg.org/css-color-5</strong>/#relative-colors Channel keywords are defined for each color function, and example usage i...
- [CSS Color 5 2022-05-20 > 2022-08-20 · Issue #29 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/29) *(github.com · 2022-05-20T20:25:47)* *(Cites: `https://drafts.csswg.org/css-color-5/#light-dark`)*
  > name of spec to be reviewed: CSS Color Module Level 5 URL of spec: <strong>https://drafts.csswg.org/css-color-5/</strong> or https://www.w3.org/TR/2022/WD-css-color-5-20220428/ What and when is your next expected transition? Moving to CR ar...

## 📚 Platform Documentation & Specifications

- [csswg-drafts/css-color-5/Overview.bs at main · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/blob/main/css-color-5/Overview.bs) *(github.com)*
- [CSS Color Module Level 5](https://www.w3.org/TR/css-color-5) *(w3.org)*
- [[css-color-5][css-color-4] Unclear how to use `progress` in interpolation. · Issue #14021 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14021) *(github.com)*
- [[CSSWG] FPWD Request for CSS Color Module Level 5 · Issue #209 · w3c/transitions](https://github.com/w3c/transitions/issues/209) *(github.com)*
- [[csswg-drafts] [css-color-5] color-contrast() grammar should specify that the second list of colors requires at least two colors (#6055) from weinig via GitHub on 2021-02-28 (public-css-archive@w3.org from February 2021)](https://www.w3.org/mid/issues.opened-818280840-1614538759-sysbot+gh@w3.org) *(w3.org)*
- [[css-color-5] Grammar for parsing relative colors? · Issue #7721 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7721) *(github.com)*
- [CSS Color 5 2022-05-20 > 2022-08-20 · Issue #29 · w3c/a11y-request](https://github.com/w3c/a11y-request/issues/29) *(github.com)*
- [light-dark() CSS function - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) *(developer.mozilla.org)*
- [light-dark() CSS function - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) *(developer.mozilla.org)*
- [CSS color values](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_values) *(developer.mozilla.org)*
- [dark_theme](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 7 planned queries — **33 verified relevant**
  - `"chromestatus.com/feature/5123253146353664" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"drafts.csswg.org/css-color-5" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"CSS light-dark() with image values" API` — *Core feature API query* (2 returned)
  - `"CSS light-dark() with image values" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"light-dark" OR "image-set" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS light-dark() with image values" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS light-dark() with image values" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 4 result(s) found — **5 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 1 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 1 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5123253146353664)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5123253146353664)
- [Specification](https://drafts.csswg.org/css-color-5/#light-dark)
- [Chromium Tracking Bug](https://crbug.com/491829958)
