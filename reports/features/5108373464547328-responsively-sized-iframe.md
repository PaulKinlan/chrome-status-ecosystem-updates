# Responsively-sized &lt;iframe&gt;

> **Report Week:** 2026-W38 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Allow sites to opt into iframes having responsive sizing (sizing the &lt;iframe&gt; element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

### Motivation

This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

## Ecosystem Status

- **Momentum:** High (655 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Responsively-sized iframes address one of the longest-standing developer friction points by allowing embedders to size &lt;iframe&gt; elements to their child document's content height and width without inner scrollbars. Chromium is shipping the capability enabled by default in Chrome 154 via CSS Box Sizing Module Level 4 primitives (such as the frame-sizing property and child document opt-ins). However, Gecko and WebKit have not yet committed to implementations or published official consensus, leaving the feature currently Chromium-exclusive.

### Recommendations
- Actionable Advice: Do not remove existing postMessage-driven iframe resizing solutions just yet, as native responsive iframe sizing is unsupported outside Chromium browsers. Evaluate the feature in Chromium-based test environments, but adopt it in production solely through progressive enhancement alongside fallback resizing mechanisms.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   \* https://github.com/w3c/csswg-drafts/issues/1771  \* https://github.com/w3c/csswg-drafts/issues/13584  \*..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open]
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open]
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open]

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGygF1kRkHmsiY2qYFok0D_o-_1gyxA93-0oquMSQDHoJCB7N50rdi4dFGWtlAbYIpoks2x8j3CpXJW42fRMI6J_y9ltcJdwUUHxrLXqbZO4yTFiKENZTTrxM697rWX-Q_VYQBF99fv) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHh2EEM_YKPa7g9G0sk4wAHr7flhiNKJkpuf-Exlk3aMkNnL49VdTdHnYszSpi5IvXJBKS0TjLXyM5Y5qqBhgMzyf0fhfAtzv9DmVcNGzTeqJYYi_ZOkYSrCIUE_hEWVRCsxfyEqjCjnnS3jKe1vQ==) *(vertexaisearch.cloud.google.com)*
  > Responsively-sized iframes · Issue #653 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your se...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHhlsADT9jQhH6LBYjbxtIkPc7_GyyBcPLeQGfBrmhaqsJ3xxQ0HWNEgM0lrNtZO5TDbpn8WjqHS6yBFSv9NcWRi5Mbut4rtzWvqgyYwGT8_bnQ--sIkr7GPM2Cxph47wT_bqyXduXMsv_E3XJpE9ysml26WUsGM6gAC1Q=) *(vertexaisearch.cloud.google.com)*
  > Window: requestResize() method - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Window requestResize() Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Window: requestResize() ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEFlUHI-6IIbS8j1Ihzlw6oTX8Ih3X5PsuKZNGq7avoij0fHeYIwiQfC_nHHVH0VWc_yzhztnzRQxP6WZ9qfn-svAGM-tj_0qs23EY5iEPwX-_gLOkYnvz48qQmq3Ntqwx3itPkZbOcIkzZVKYi5rWMTX883qTbxZx3Vdpbep_BicUzOZKmSsFKYQoCxNfgbD0=) *(vertexaisearch.cloud.google.com)*
  > csswg-drafts/css-sizing-4/responsive-iframes-explainer.md at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJzAlXnv65i03ghjLlDcHM7wWuCLUpU2a9Dxmiul-aX_kLGftMv32uSmTnHxcYMrJqIrTJ1mPVKRSCYfOnWAkGBfoU9gDcdcKWwYGMXdeC8xKXOrbocB7lYEjuPxxUiPThGhhNkhKgda9UQu1-FxKoCx9S25MISy-0Bbs4tSiYYGsiic7V98nnbe2Gu3VzoSk=) *(vertexaisearch.cloud.google.com)*
  > csswg-drafts/css-sizing-4/responsive-iframes-explainer.md at main · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQElwUejBUOfJw-iP8RTMPmo5p0hGbmKmBhppMLSwUXqUy43-W59h5j_SrFQf9yhtEJUcuBbAryZbMMkrrpRouUVhPYwAV6QYtQGvTkqlUf2_uUfQD1psBJaFxbg0IA-PtmFR2K1_LMS) *(vertexaisearch.cloud.google.com)*
  > نسخه بتای کروم ۱۵۴ | Blog | Chrome for Developers رد شدن و رفتن به محتوای اصلی / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภา...
- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHM8x0aL7maRly7cSTJXrLMfJN4ggqeD9VMR3H-Nc7hat0Re2SNnJ6e9yQS5bqdLFvtTqUsHQmfuUAxT49XmNsyM65rtB4uBEGYVlnY2he28AnGl7MXMep9jTDyLtHCj-_H1MyfMPNb3_XsohoetHLmqRxqjDJc_AlZCq3nMfSnqnwF6Cb1) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge 154 web platform release notes (Sep. 2026) - Microsoft Edge Developer documentation | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advanta...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF0tKnzYf4X0-hllTYo-KinIpYlzBh-l-zIPNeNPatUUFkQRcaDDOoS8KsuJ-5pX2jNs506KMbnmIwctwYdiwinPzV5K28w1rXhkJA23neDaFED_5UC_6bnNFVMwn_48wPmIZk2CWHZJWNd58I=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG7KpB-kTJKyuhRrLKllPn5wyuNA64eUACfnCqSXuM4SLc6WaMKxzeKTlZE11wS-ywJuMzLdnvpm2MTDvql3L9CbH_lz2gXlwV2sVAeGUZDxIfj144en7gaaPUA5g==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEWj1cUuDNKBbTUcXYphT_sWIYG7bg-THqhg6wMSWmf_PgrP5pV9o3P9NFaO-AfpWsh8MblA0YI7XKMBwRMLdDH0fHwThGlY7t3EZ8l9qU2-bms3nmWqsY3rHzUNa7Ry51n2FriImv1) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-G2IlmLDUkMxeGJeiXFBc0-PPPevBs4OqOoC6ASaqW1WlI_tLY67EgdTVxYfkZFc-yZSWWTa8GkmNV1BnVv7CWJR3k1YdZ167FhBexulcP6PGMsTSPfPdpo_kp_aVfuxr1fRWiPqinm8TT2TwD93dcNogHEljimanuOTICPx2mZZIVG4YVg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [pengzhanbo.cn](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEc0LYcwVNEXwScwVZcjpMxvDnvc6zSQ9dnU2kNhXKls9-b23NcZpfxVDlAmyD-XjYf2SZJecLfdm_nKurfvHWnrNsx5LkXme5zGsmlrRs928hj0_k=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGgrccMVXGTfMHdwblCrnnRlQRYj1I0GFTL-YFyEjsngAKJbLITqY5EQ_mqcVaV5y94Oz52kpDyWk96I-pFt7zuxqqtlMlscG1LUhEpYYT6zq7EtfnUNKw3oBM8BCcWjRRGEi7KVqNMJ45p16Kps85QttjcsvpCklbhvhZszAwXSObMb4kVhcgi) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEIkvOwpTMG9DEMUD5gKCtc35R0hjR35Yx6EsYF1NdVaOAKaa9w01J2q5JeQJv1FKyX7lOSBjUlUrKRu3HqJ14WfBKbMof--PTxR2hlSib5lfFR9NDnVKyBmPR9rPfa8FdlKyYWCEm9AKTMYokn4iuhc-y_Vcx35v5X3_HEI82ddn24H08qHi_3uaVEVmwnbnzrY_iUCKkGSvqB9-jIfSk=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHJ4WofP6t5eR94EJy2tHW8M81WDPNvR4YAX8wbdLnwFAyrRy2ziR-Js9kXzMITWFgv3nKp3fbg4d0sI-AazeWs8fzEfBdbSp5Z4S0w1x3PgM5H38RnI0I1p_SiQVbBRemywpIGl7YkQr-XVRdnRy3awSEPCsk5e1W2Jg_3SMhSmAMlNV8OSg==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGaY9ON7skHEqhlZlQfHV2exUPECq961gi6bPhW0Y8Ffmy8Ykq0nFiv31kxAVPc6rf5YAu26IdYtkC3bnh1dzjuLf6pa5NFGRf176fvaVc16t5hMAiP1EJ3T1aulvrQ) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [brainstormprojects.studio](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHPfWMbotZWKBj1s3hE2YRTo7kADBpoxKIjj1_75BhXxY7m26Pds2HaIAQ_jsgJ1H9cQOI6XutwYwJ-xkoahLHCd63cxwmy9YQK4Pu1asDJABB7vIyKnpeQUNQoApxmKlxdvIC9FGOz6-lsE9mxeIXdhIG9U_BEZBVFxKJS45Y=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG3GyxhVxIzKCVdcjExplDw65eNvQN101ywwwIpFyHYyTmeyxcs7Zs-YLcOBms4NRTTJ0hqg6DVkclf7kI4t7IdWquWBhQlgp7C-2PzaQObGpfD98gBG-ynKp6iHsTWyWS5UgYXkANKJ6E_3gJYq5uw7w==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFTnZkmtef0Pvx28tIOvcXI8vEf3guvFcAWFWbgbnZ1g2RBSdxYHwLRtgzzIlGW9m9yC8TRc1NMZhu2z55-zXiBebNSz8zfiBf2k2BNFYvwIOwSUL6Jfbox5WXJembanLBKZ_Q2KcLPp_MNX3D5lirpyw==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLx18a3riC4BaTHAW5YhNqmU889aCfRUE1md2yViJkgmoVHos5Z3qTHHmDeF590nKqmxJbxgeW8QB2fEJyzbDGyqYuU_qJVqV4N7CuutSR3l9H8EmQSlDV1-9edOWwXNGA2d8pabZl7P44TkieKLcIAQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH1KGpWGYzDmGqT2gPxNFbT81jlipZU4G0octhZOT75ZOGmBBUmzEUhBvPJLA8sFBTIFlfPgBmPKvMTp9kjgaubtz6WccVxyhJNEEVYxAeq8K9reRLXeOzZWcpjGv7bffC2BCKRpu9UofmYwxybVUCj) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFUeoPXk8yuK-p9NKXZHmqJ7nmbADnPHrXeuY8N239ZUQv7UTkNYChN5pA67vjm1YRaZLvGuDTcjcDjl_pESCDDWQx9-AEwpgAEuRs07DVfaiLYEfjz2mdDPaiZVheaWp58Drbv61M=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: Responsively-Sized `<iframe>`  The **Responsively-sized `<iframe>`** specification (part of the **CSS Box Sizing Module Level 4**) introduces a native, standardized mechanism for embedded `<iframe>` elements to automatically resi
- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author · Sign in to reply to author ...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)*
  > &gt; Contact emails chri...@chromium.org &gt; &gt; Explainer &gt; https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md &gt; &gt; &gt; Specification None &gt; &gt; Summary &gt; &gt; <strong>Allow sites to opt into...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)*
  > Explainer https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md Specification None Summary <strong>Allow sites to opt into iframes having responsive sizing</strong> (sizing the &lt;iframe&gt; element in the parent...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; <strong>Allow sites to opt i...
- [Responsively-sized &lt;iframe&gt;](https://chromestatus.com/feature/5108373464547328) *(chromestatus.com · 2025-05-18T00:00:00)*
  > We cannot provide a description for this page right now
- [How To Create Responsive Iframes](https://www.w3schools.com/HOWTO/howto_css_responsive_iframes.asp) *(w3schools.com)*
  > .container { position: relative; ... div with full height and width */ .<strong>responsive-iframe { position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; }</strong> Try it Yourself » ... If you want to use ...
- [Responsive iframe - An easy bug fix](https://project27skills.com/blog/logbook/dev/2023/01/07/iframe.html) *(project27skills.com)*
  > .responsive-iframe { <strong>position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; }</strong> That’s it really. Simple and quick solution, which I found on the W3C tutorial site.
- [How to Implement a Responsive iFrame – ASP Knowledge Base](https://support.asp.events/hc/en-us/articles/32428091778973-How-to-Implement-a-Responsive-iFrame) *(support.asp.events · 2025-12-09T00:00:00)*
  > <strong>Use a wrapper div around your iFrame to make it responsive</strong>. Example: &lt;div class=&quot;iframe-wrapper&quot;&gt; &lt;iframe src=&quot;https://example.com&quot; title=&quot;Example iframe&quot; allowfullscreen&gt; &lt;/iframe&gt; &lt...
- [How to make iFrames responsive — Primitus Consultancy](https://www.primitusconsultancy.co.uk/blog/how-to-make-iframes-responsive) *(primitusconsultancy.co.uk · 2025-05-13T18:04:46)*
  > This tutorial will show you how to make your iframe responsive on Squarespace 7.0 and 7.1.
- [Responsive iframes: Native CSS aspect-ratio Guide \| Ben Marshall](https://benmarshall.me/responsive-iframes) *(benmarshall.me · 2023-06-21T02:02:21)*
  > Master cross-browser compliant, responsive iframes using the aspect-ratio property in CSS. Learn this with one code line.
- [How to make an iframe responsive using HTML + CSS - Michael Sherry](https://www.michaelsherry.com.au/tutorials/how-to-make-an-iframe-responsive-using-html-css) *(michaelsherry.com.au · 2017-09-29T11:56:31)*
  > Now we just have to style the &lt;iframe&gt; itself. .responsive-video iframe { width: 100%; /*make sure video takes up 100% of the width*/ height: 100%;/*make sure video takes up 100% of the height*/ position: absolute; /*required because container ...
- [iFrame &gt; how do make the content responsive - Customize with code - Squarespace Forum](https://forum.squarespace.com/topic/328148-iframe-how-do-make-the-content-responsive) *(forum.squarespace.com · 2025-01-29T17:18:47)*
  > An iframe loads content from another source, but isn&#x27;t aware of the content itself, so if you set the height to 100% it becomes Expand topic overview
- [How to Optimize Iframes for Responsive Web Design](https://www.mindcatchingdesign.com/responsive-web-design-iframe) *(mindcatchingdesign.com · 2024-09-24T10:10:53)*
  > Now that you understand how to optimize iframes for responsive web design, it’s time to implement them on your website. Here’s a step-by-step guide: <strong>Define the aspect ratio of your iframe to ensure proper scaling on different screen sizes</st...
- [CSS Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp) *(w3schools.com)*
  > CSS Reference CSS Selectors CSS ... web pages that look good on all devices! <strong>A responsive web design will automatically adjust for different screen sizes and viewports</strong>....
- [Design as functions, not frames · ResponsiveJS](https://www.responsivejs.com) *(responsivejs.com)*
  > import { useResponsive, useGeometry } from &#x27;@responsivejs/react&#x27;; import { fluid, whenWraps } from &#x27;@responsivejs/runtime&#x27;; function PriceCard() { const card = useRef(null); const tags = useRef(null); useResponsive(card, { padding...
- [how to make a responsive website using html/css and javascript - Stack Overflow](https://stackoverflow.com/questions/33866454/how-to-make-a-responsive-website-using-html-css-and-javascript) *(stackoverflow.com)*
  > The basics of a responsive layout are the <strong>use of percentage insteed of pixels and adding breakpoints with media queries</strong>. In your example, you have 3 divs floating so the css should look like this:
- [HTML Responsive Web Design](https://www.w3schools.com/html/html_responsive.asp) *(w3schools.com)*
  > Here you can create your website from scratch or use a template. Get started for free ❯ · All popular CSS Frameworks offer responsive design. They are free, and easy to use. W3.CSS is a modern CSS framework with support for desktop, tablet, and mobil...
- [Responsive Web Design Basics with CSS and JavaScript](https://www.companionlink.com/blog/2024/07/responsive-web-design-basics-with-css-and-javascript) *(companionlink.com · 2024-07-12T16:26:55)*
  > JavaScript takes things a step further. It <strong>dynamically resizes elements or rearranges them for optimal viewing on different devices</strong>. This guide empowers you with the core concepts of responsive web design using CSS and JavaScript.
- [javascript - How to resize the element so it is responsive? html/css - Stack Overflow](https://stackoverflow.com/questions/66298779/how-to-resize-the-element-so-it-is-responsive-html-css) *(stackoverflow.com)*
  > Remove the width and height from the .svg-file div in HTML.. and in CSS add this: ... Also add a max-width and max-height for .z-logo::before to the maximum allowed width in order to avoid extra large issue · Copy.z-logo::before { width: 60vw; max-wi...
- [Expert guide to making your JavaScript responsive \| Creative Bloq](https://www.creativebloq.com/javascript/expert-guide-making-your-javascript-responsive-71412226) *(creativebloq.com · 2014-08-08T00:00:00)*
  > Jonathan Fielding shows that handling JavaScript across responsive states doesn&#x27;t need to be a minefield. When you purchase through links on our site, we may earn an affiliate commission. Here’s how it works. ... When we think of responsive web ...
- [Building Responsive Websites with HTML, CSS and JavaScript, \| by Shirhabeel Awan \| Medium](https://medium.com/@shirhabeel_awan/building-responsive-websites-with-html-css-and-javascript-9810b1de233e) *(medium.com · 2024-10-29T07:06:31)*
  > Responsive design simply refers to the process whereby the design of your website auto-adjusts with varied screen sizes so that it’s ready to provide an optimum experience to users through any kind of platform. So, this article will basically look at...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Adoption of Responsive Design: <strong>The integration of responsive design principles has enabled developers to create applications that adapt to varying screen sizes and orientations</strong>. This flexibility is essential for delivering a consiste...
- [Showcase Your PWA In Your Website](https://daviddalbusco.com/blog/showcase-your-pwa-in-your-website) *(daviddalbusco.com · 2020-05-07T00:00:00)*
  > That’s why, you can either <strong>encapsulate it in a container and make it responsive or assign it a size using styling</strong>.
- [css - Making an iframe responsive - Stack Overflow](https://stackoverflow.com/questions/17838607/making-an-iframe-responsive) *(stackoverflow.com)*
  > It&#x27;s the same,and it works the same but without confusing bits. jsfiddle.net/6NSX3/263 2015-08-06T14:39:55.43Z+00:00 ... IOS does not calculate height correctly, it takes navigation bar into account. Also Iframe on IOS is not scrollable. 2016-03...
- [Responsive and Relative Vertical and Horizontal CSS for Iframes in HTML — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-for-iframe-responsive-relative-vertically-and-horizontally-html) *(tutorialpedia.org)*
  > <strong>This blog post aims to explore the fundamental concepts, usage methods, common practices, and best practices of using CSS to achieve responsive and relative iframe sizing in HTML</strong>.
- [Our blog](https://blog.theodo.com/2018/01/responsive-iframes-css-trick) *(blog.theodo.com · 2018-01-15T00:00:00)*
  > Discover how AI makes it possible to break free from legacy systems and unlock IT innovation · Discover how market leaders innovate, accelerate, and reinvent themselves alongside Theodo
- [How to Make an Iframe Responsive Without Assuming Aspect Ratio: Fit Content Perfectly with JavaScript](https://www.javascriptroom.com/blog/how-to-make-an-iframe-responsive-without-aspect-ratio-assumption) *(javascriptroom.com)*
  > Place scripts at the end of &lt;body&gt; ... the parent page’s layout may shift unexpectedly. To mitigate this: <strong>Use min-height: 400px as a fallback in CSS</strong>....
- [Mobile Responsive iFrames \| DC Help - NC Digital Commons](https://digitalcommons.nc.gov/guide/help-topics/mobile-responsive-iframes) *(digitalcommons.nc.gov)*
  > Digital Commons has two CSS classes ... stacks the contents on small screens, such as Tableau data. <strong>The 4x3 option sets the iFrame to a 4:3 ratio for tablets and desktops, but changes to a 3:4 ratio on mobile devices</strong>....
- [Responsive Design with HTML Iframes: Best Practices \| Education](https://vocal.media/education/responsive-design-with-html-iframes-best-practices) *(vocal.media)*
  > This ensures that the embedded content doesn&#x27;t appear distorted or out of proportion when viewed on different screen sizes. You can achieve this by <strong>using CSS techniques, such as the padding-bottom hack, to set the height relative to the ...
- [Responsive iframe without a parent container - DEV Community](https://dev.to/bitdweller/responsive-iframe-without-a-parent-container-367k) *(dev.to · 2020-07-14T14:57:42)*
  > Maybe it was a YouTube video, maybe it was a Google Maps embed. Whatever it was, you probably did it the most popular way: <strong>wrap the iframe in a div and use padding to maintain the aspect ratio</strong>.
- [67940 – Add a depth limit for iframes](https://bugs.webkit.org/show_bug.cgi?id=67940) *(bugs.webkit.org)*
  > WebKit Bugzilla · Browse · Search+ · Log In · Top of Page · Format For Printing · Clone This Bug · Reports
- [9221 – resize property doesn't work on iframes](https://bugs.webkit.org/show_bug.cgi?id=9221) *(bugs.webkit.org)*
  > WebKit Bugzilla · Bug 9221: resize property doesn&#x27;t work on iframes · New · Browse · Search · Reports · Requests · Help · New Account · Log In
- [45950 – Implement HTML5's seamless attribute for iframes](https://bugs.webkit.org/show_bug.cgi?id=45950) *(bugs.webkit.org)*
  > WebKit Bugzilla · Browse · Search+ · Log In · Top of Page · Format For Printing · Clone This Bug · Reports
- [r/webdev on Reddit: Responsive iframes?](https://www.reddit.com/r/webdev/comments/1j5e8w9/responsive_iframes) *(reddit.com · 2025-03-07T03:31:09)*
  > I thought aspect-ratio would work. My content has a definite aspect ratio... if the iframe had width=100% and the aspect-ratio was set to match the content... nope, not included in the allowlist.
- [r/webdev on Reddit: Responsive Facebook iFrame?](https://www.reddit.com/r/webdev/comments/ehkj55/responsive_facebook_iframe) *(reddit.com · 2019-12-30T10:36:11)*
  > If you&#x27;re using direct IFrames, though, then it should definitely be possible, it just requires CSS work on your end.
- [Reframe.js – Responsive iFrames \| Hacker News](https://news.ycombinator.com/item?id=12500235) *(news.ycombinator.com · 2016-09-18T17:17:14)*
  > In addition, I think you may be overloading the word &quot;responsive.&quot; This is not a post-message base iFrame resizer, it makes iFrames scale like images. This maintains an aspect ratio which is very desirable in many cases. Think a YouTube emb...
- [r/webdev on Reddit: Auto sizing Ifames](https://www.reddit.com/r/webdev/comments/159t9cb/auto_sizing_ifames) *(reddit.com · 2023-07-26T02:42:38)*
  > Here is what I have: &lt;iframe height=&quot;100%&quot; name=&quot;myIFrame&quot; scrolling=&quot;no&quot; src=&quot;https://jurkutaphotos.smugmug.com/&quot; style=&quot;border: solid #000000;&quot; width=&quot;100%&quot;&gt;&lt;/iframe&gt; Does any ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong>?gate=5167068974153728 · This intent message was generated by Chrome Platform Status. unread, May 20, 2025, 3:05:41 AMMay 20 ·  ·  ·  · Reply to author · Sign in to reply ...
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > https://<strong>chromestatus.com/feature/5108373464547328</strong> · Reactions are currently unavailable · No one assigned ·
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > &gt; Contact emails chri...@chromium.org &gt; &gt; Explainer &gt; https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md &gt; &gt; &gt; Specification None &gt; &gt; Summary &gt; &gt; <strong>Allow sites t...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Explainer https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md Specification None Summary <strong>Allow sites to opt into iframes having responsive sizing</strong> (sizing the &lt;iframe&gt; element in ...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > &gt;&gt; &gt;&gt; &gt;&gt;&gt; On Tuesday, 20 May 2025 ...-4/responsive-iframes-explainer.md &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Specification None &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Summary &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; <strong>Allow site...

## 📚 Platform Documentation & Specifications

- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*
- [\[css-sizing\] How should auto-sizing of iframes work? · Issue #12229 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/12229) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 13 planned queries — **39 verified relevant**
  - `"chromestatus.com/feature/5108373464547328" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-sizing-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Responsively-sized <iframe>" API` — *Core feature API query* (2 returned)
  - `"Responsively-sized <iframe>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"responsively-sized" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Responsively-sized <iframe>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Responsively-sized <iframe>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"responsively-sized iframe" OR "responsive iframes" "css-sizing-4" (explainer OR guide OR blog)` — *Finds early technical explainers, blog coverage, and guide overviews on the CSS Sizing 4 responsive iframe feature.* (8 returned)
  - `"responsive iframes" "css-sizing-4" ("layout overflow" OR "intrinsic size") (CSS OR HTML) syntax` — *Retrieves concrete code examples, CSS rules, and markup patterns proposed in the specification for auto-sizing child documents.* (0 returned)
  - `site:chromestatus.com OR site:bugs.webkit.org OR site:bugzilla.mozilla.org "responsive iframes" OR "responsively-sized iframe"` — *Tracks cross-engine implementation status, browser vendor intent-to-prototype signals, and bug tracker discussions.* (8 returned)
  - `site:github.com/w3c/csswg-drafts/issues "responsive iframes" OR "responsively-sized"` — *Discovers active spec design debates, security/privacy considerations, and unresolved layout overflow edge cases in the CSSWG repository.* (1 returned)
  - `("responsively-sized iframe" OR "responsive iframes") (site:news.ycombinator.com OR site:reddit.com/r/webdev OR "caniuse")` — *Surfaces developer sentiment, reactions, and discussions about eliminating legacy hacks like iframe resizing scripts and scrollbars.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 22 result(s) found — **22 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 785 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 5 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5108373464547328)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5108373464547328)
- [Specification](https://drafts.csswg.org/css-sizing-4/#responsive-iframes)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/418397278)
