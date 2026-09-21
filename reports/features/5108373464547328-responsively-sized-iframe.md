# Responsively-sized &lt;iframe&gt;

> **Report Week:** 2026-W39 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Allow sites to opt into iframes having responsive sizing (sizing the &lt;iframe&gt; element in the parent document to the iframe document's layout overflow sizing, so that scrolling in the child document is avoided).

### Motivation

This is a natural feature to have for iframes, when the site wants to
render the iframe content so that it looks seamless with the parent frame and avoids scrollbars.

## Ecosystem Status

- **Momentum:** High (165 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Responsively-sized &lt;iframe&gt; is currently Enabled by default in Chrome 154. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @emilio: "For context, a lot of the discussions here:   \* https://github.com/w3c/csswg-drafts/issues/1771  \* https://github.com/w3c/csswg-drafts/issues/13584  \*..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for sending this to the TAG! We had a few points of feedback.  One is that the opt-in from the iframe isn't scoped in any way. The explainer \[p..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Bruce Lawson on Twitter: "&lt;iframe seamless&gt; removed from HTML. How to solve problem of setting the height of iframes? Proposal: https://t.co/7h7sk5eHmB"" (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Responsively-sized iframes](https://github.com/WebKit/standards-positions/issues/653) [open]
- **Mozilla:** [Responsively-sized iframes](https://github.com/mozilla/standards-positions/issues/1394) [open]
- **W3C TAG:** [Other Spec Review: Responsively-sized iframes](https://github.com/w3ctag/design-reviews/issues/1223) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Bruce Lawson on Twitter: "&lt;iframe seamless&gt; removed from HTML. How to solve problem of setting the height of iframes? Proposal: https://t.co/7h7sk5eHmB"](https://twitter.com/brucel/status/696322600012677121) — *by @brucel, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive iframes 543 views Skip to firs...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" nature of this means it misses...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails [email&#160;protected] Explainer https://github....
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec issue < https://github.com/w3...
- [Responsive Web Design Basics with CSS and JavaScript](https://www.companionlink.com/blog/2024/07/responsive-web-design-basics-with-css-and-javascript) *(companionlink.com · 2024-07-12T16:26:55)*
  > JavaScript takes things a step further. It <strong>dynamically resizes elements or rearranges them for optimal viewing on different devices</strong>. This guide empowers you with the core concepts of responsive web design using CSS and JavaScript.
- [Building Responsive Websites with HTML, CSS and JavaScript, \| by Shirhabeel Awan \| Medium](https://medium.com/@shirhabeel_awan/building-responsive-websites-with-html-css-and-javascript-9810b1de233e) *(medium.com · 2024-10-29T07:06:31)*
  > Responsive design simply refers to the process whereby the design of your website auto-adjusts with varied screen sizes so that it’s ready to provide an optimum experience to users through any kind of platform. So, this article will basically look at...
- [javascript - How to resize the element so it is responsive? html/css - Stack Overflow](https://stackoverflow.com/questions/66298779/how-to-resize-the-element-so-it-is-responsive-html-css) *(stackoverflow.com)*
  > Remove the width and height from the .svg-file div in HTML.. and in CSS add this: ... Also add a max-width and max-height for .z-logo::before to the maximum allowed width in order to avoid extra large issue · Copy.z-logo::before { width: 60vw; max-wi...
- [html - Responsive web design by using css or javascript? - Stack Overflow](https://stackoverflow.com/questions/18394632/responsive-web-design-by-using-css-or-javascript) *(stackoverflow.com)*
  > <strong>id&#x27; personally use CSS and set min-width and max-width</strong>. Most responsive designs now days use CSS. This way if there is a new device on the market it will just adjust according to it&#x27;s screen size.
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > Adoption of Responsive Design: <strong>The integration of responsive design principles has enabled developers to create applications that adapt to varying screen sizes and orientations</strong>. This flexibility is essential for delivering a consiste...
- [Showcase Your PWA In Your Website](https://daviddalbusco.com/blog/showcase-your-pwa-in-your-website) *(daviddalbusco.com · 2020-05-07T00:00:00)*
  > That’s why, you can either <strong>encapsulate it in a container and make it responsive or assign it a size using styling</strong>.
- [Progressively Handling Iframes in PWAs / PWA Fire Codelabs](https://pwafire.org/developer/codelabs/how-to-handle-iframes-in-pwa) *(pwafire.org · 2019-08-04T00:00:00)*
  > &lt;section class=&quot;load-iframe&quot;&gt; &lt;!-- iframe --&gt; &lt;iframe&gt; &lt;/iframe&gt; &lt;/section&gt; &lt;!-- offline text paragraph --&gt; &lt;div class=&quot;offline-alert&quot;&gt; &lt;/div&gt;

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Prototype: Responsive iframes](https://groups.google.com/a/chromium.org/g/blink-dev/c/QirdSBIvM1k/m/rZdHOE59AQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Intent to Prototype: Responsive iframes Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Responsive iframes 543 views Sk...
- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com · 2026-05-14T09:39:56)* *(Cites: `https://chromestatus.com/feature/5108373464547328`)*
  > Responsively-sized <iframe> · Issue #4036 · web-platform-dx/web-features · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [\[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13733.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Re: Intent to Prototype: Responsive iframes Jake Archibald Tue, 20 May 2025 00:05:50 -0700 I think the "one shot" nature of this means...
- [\[blink-dev\] Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13731.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > [blink-dev] Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Responsive iframes Chromestatus Mon, 19 May 2025 15:43:14 -0700 Contact emails [email&#160;protected] Explainer https...
- [Re: \[blink-dev\] Re: Intent to Prototype: Responsive iframes](https://www.mail-archive.com/blink-dev@chromium.org/msg13784.html) *(mail-archive.com)* *(Cites: `https://github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md`)*
  > Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Prototype: Responsive iframes Chris Harrelson Fri, 23 May 2025 09:37:23 -0700 I filed a spec issue < https://git...

## 📚 Platform Documentation & Specifications

- [Responsively-sized &lt;iframe&gt; · Issue #4036 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4036) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 8 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5108373464547328" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/w3c/csswg-drafts/blob/main/css-sizing-4/responsive-iframes-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"drafts.csswg.org/css-sizing-4" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Responsively-sized <iframe>" API` — *Core feature API query* (1 returned)
  - `"Responsively-sized <iframe>" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"responsively-sized" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Responsively-sized <iframe>" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Responsively-sized <iframe>" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 788 item(s) inspected

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
