# CSS pseudo-class for navigation source element

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Selects the element that initiated the navigation, whether it's a link/button/form. The element stays selected throughout the navigation.

### Motivation

The main motivation for this comes from view transitions. This gives author a way to visually indicate a relationship between the navigation source (form/button) and the process of the navigation, e.g. expanding a thumbnail using an animation.

## Ecosystem Status

- **Momentum:** High (510 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The CSS \`:navigation-source\` pseudo-class (formerly drafted as \`:nav-source\` in \`css-navigation-1\`) enables declarative targeting of the element that initiated an outgoing navigation. Shipping enabled by default in Chrome 156, it bridges a critical ergonomics gap for cross-document View Transitions by allowing elements like clicked thumbnails or buttons to be styled or assigned transition names without custom JavaScript click handlers. However, formal cross-engine adoption is still pending as Mozilla and WebKit positions remain open.

### Recommendations
- Actionable Advice: Treat \`:navigation-source\` as a progressive enhancement for view transitions, which inherently degrade gracefully in non-supporting browsers. When applying non-transition UI styling (such as loading indicators or outlines), wrap rules in \`@supports selector(:navigation-source)\` and maintain fallback state handling for Firefox and Safari.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @noamr: "&gt; \[@noamr\](https://github.com/noamr) I guess the main use case is view-transitions, right? Doesn't seem particularly complicated I suppose  Right, but..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "CSS-Tricks - A design exploration of a sidebar navigation." (0 points, 0 comments).

## Standards Positions

- **WebKit:** [CSS :navigation-source pseudo-class](https://github.com/WebKit/standards-positions/issues/715) [open]
- **Mozilla:** [CSS \`:navigation-source\` pseudo-class](https://github.com/mozilla/standards-positions/issues/1447) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [CSS-Tricks - A design exploration of a sidebar navigation.](https://twitter.com/css/status/976518815541616641) — *by @css, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Damien Beard on Twitter: "I like CSS pseudo classes, but they do get messy. Article: Pseudo and pseudon't - https://t.co/7ah4A53gCI #CSS #pseudo #webdesign"](https://twitter.com/damienbaus/status/678986262766727168) — *by @damienbaus, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Tailwind CSS on X: "@bigskillet Can you give me an example of what you mean? If you mean you want to write custom CSS that targets that class, you'll need to escape the slash:" / X](https://twitter.com/tailwindcss/status/1177287072555642880) — *by @tailwindcss, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [csswg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHWwXQXk-tEzqXkc1JY67jo_sG38VbB8mm5n_DffaDSy-PJfxOyOhYd7TD4r3AAjiULqR9loBHS6TwgVZfxJAAynDGCpSyMMTCYLPG3BmMamIt0hEl4M990bfoJMPrMg==) *(vertexaisearch.cloud.google.com)*
  > CSS Navigation Matching CSS Navigation Matching Editor’s Draft , 3 September 2026 More details about this document This version: https://drafts.csswg.org/css-navigation-1/ Issue Tracking: CSSWG Issues Repository Inline In Spec w3c/csswg-drafts#12594 ...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFKRtfqKJh3fGtueaKHmFZRN-vlbsKd17b5HHQezD0wiwW0Lir___B4lpKZFJK73YgyEZUZkP_njN0Mi-aiVo63FzCf9tZFHG5OTu9YYnKvU73ECkm5r6i3RwK2OvHO5B6k6CtnKg==) *(vertexaisearch.cloud.google.com)*
  > [css-navigation-1] Rename `:nav-source` to `:navigation-source` · Issue #14303 · w3c/csswg-drafts · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or wind...
- [csswg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGVfITCp_iQoLZW8zadH_C7TYc10o09iXQHFiKHMXTlbD8irFNDNIAw3RirEF32Ug6AQOOr_PE7t1anc1BDPpWmt1GwHrpfFHFuaGebTHb7gmSU65RfHdXc0DOosVGpvg==) *(vertexaisearch.cloud.google.com)*
  > CSS Navigation Matching CSS Navigation Matching Editor’s Draft , 3 September 2026 More details about this document This version: https://drafts.csswg.org/css-navigation-1/ Issue Tracking: CSSWG Issues Repository Inline In Spec w3c/csswg-drafts#12594 ...
- [css-tricks.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4Te337jTTfOVMPYeKGcZU3qzok-7nasb2ODiwJeO2W2MS9YeIfkvc9ZLJSTSZRk5PJaWiTdBXFPDTbIj-xMa2HnCFzCI3OqomcXyCOJFAb9cCnT-25jEvSOTDVzpgOE7mjhrB9NADZr0npGS4zT8=) *(vertexaisearch.cloud.google.com)*
  > CSS Navigation Matching, Early Days | CSS-Tricks Skip to main content CSS-Tricks Since 2007 css navigation view transitions CSS Navigation Matching, Early Days Geoff Graham on Aug 19, 2026 Really like the intent here. Apply a style when someone navig...
- [w3.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHZf_XcQGq45SfXZfRHHLqB5c_zDqZzJ3Qcj1EygWY0lyQR1rQ1DC9xbHoRmPxOfKUWehm_9eURXWupuv5CPImaZo46ZJGfF0QvNHWCulVFKDFntErKuCwu2Nw=) *(vertexaisearch.cloud.google.com)*
  > The web platform feature in question is the **`:navigation-source`** pseudo-class (originally drafted provisionally as `:nav-source`), specified under the W3C **CSS Navigation Matching Level 1** (`css-navigation-1`) specification.   ---  ### Summary
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFpkpEP7QAttloCyyPeYlP0EqfXnlyCwGR57u3IT-js8SITLAEB8fqEx0hnbae4uDVSgK5huFcStqWqvTcZ1z6ABeogQiTUr2_ZIPQkjuVwy_980XrH0LK1x6JWjK_eE2q8blcxhEgMBkNnr8sn) *(vertexaisearch.cloud.google.com)*
  > The web platform feature in question is the **`:navigation-source`** pseudo-class (originally drafted provisionally as `:nav-source`), specified under the W3C **CSS Navigation Matching Level 1** (`css-navigation-1`) specification.   ---  ### Summary
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFxsymzmU4v1jVo6J_fJamixa1fTSpw8jkEY8jV-RYW9syNtle4kyBk81UwXtOx9I9trO8m5i2019DpsMiPt5SOB1wjM3HTupW8aSfvrZgHpg3Yu0xz181woD99-GuqaBHHzgB7BrK_6naZwo=) *(vertexaisearch.cloud.google.com)*
  > The web platform feature in question is the **`:navigation-source`** pseudo-class (originally drafted provisionally as `:nav-source`), specified under the W3C **CSS Navigation Matching Level 1** (`css-navigation-1`) specification.   ---  ### Summary
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)*
  > &gt; None &gt; &gt; *Link to entry on the ... by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink-dev&quot; group</stron...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching Specification https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class Summary <strong>Selects the element that initiat...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)*
  > &gt; &gt; On Thu, Sep 3, 2026 at 5:46 AM Chromestatus &lt; &gt; [email protected]&gt; wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; https://<strong>github.com/WICG/...
- [CSS Pseudo-Classes Tutorial](https://rembertdesigns.hashnode.dev/css-pseudo-classes-tutorial) *(rembertdesigns.hashnode.dev · 2022-07-18T23:52:39)*
  > :focus- Selects an element that has gained focus via a pointing device. This could be for links, for example: Or for form inputs or textareas, like: :target- This pseudo-class is used with IDs, it matches when the hashtag in the current URL matches t...
- [Mastering CSS and HTML Pseudo - Classes: A Comprehensive Guide — tutorialpedia.org](https://www.tutorialpedia.org/blog/css-html-pseudo-class) *(tutorialpedia.org)*
  > Pseudo - classes <strong>allow developers to select and style elements based on their state, position in the document, or other conditions that go beyond the basic element types and class names</strong>.
- [CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) *(w3schools.com)*
  > <strong>A CSS pseudo-class is a keyword that can be added to a selector, to define a style for a special state of an element</strong>.
- [CSS Pseudo Classes Explained for Beginners \| Udacity](https://www.udacity.com/blog/css-pseudo-classes-explained-for-beginners) *(udacity.com · 2021-09-09T18:42:58)*
  > Consider if the user is not using their mouse for navigation due to a limitation on hardware or personal disabilities. The hover option may not have any effect on this user. If they are instead using the tab button to move along the page elements, th...
- [A guide to CSS pseudo-elements - LogRocket Blog](https://blog.logrocket.com/css-pseudo-elements-guide) *(blog.logrocket.com · 2024-06-04T21:04:25)*
  > <strong>You can change the element styles for a particular event with pseudo-classes</strong>. In contrast, a CSS pseudo-element behaves like a sub-element itself and adds a different functionality to the selected element, based on its type.
- [Guide to Advanced CSS Selectors - Part Two \| Modern CSS Solutions](https://moderncss.dev/guide-to-advanced-css-selectors-part-two) *(moderncss.dev · 2020-12-30T00:00:00)*
  > Bonus tip: ensure a bit of spacing prior to the top of the element on scroll by using scroll-margin-top: 2em; (or another value of your choosing). This should be considered a progressive enhancement, be sure to review browser support for scroll-margi...
- [Understanding CSS Pseudo-Classes: A Complete Guide \| by Pankaj Patil \| Medium](https://medium.com/@pankajpatil822/understanding-css-pseudo-classes-a-complete-guide-fe420a4e1f06) *(medium.com · 2025-07-04T06:59:58)*
  > In this blog post, we’ll explore ... to use them. A CSS pseudo-class is <strong>a keyword added to a selector that allows you to style an element based on its state or position in the document</strong>....
- [Comprehensive Guide to CSS Pseudo-Classes and Their Usage - Hongkiat](https://www.hongkiat.com/blog/definite-guide-css-pseudoclasses) *(hongkiat.com · 2024-08-15T10:00:48)*
  > <strong>Pseudo-classes and pseudo-elements can be used in CSS selectors but do not exist in the HTML source code</strong>. Instead, they are “inserted” by the user agent under certain conditions for use in style sheets.
- [Setting CSS pseudo-class rules from JavaScript - Stack Overflow](https://stackoverflow.com/questions/311052/setting-css-pseudo-class-rules-from-javascript) *(stackoverflow.com)*
  > By using this with some of my tricks I was able to stop the css keyframe auto run on webpage load. 2022-05-19T13:24:54.37Z+00:00 ... Save this answer. ... Show activity on this post. There is another alternative. Instead of manipulating the pseudo-cl...
- [Pseudo-classes \| web.dev](https://web.dev/learn/css/pseudo-classes) *(web.dev)*
  > You&#x27;re not limited to first and last children and types either. The :nth-child() and :nth-of-type() pseudo-classes allow you to specify an element that is at a certain index. The indexing in CSS selectors starts at 1.
- [Working With Pseudo-classes in JavaScript](https://zzz.buzz/2016/06/16/working-with-pseudo-classes-in-javascript) *(zzz.buzz · 2016-06-16T15:50:31)*
  > <strong>The :visited CSS pseudo-class lets you select only links that have been visited</strong>. This pseudo-class is intended for visually styling visited links, and not much can be done with :visited in JavaScript as to protect user&#x27;s privacy...
- [Checking To See If An Element Has A CSS Pseudo-Class In JavaScript](https://www.bennadel.com/blog/3476-checking-to-see-if-an-element-has-a-css-pseudo-class-in-javascript.htm) *(bennadel.com · 2020-04-22T05:12:30)*
  > As you can see, we were able to successfully detect the applied CSS pseudo-classes in JavaScript. But, it should be noted that the browser will throw a SyntaxError if you try to use a pseudo-class Selector that the browser doesn&#x27;t support. For e...
- [CSS :interest-source and :interest-target Pseudo-Classes](https://www.trevorlasn.com/blog/css-interest-pseudo-classes) *(trevorlasn.com · 2026-02-15T00:00:00)*
  > These pseudo-classes are part of the Open UI Interest Invokers proposal, recently accepted by the CSS Working Group. They <strong>handle scenarios where hovering or focusing one element should affect the styling of another element elsewhere in the DO...
- [It's time for modern CSS to kill the SPA - Jono Alderson](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa) *(jonoalderson.com · 2025-07-24T21:07:49)*
  > I understand that you included the first code snippet to show how easy it is to enable cross-document view transitions and style the pseudo-elements. For an example likely to be copied by people new to the API, you might consider · @view-transition {...
- [A Beginner-Friendly Guide to CSS View Transitions for Smoother Page Navigation](https://www.izendestudioweb.com/articles/2026/04/09/a-beginner-friendly-guide-to-css-view-transitions-for-smoother-page-navigation) *(izendestudioweb.com)*
  > This is where you apply familiar CSS properties like opacity, transform, and transition-duration to create different visual patterns. Here are a few practical approaches you can implement: Cross-fade: The old page fades out while the new page fades i...
- [Smooth transitions with the View Transition API \| View Transitions \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/view-transitions) *(developer.chrome.com · 2024-04-14T00:00:00)*
  > When a user clicks a link, the click triggers the view transition. To opt in, use the following CSS snippet: <strong>@view-transition { navigation: auto; }</strong> The following Stack Navigator example is an MPA that uses cross-document view transit...
- [A Practical Guide to the CSS View Transition API \| Blog Cyd Stumpel](https://cydstumpel.nl/a-practical-guide-to-the-css-view-transition-api) *(cydstumpel.nl · 2025-09-18T20:36:48)*
  > When the view transition is called, ... by default this is just the root element, but, <strong>by using the view-transition-name CSS property, you can create more snapshots</strong>....
- [Guides: View transitions \| Next.js](https://nextjs.org/docs/app/guides/view-transitions) *(nextjs.org · 2026-08-25T00:00:00)*
  > This guide walks through four patterns that cover the most common cases: <strong>morphing shared elements, animating loading states, adding directional navigation, and crossfading content within the same route</strong>.
- [Navigation That Feels Fast: View Transition API for Multi-Page Sites (2026 Practical Guide)](https://www.dfm2html.com/tutorials/navigation-that-feels-fast-view-transition-api-for-multi-page-sites) *(dfm2html.com · 2026-05-12T19:08:00)*
  > That’s it—one line of CSS for smooth page transitions. <strong>The navigation: auto value tells the browser to apply view transitions to all navigations that meet certain criteria: same-origin, not a reload, and both pages opt in</strong>.
- [Intent to Ship: Custom state pseudo class](https://groups.google.com/a/chromium.org/g/blink-dev/c/dJibhmzE73o/m/jzB1zkJeCQAJ) *(groups.google.com)*
  > Summary The feature lets custom elements to expose their states via the <strong>:state() CSS pseudo class</strong>. Link to “Intent to Prototype” blink-dev discussion https://groups.google.com/a/chromium.org/d/msg/blink-dev/CApU9QIu3TM/jCR5dyZFDAAJ R...
- [Intent to Ship: CSS :lang pseudo class level 4](https://groups.google.com/a/chromium.org/g/blink-dev/c/tO598HXuS94) *(groups.google.com)*
  > The <strong>:lang CSS pseudo-class currently matches elements based on level 3 specs logic, which describes a prefix-matching rule to match language values</strong>.
- [Intent to Ship: CSS :dir() pseudo-class selector](https://groups.google.com/a/chromium.org/g/blink-dev/c/kLRBZY8Qdd0) *(groups.google.com · 2023-10-03T00:00:00)*
  > The <strong>:dir()</strong> CSS pseudo-class selector matches elements based on directionality, which is determined based on the HTML dir attribute. :dir(ltr) matches left-to-right text directionality, and :dir(rtl) matches elements with right-to-lef...
- [Intent to Ship : :has() pseudo class](https://groups.google.com/a/chromium.org/g/blink-dev/c/bRsbl3wLuyk) *(groups.google.com)*
  > Need intent-to-ship for this since it is web facing change. There are some differences between Chrome and WebKit. All results are same except these cases. ... There are 4 open issues posted on the csswg draft. Remove scope dependency from relative se...
- [\[blink-dev\] Re: Intent to Ship: CSS :open pseudo-class](https://www.mail-archive.com/blink-dev@chromium.org/msg12204.html) *(mail-archive.com)*
  > For dialog and details &gt; elements, :open is redundant with [open] in CSS. This pseudo-class will be &gt; added to MDN: https://github.com/mdn/content/issues/37153 &gt; &gt; &gt; Security &gt; &gt; None &gt; &gt; &gt; WebView application risks &gt;...
- [Intent to Ship: :user-valid and :user-invalid CSS pseudo-classes](https://groups.google.com/a/chromium.org/g/blink-dev/c/UpB_u-wvNeA) *(groups.google.com)*
  > The :user-invalid and the :user-valid pseudo-classes represent an element with incorrect or correct input, respectively, but only after the user has significantly interacted with it. This is similar to :valid and :invalid, but with the added constrai...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com · 2026-09-03T09:32:09)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > https://<strong>chromestatus.com/feature/6327898878377984</strong> · Reactions are currently unavailable · Sign up for free to join this conversation on GitHub. Already have an account? Sign in to comment ·
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > CSS navigation-source, https://<strong>chromestatus.com/feature/6327898878377984</strong> · CSS random(), https://chromestatus.com/feature/5324559251275776 · None. Updates for Chrome Canary, 18 Sept. 2026 · 2734004 · github-actions Bot adde...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17393.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6327898878377984`)*
  > &gt; None &gt; &gt; *Link to entry on the ... by Chrome Platform Status &gt; &lt;https://chromestatus.com&gt;. &gt; &gt; -- &gt; <strong>You received this message because you are subscribed to the Google Groups &gt; &quot;blink-dev&quot; gr...
