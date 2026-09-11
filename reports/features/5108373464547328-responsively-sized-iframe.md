# Responsively-sized &lt;iframe&gt;

> **Report Week:** 2026-W37 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Allow sites to opt into iframes having responsive sizing (sizing the <iframe> element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

### Motivation

This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Responsively-sized <iframe> is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   * https://github.com/w3c/csswg-drafts/issues/1771  * https://github.com/w3c/csswg-drafts/issues/13584  *..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer [p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Bruce Lawson on Twitter: "<iframe seamless> removed from HTML. How to solve problem of setting the height of iframes? Proposal: https://t.co/7h7sk5eHmB"" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open]
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open]
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Bruce Lawson on Twitter: "&lt;iframe seamless&gt; removed from HTML. How to solve problem of setting the height of iframes? Proposal: https://t.co/7h7sk5eHmB"](https://twitter.com/brucel/status/696322600012677121) — *by @brucel, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [iframe-resizer](https://www.npmjs.com/package/iframe-resizer) `v5.5.9` — Keep iframes sized to their content.
- [@iframe-resizer/core](https://www.npmjs.com/package/@iframe-resizer/core) `v5.5.9` — Keep iframes sized to their content.
- [@iframe-resizer/child](https://www.npmjs.com/package/@iframe-resizer/child) `v5.5.9` — Keep iframes sized to their content.
- [@iframe-resizer/parent](https://www.npmjs.com/package/@iframe-resizer/parent) `v5.5.9` — Keep iframes sized to their content.

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive iframes 534 views Skip to firs...
- [[blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" nature of this means it misses...
- [Re: [blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec issue < https://github.com/w3...
- [[blink-dev] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails [email&#160;protected] Explainer https://github....
- [Responsively-sized <iframe>](https://chromestatus.com/feature/5108373464547328) *(chromestatus.com · 2025-05-18T00:00:00)*
  > Chrome Platform Status
- [How To Create Responsive Iframes](https://www.w3schools.com/HOWTO/howto_css_responsive_iframes.asp) *(w3schools.com)*
  > .container { position: relative; ... div with full height and width */ .<strong>responsive-iframe { position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; }</strong> Try it Yourself » ... If you want to use ...
- [How to Implement a Responsive iFrame – ASP Knowledge Base](https://support.asp.events/hc/en-us/articles/32428091778973-How-to-Implement-a-Responsive-iFrame) *(support.asp.events · 2025-12-09T00:00:00)*
  > <strong>Use a wrapper div around your iFrame to make it responsive</strong>. Example: &lt;div class=&quot;iframe-wrapper&quot;&gt; &lt;iframe src=&quot;https://example.com&quot; title=&quot;Example iframe&quot; allowfullscreen&gt; &lt;/iframe&gt; &lt...
- [How to make iFrames responsive — Primitus Consultancy](https://www.primitusconsultancy.co.uk/blog/how-to-make-iframes-responsive) *(primitusconsultancy.co.uk · 2025-05-13T18:04:46)*
  > This tutorial will show you how to make your iframe responsive on Squarespace 7.0 and 7.1.
- [Responsive iframe - An easy bug fix](https://project27skills.com/blog/logbook/dev/2023/01/07/iframe.html) *(project27skills.com)*
  > .responsive-iframe { <strong>position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; }</strong> That’s it really. Simple and quick solution, which I found on the W3C tutorial site.
- [Responsive iframes: Native CSS aspect-ratio Guide | Ben Marshall](https://benmarshall.me/responsive-iframes) *(benmarshall.me · 2023-06-21T02:02:21)*
  > Master cross-browser compliant, responsive iframes using the aspect-ratio property in CSS. Learn this with one code line.
- [How to make an iframe responsive using HTML + CSS - Michael Sherry](https://www.michaelsherry.com.au/tutorials/how-to-make-an-iframe-responsive-using-html-css) *(michaelsherry.com.au · 2017-09-29T11:56:31)*
  > Now we just have to style the &lt;iframe&gt; itself. .responsive-video iframe { width: 100%; /*make sure video takes up 100% of the width*/ height: 100%;/*make sure video takes up 100% of the height*/ position: absolute; /*required because container ...
- [iFrame > how do make the content responsive - Customize with code - Squarespace Forum](https://forum.squarespace.com/topic/328148-iframe-how-do-make-the-content-responsive) *(forum.squarespace.com · 2025-01-29T17:18:47)*
  > An iframe loads content from another source, but isn&#x27;t aware of the content itself, so if you set the height to 100% it becomes Expand topic overview
- [How to Optimize Iframes for Responsive Web Design](https://www.mindcatchingdesign.com/responsive-web-design-iframe) *(mindcatchingdesign.com · 2024-09-24T10:10:53)*
  > Now that you understand how to optimize iframes for responsive web design, it’s time to implement them on your website. Here’s a step-by-step guide: <strong>Define the aspect ratio of your iframe to ensure proper scaling on different screen sizes</st...
- [CSS Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp) *(w3schools.com)*
  > CSS Reference CSS Selectors CSS ... web pages that look good on all devices! <strong>A responsive web design will automatically adjust for different screen sizes and viewports</strong>....
- [r$ Responsive Web Design made simple](https://www.responsivejs.com) *(responsivejs.com)*
  > Responsive.js is <strong>a tiny javascript library that extends the classic techniques of responsive web design using the concept of &quot;dynamic media query/css styles client rendering&quot;.</strong>
- [Expert guide to making your JavaScript responsive | Creative Bloq](https://www.creativebloq.com/javascript/expert-guide-making-your-javascript-responsive-71412226) *(creativebloq.com · 2014-08-08T00:00:00)*
  > Jonathan Fielding shows that handling JavaScript across responsive states doesn&#x27;t need to be a minefield. When you purchase through links on our site, we may earn an affiliate commission. Here’s how it works. When we think of responsive web desi...
- [HTML Responsive Web Design](https://www.w3schools.com/html/html_responsive.asp) *(w3schools.com)*
  > Here you can create your website from scratch or use a template. Get started for free ❯ · All popular CSS Frameworks offer responsive design. They are free, and easy to use. W3.CSS is a modern CSS framework with support for desktop, tablet, and mobil...
- [how to make a responsive website using html/css and javascript - Stack Overflow](https://stackoverflow.com/questions/33866454/how-to-make-a-responsive-website-using-html-css-and-javascript) *(stackoverflow.com)*
  > The basics of a responsive layout are the <strong>use of percentage insteed of pixels and adding breakpoints with media queries</strong>. In your example, you have 3 divs floating so the css should look like this:
- [javascript - How to resize the element so it is responsive? html/css - Stack Overflow](https://stackoverflow.com/questions/66298779/how-to-resize-the-element-so-it-is-responsive-html-css) *(stackoverflow.com)*
  > Remove the width and height from the .svg-file div in HTML.. and in CSS add this: ... Also add a max-width and max-height for .z-logo::before to the maximum allowed width in order to avoid extra large issue · Copy.z-logo::before { width: 60vw; max-wi...
- [Building Responsive Websites with HTML, CSS and JavaScript, | by Shirhabeel Awan | Medium](https://medium.com/@shirhabeel_awan/building-responsive-websites-with-html-css-and-javascript-9810b1de233e) *(medium.com · 2024-10-29T07:06:31)*
  > Responsive design simply refers to the process whereby the design of your website auto-adjusts with varied screen sizes so that it’s ready to provide an optimum experience to users through any kind of platform. So, this article will basically look at...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Adoption of Responsive Design: <strong>The integration of responsive design principles has enabled developers to create applications that adapt to varying screen sizes and orientations</strong>. This flexibility is essential for delivering a consiste...
- [Showcase Your PWA In Your Website](https://daviddalbusco.com/blog/showcase-your-pwa-in-your-website) *(daviddalbusco.com · 2020-05-07T00:00:00)*
  > That’s why, you can either <strong>encapsulate it in a container and make it responsive or assign it a size using styling</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive iframes 534 views Sk...
- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [[blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" nature of this means...
- [Re: [blink-dev] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec issue < https://git...
- [[blink-dev] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > [blink-dev] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails [email&#160;protected] Explainer https...

## 📚 Platform Documentation & Specifications

- [Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*
- [Responsive web design - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 8 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5108373464547328" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-sizing-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Responsively-sized <iframe>" API` — *Core feature API query* (2 returned)
  - `"Responsively-sized <iframe>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"responsively-sized" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Responsively-sized <iframe>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Responsively-sized <iframe>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **4 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

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