- [\[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17359.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching Specification https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class Summary <strong>Selects the element th...
- [Re: \[blink-dev\] Intent to Ship: CSS pseudo-class for navigation source element](http://www.mail-archive.com/blink-dev@chromium.org/msg17395.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md#link-matching`)*
  > &gt; &gt; On Thu, Sep 3, 2026 at 5:46 AM Chromestatus &lt; &gt; [email protected]&gt; wrote: &gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected], [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; &gt;&gt; https://<strong>github...
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com · 2025-02-28T12:59:38)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > UPDATE: This selector only matches while a navigation is active. The animation-on-back-navigation part is to be handled by the https://<strong>drafts.csswg.org/css-navigation-1</strong>/ spec.
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com · 2026-08-04T13:36:50)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > https://<strong>drafts.csswg.org/css-navigation-1</strong> · https://github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md ·
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com · 2026-08-25T08:30:57)* *(Cites: `https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class`)*
  > Specification title CSS :navigation-source pseudo-class Specification or proposal URL (if available) https://<strong>drafts.csswg.org/css-navigation-1</strong>/#navigation-source-pseudo-class Explainer URL (if available) https://github.com/...

## 📚 Platform Documentation & Specifications

- [CSS Navigation · Issue #4301 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4301) *(github.com)*
- [Updates for Chrome Canary, 18 Sept. 2026 by Elchi3 · Pull Request #30576 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30576) *(github.com)*
- [\[css-navigation-1\] Add pseudo-class selector to target the element that initiated the outgoing navigation · Issue #11801 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/11801) *(github.com)*
- [Other Spec Review: CSS navigation-based styling · Issue #1253 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1253) *(github.com)*
- [CSS \`:navigation-source\` pseudo-class · Issue #1447 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1447) *(github.com)*
- [Pseudo-classes - CSS - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) *(developer.mozilla.org)*
- [Pseudo-classes and pseudo-elements - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) *(developer.mozilla.org)*
- [is() CSS pseudo-class - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:is) *(developer.mozilla.org)*
- [A beginner-friendly guide to view transitions in CSS \| MDN Blog](https://developer.mozilla.org/en-US/blog/view-transitions-beginner-guide) *(developer.mozilla.org)*
- [view-transition CSS at-rule - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition) *(developer.mozilla.org)*
- [:interest-source CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:interest-source) *(developer.mozilla.org)*
- [:current CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:current) *(developer.mozilla.org)*
- [:future CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:future) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **38 verified relevant**
  - `"chromestatus.com/feature/6327898878377984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/route-matching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"drafts.csswg.org/css-navigation-1" -site:drafts.csswg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"CSS pseudo-class for navigation source element" API` — *Core feature API query* (2 returned)
  - `"CSS pseudo-class for navigation source element" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"pseudo-class" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"CSS pseudo-class for navigation source element" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"CSS pseudo-class for navigation source element" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `":navigation-source" OR "navigation source" "view transitions" (tutorial OR guide OR css)` — *Searches for practical web development guides and blog posts demonstrating how to style the initiating navigation element during view transitions.* (8 returned)
  - `"css-navigation-1" ":navigation-source" OR "navigation-source-pseudo-class"` — *Finds formal syntax definitions, spec draft examples, and code snippets implementing the navigation source pseudo-class.* (5 returned)
  - `"CSS pseudo-class for navigation source element" OR ":navigation-source" "intent to prototype" OR "intent to ship"` — *Tracks browser engine implementation status and announcements across Chromium/Blink and other vendor roadmaps.* (8 returned)
  - `site:github.com/w3c/csswg-drafts "navigation source" OR "navigation-source" issue` — *Surfaces CSS Working Group debates, naming revisions, and developer feedback around the proposed selector.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **7 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 26 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 2 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6327898878377984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6327898878377984)
- [Specification](https://drafts.csswg.org/css-navigation-1/#navigation-source-pseudo-class)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/530210946)
