# Reference Target for Cross-root ARIA

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Reference Target enables ID attributes like &lt;label for&gt;, aria-labelledby, popovertarget, and commandfor to be forwarded to elements inside a component's shadow DOM, while maintaining the shadow's encapsulation of its internal state.   When a shadow host specifies an element in its shadow tree to act as its reference target, all ID references pointing to the shadow host are forwarded to the reference target element instead.  &lt;label for="my-checkbox"&gt;Checkbox value (click me to toggle checkbox)&lt;/label&gt; &lt;custom-checkbox id="my-checkbox"&gt;   &lt;template shadowrootmode="open" shadowrootreferencetarget="real-checkbox"&gt;     &lt;input id="real-checkbox" type="checkbox"&gt;   &lt;/template&gt; &lt;/custom-checkbox&gt;  The reference target can be set declaratively like in the above example, or in JavaScript with ShadowRoot's referenceTarget property.

### Motivation

The Shadow DOM presents a problem for accessibility: there is not a way to establish semantic relationships between elements on in different shadow trees (such as via `aria-labelledby`). This limits the ability to design web components in a way that works with accessibility tools such as screen readers. The ARIAMixin IDL attributes (https://w3c.github.io/aria/#ARIAMixin) are a partial solution to the problem; however, they lack the ability to create a reference "into" a shadow tree from the outside. Reference Target is a solution to that missing piece of the problem. The specifics of the proposal are detailed in the linked explainer.

## Ecosystem Status

- **Momentum:** High (485 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Reference Target for Cross-Root ARIA bridges a long-standing accessibility deficiency in Web Components by allowing outer ID references (such as \`&lt;label for&gt;\`, \`aria-labelledby\`, \`popovertarget\`, and \`commandfor\`) to transparently resolve into internal shadow DOM nodes without breaking shadow encapsulation. The feature has shipped enabled by default in Chrome 152 and advanced through WHATWG HTML specification PR #10995. Multi-engine alignment is strong, bolstered by Igalia's NLnet-backed development efforts implementing prototype support across WebKit and Gecko.

### Recommendations
- Actionable Advice: Web component authors should start adopting \`shadowrootreferencetarget\` declaratively and \`shadowRoot.referenceTarget\` imperatively for encapsulating form inputs and accessible widgets. For production environments requiring cross-browser parity today, treat it as a progressive enhancement while maintaining existing accessible fallback strategies until WebKit and Gecko ship the feature unflagged.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "As per the README:  &gt; Note that positions on this repository do not reflect implementation status. We might like something we do not get around to imp..."
- Standards Activity (Mozilla): Latest discussion from @keithamus: "There are well demonstrated use cases for this, and I think phase 1 of the API seems well motivated to solve these. I have minor concerns about some m..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Reference Target for Cross-Root ARIA](https://github.com/WebKit/standards-positions/issues/356) [open]
- **Mozilla:** [Reference Target for Cross-Root ARIA](https://github.com/mozilla/standards-positions/issues/1035) [closed]

## 📰 Ecosystem Blogs & Articles

- [meyerweb.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHvjmKR4FFRZJdVrYj6ZWlJfm_ogzBybK7QnRlZFbAT3zUlESr1B0pfCIxbzs8sMezSXAr5k9EDcHu5iyBwDx1HX7hU8xGYDdce9W5WEYtr8B9HTdBSrGYUItzNHDzEySxl3yjVl_shBtF9UTpxW3fJL0ujisrILuJMuHsDm2bVX-BmzK-unyYlMBsXR24=) *(vertexaisearch.cloud.google.com)*
  > Targeting by Reference in the Shadow DOM &#8211; Eric’s Archived Thoughts meyerweb.com Targeting by Reference in the Shadow DOM Published 9 months, 2 weeks past I’ve long made it clear that I don’t particularly care for the whole Shadow DOM thing. I ...
- [igalia.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHN3R2g1qbxpDMyXkN_GCOsjzeMKoI8yAvur5C5rN1HDzf-wemxCR3T8-0kJmJrVAM9uQCyU6XzKEogbtMk9Vry56lxw-TEuNrMnQiYm3VEnhEED1WbUiZPhFBgjLb2gdXAee9Qv-qRAYFLB0KvQGyaNCEPvYeTOtlLeZlCRM6pHI1kAE3O6Q0zxgWVe6JC3-uzzg==) *(vertexaisearch.cloud.google.com)*
  > Reference Target: having your encapsulation and eating it too alice&#39;s blog Reference Target: having your encapsulation and eating it too 30 January 2026 shadowdom html accessibility aria Three years ago, I wrote a blog post about How Shadow DOM a...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEUabFpubH35qlQNTDhaySddz5qUFoog_rbCZnFHZqW_tv6wLkg5ch6DdYbubBzd0WznyMOuseWty1_-qH1ljZHkScND3GniiXfWu06TGxymp2E4YEeF5Lt9ElXD5TwVhXFo9BfffR5) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [igalia.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGLdoN2E6pWWCBwwMb9wJ8Og1tnrlaBEEDnZWLTwPEikDInB3279wf2rdI9nsTtSpJHYP2P3zM8VzP-Z_6pgLWMvXa90tJ72saRQHWPdRClVkugd_I_DLibz6lnH6izS3u7YgIuvXi-wJQZXiB_pO6766rxmHEmY9qrE27o5t5lrnkj) *(vertexaisearch.cloud.google.com)*
  > Solving Cross-root ARIA Issues in Shadow DOM Rego’s Everyday Life A blog about my work at Igalia. Solving Cross-root ARIA Issues in Shadow DOM 10 February 2025 English Planet WebKit Accessibility This blog post is to announce that Igalia has gotten a...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG6qtwnUvzfHVNrG62fyVYCWWIqRm--1aIJlBJanQzR8L7DkoPKKci4nLSEg6RtgrcAlFnlWNJohTVXOHzPneqecmGFw75eZoG9VzxCf0gQ2rs0BVyQw9wPkASi5hUHtrZBfag57z7fs11GsjwhP0ZSdbFuXCQz2E0cga0RG_DQ_2PAQifQFzVwYn31Ss4lPBgp) *(vertexaisearch.cloud.google.com)*
  > webcomponents/proposals/reference-target-explainer.md at gh-pages · WICG/webcomponents · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload ...
- [web-standards.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH4JAXQUcq6QtMspSVkBsLlmkB9foq-bicl_NOyU54FM3z5Lz_F37Oa2k9O931zxRYF9Y_CAaLe1e1TAborIMuqPVsieMuk1WiaTmdH60MzoNZeGXAoB7spYHnKbpRqCDZiU1xi_M_T51RG-dzNvttvyUGqBGtD-bk-pteqLqu4) *(vertexaisearch.cloud.google.com)*
  > Reference Target: having your encapsulation and eating it too — Web Standards Web Standards Daily web platform news 326 414 311 Reference Target: having your encapsulation and eating it too 2026-02-10 Alice Boxhall introduces the new proposal that le...
- [htmhell.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEKiqtThApOhP_pXba8C71joMEd6rqn7Y6qCb6lGk3t4HcQ9p1Oz1AW5_JfQQdlfF2kj8X40rPwru1bhFeIvCVEyiNsiXihrZYrhqKxXly2iIEQbbrOawISffsMVvocYfyOwKH1) *(vertexaisearch.cloud.google.com)*
  > Referencing HTML elements inside Shadow DOM - HTMHell Skip to content Referencing HTML elements inside Shadow DOM by mehm8128 published on Dec 04, 2025 Skip to comments Web Components is the web standard way for creating reusable components like Reac...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQENDk90yYplnom3jTZKRqEIoPJjHKHvxpXPjX-AGe0CpN6fccF4-8RT7sP4j80Xm6xVdi4XAVvZyD2qrUzS3VImrns3k1bOwPFwOS3u7g3YS9Eqb19Mo7uWYLeX39r6f2sjF379XNDHOpqyOIEfTA==) *(vertexaisearch.cloud.google.com)*
  > Reference Target for Cross-Root ARIA · Issue #356 · WebKit/standards-positions · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ) *(groups.google.com)*
  > https://<strong>chromestatus.com/feature/5188237101891584</strong>?gate=5171533504315392 · Links to previous Intent discussions · Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CH3PR00MB1627F4E2554F7969B2B61E94D3FFA@C...
- [RE: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16884.html) *(mail-archive.com)*
  > On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt;[email protected]&lt;mailto:[email protected]&gt;&gt; wrote: Contact emails [email protected]&lt;mailto:[email protected]&gt;, [email protected]&lt;mailto:[email protected]&gt...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ?pli=1) *(groups.google.com)*
  > https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>#phase-2) would be needed?
- [Registration for Reference Target for Cross-Root ARIA \| studio.sakupi01.com](https://studio.sakupi01.com/whatwg/reference-target-for-cross-root-aria) *(studio.sakupi01.com)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>
- [Diff - a6e96c9dbf4ad2e8ee0ae47743190833938b3a11^! - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/a6e96c9dbf4ad2e8ee0ae47743190833938b3a11%5E!) *(chromium.googlesource.com)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong> Design document: https://docs.google.com/document/d/1c8gNwtCREEBZ2itt6poKdmQyS1tjdA_Dk69ly3XVZkk Chrome Status: https://chromestat...
- [jake lazaroff (@jakelazaroff@mastodon.social) - Mastodon](https://mastodon.social/@jakelazaroff) *(mastodon.social)*
  > jake lazaroff&lt;p&gt;building a typeahead web component has convinced me that we need to standardize reference target, like, yesterday&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference...
- [a6e96c9dbf4ad2e8ee0ae47743190833938b3a11 - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/a6e96c9dbf4ad2e8ee0ae47743190833938b3a11) *(chromium.googlesource.com)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong> Design document: https://docs.google.com/document/d/1c8gNwtCREEBZ2itt6poKdmQyS1tjdA_Dk69ly3XVZkk Chrome Status: https://chromestat...
- [Re: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16905.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt; &gt;&gt; [email protected]&gt; wrote: &gt;&gt; &gt;&gt; *Contact emails* &gt;&gt; &gt;&gt; [email protected], [email protected] &gt;&gt; &...
- [Solving Cross-root ARIA Issues in Shadow DOM](https://blogs.igalia.com/mrego/solving-cross-root-aria-issues-in-shadow-dom) *(blogs.igalia.com · 2025-02-10T00:00:00)*
  > A different one called Cross-root ARIA Reflection by Westbrook Johnson at Adobe. And finally the Reference Target for Cross-root ARIA proposal by Ben Howell at Microsoft.
- [Reference Target for Cross-root ARIA](https://chromestatus.com/feature/5188237101891584) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11959.html) *(mail-archive.com)*
  > Yes Is this feature fully tested by web-platform-tests? Yes: https://wpt.fyi/results/shadow-dom/reference-target (with additional tests in development) Flag name on about://flags None Finch feature name ShadowRootReferenceTarget Non-finch justificati...
- [Re: \[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11991.html) *(mail-archive.com)*
  > The cross-root ARIA problem that reference &gt; target solves has been a longstanding hurdle for WebComponents adoption. &gt; See &gt; https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/, &gt; &gt; https://alice.pag...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11992.html) *(mail-archive.com)*
  > The cross-root ARIA problem that reference target solves has been a longstanding hurdle for WebComponents adoption. See https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/, https://alice.pages.igalia.com/blog/how-sh...
- [Using ARIA](https://w3c.github.io/using-aria) *(w3c.github.io · 2021-06-24T00:00:00)*
  > This document is <strong>a practical guide for developers on how to add accessibility information to HTML elements using the [[[WAI-ARIA-1.2]]] specification</strong>, which defines a way to make Web content and Web applications more accessible to pe...
- [ARIA attributes aria-label, aria-labelledby and aria-describedby - Web Accessibility Guidelines](https://stevenmouret.github.io/web-accessibility-guidelines/techniques/aria-label-labelledby-describedby.html) *(stevenmouret.github.io)*
  > render in AT : W3C Link World Wide Web Consortium The content of the element and the aria-describedby attribute element are rendered in the AT. &lt;p id=&quot;birdthday&quot;&gt;Birthday&lt;/p&gt; &lt;input type=&quot;text&quot; aria-labelledby=&quot...
- [\[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16836.html) *(mail-archive.com)*
  > Initial public proposal https://github.com/WICG/aom/pull/207 TAG review https://github.com/w3ctag/design-reviews/issues/961 TAG review status Issues addressed Origin Trial Name Reference Target for Cross-Root ARIA Chromium Trial Name ShadowRootRefere...
- [New in Edge for developers – Create better components and make your site agent-ready - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2026/09/21/new-in-edge-for-developers-create-better-components-and-make-your-site-agent-ready) *(blogs.windows.com · 2026-09-22T08:58:27)*
  > In this edition, we’ll look more closely at some of the newest additions to Microsoft Edge and the Chromium project, such as the OpaqueRange API, to highlight and interact with ranges of text in input fields, the referenceTarget property, to make you...
- [Reference Target: having your encapsulation and eating it too](https://blogs.igalia.com/alice/reference-target-having-your-encapsulation-and-eating-it-too) *(blogs.igalia.com)*
  > The explainer gives two examples of this: aria-activedescendant on a combobox element which needs to refer to an option inside of a shadow root, and ARIA attributes like aria-labelledby, aria-describedby and aria-errormessage which may need a compute...
- [Referencing HTML elements inside Shadow DOM - HTMHell](https://www.htmhell.dev/adventcalendar/2025/4) *(htmhell.dev · 2025-12-04T00:00:00)*
  > &lt;div&gt; &lt;input type=&quot;text&quot; aria-labelledby=&quot;label&quot; /&gt; &lt;fancy-label id=&quot;label&quot;&gt; &lt;template shadowrootmode=&quot;open&quot; shadowRootReferenceTarget=&quot;inner-label&quot;&gt; &lt;label id=&quot;inner-l...
- [Targeting by Reference in the Shadow DOM](https://meyerweb.com/eric/thoughts/2025/12/19/targeting-by-reference-in-the-shadow-dom) *(meyerweb.com · 2025-12-19T00:00:00)*
  > The proposal at hand is for a shadowRootReferenceTarget attribute, which is <strong>a string used to identify an element within the Shadowed DOM tree that should be the actual target of any references</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [referencetarget · Issue #1336 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1336) *(github.com · 2026-08-14T17:31:53)* *(Cites: `https://chromestatus.com/feature/5188237101891584`)*
  > Chromestatus: https://chromestatus.com/feature/5188237101891584 Feature Name: <strong>Reference Target for Cross-root ARIA Web</strong> Feature ID: referencetarget Chrome Releases: Chrome 152
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5188237101891584`)*
  > https://<strong>chromestatus.com/feature/5188237101891584</strong>?gate=5171533504315392 · Links to previous Intent discussions · Intent to Prototype: https://groups.google.com/a/chromium.org/d/msgid/blink-dev/CH3PR00MB1627F4E2554F7969B2B61...
- [RE: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16884.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt;[email protected]&lt;mailto:[email protected]&gt;&gt; wrote: Contact emails [email protected]&lt;mailto:[email protected]&gt;, [email protected]&lt;mailto:[email pro...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ?pli=1) *(groups.google.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>#phase-2) would be needed?
- [Registration for Reference Target for Cross-Root ARIA \| studio.sakupi01.com](https://studio.sakupi01.com/whatwg/reference-target-for-cross-root-aria) *(studio.sakupi01.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>
- [Diff - a6e96c9dbf4ad2e8ee0ae47743190833938b3a11^! - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/a6e96c9dbf4ad2e8ee0ae47743190833938b3a11%5E!) *(chromium.googlesource.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong> Design document: https://docs.google.com/document/d/1c8gNwtCREEBZ2itt6poKdmQyS1tjdA_Dk69ly3XVZkk Chrome Status: https://...
- [jake lazaroff (@jakelazaroff@mastodon.social) - Mastodon](https://mastodon.social/@jakelazaroff) *(mastodon.social)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > jake lazaroff&lt;p&gt;building a typeahead web component has convinced me that we need to standardize reference target, like, yesterday&lt;/p&gt;&lt;p&gt;&lt;a href=&quot;https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals...
- [a6e96c9dbf4ad2e8ee0ae47743190833938b3a11 - chromium/src - Git at Google](https://chromium.googlesource.com/chromium/src/+/a6e96c9dbf4ad2e8ee0ae47743190833938b3a11) *(chromium.googlesource.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Explainer: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong> Design document: https://docs.google.com/document/d/1c8gNwtCREEBZ2itt6poKdmQyS1tjdA_Dk69ly3XVZkk Chrome Status: https://...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-07-06 (public-html@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jul/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > (4 by annevk, dholbert, fsoder) ... - #12561 Make the DocumentFragment to sanitize inert (1 by noamr) https://github.com/whatwg/html/pull/12561 [topic: sanitizer] - #10995 <strong>Add reference target</strong> (1 by smaug----) https://githu...
- [Re: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16905.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt; &gt;&gt; [email protected]&gt; wrote: &gt;&gt; &gt;&gt; *Contact emails* &gt;&gt; &gt;&gt; [email protected], [email protected] ...
- [Re: \[whatwg/dom\] \[DRAFT\] Propagate events into the event's source's tree where appropriate. (PR #1377) from Dan Clark on 2026-05-19 (public-webapps-github@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-webapps-github/2026May/0309.html) *(lists.w3.org · 2026-05-19T00:00:00)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > dandclark left a comment ... https://github.com/whatwg/dom/pull/1353, and pulled https://github.com/whatwg/html/pull/11349 into https://<strong>github.com/whatwg/html/pull/10995</strong>....

## 📚 Platform Documentation & Specifications

- [referencetarget · Issue #1336 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1336) *(github.com)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-07-06 (public-html@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jul/0000.html) *(lists.w3.org)*
- [Re: \[whatwg/dom\] \[DRAFT\] Propagate events into the event's source's tree where appropriate. (PR #1377) from Dan Clark on 2026-05-19 (public-webapps-github@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-webapps-github/2026May/0309.html) *(lists.w3.org)*
- [Reference Target for Cross-Root ARIA · Issue #356 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/356) *(github.com)*
- [Reference Target for Cross-Root ARIA · Issue #1035 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1035) *(github.com)*
- [Reference Target for Cross-Root ARIA · Issue #1011 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1011) *(github.com)*
- [Refine ARIA-across-shadow-roots guidance in accessible-web-components by LeaVerou · Pull Request #1033 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1033) *(github.com)*
- [Reference Target · Issue #961 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/961) *(github.com)*
- [Articles/Short note on aria-labelledby and aria-describedby.html at master · stevefaulkner/Articles](https://github.com/stevefaulkner/Articles/blob/master/Short%20note%20on%20aria-labelledby%20and%20aria-describedby.html) *(github.com)*
- [Enhanced \`labelledby\` for Scroll Markers · Issue #13497 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13497) *(github.com)*
- [wcag/techniques/aria/ARIA13.html at main · w3c/wcag](https://github.com/w3c/wcag/blob/main/techniques/aria/ARIA13.html) *(github.com)*
- [aria/index.html at main · w3c/aria](https://github.com/w3c/aria/blob/main/index.html) *(github.com)*
- [content/files/en-us/web/accessibility/aria/reference/attributes/aria-labelledby/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/accessibility/aria/reference/attributes/aria-labelledby/index.md?plain=1) *(github.com)*
- [ARIA: aria-labelledby attribute - ARIA \| MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) *(developer.mozilla.org)*
- [Cross shadowroot ARIA Attendees: - Joey Arhar (Google) -](https://www.w3.org/2023/09/tpac-breakouts/14-minutes.pdf) *(w3.org)*
- [Add reference target to shadow root by dandclark · Pull Request #1353 · whatwg/dom](https://github.com/whatwg/dom/pull/1353) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 12 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/5188237101891584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (6 returned)
  - `"github.com/whatwg/html/pull/10995" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Reference Target for Cross-root ARIA" API` — *Core feature API query* (8 returned)
  - `"Reference Target for Cross-root ARIA" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"aria-labelledby" OR "w3c.github" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Reference Target for Cross-root ARIA" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Reference Target for Cross-root ARIA" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"reference target" ("cross-root aria" OR "cross root aria") shadow dom tutorial OR guide` — *Find practical tutorials, developer articles, and guides explaining how reference target solves cross-root ARIA accessibility in web components.* (0 returned)
  - `"shadowrootreferencetarget" OR "referenceTarget" ("<label for>" OR "aria-labelledby")` — *Discover real-world markup and JavaScript implementations utilizing shadowrootreferencetarget attribute or the shadowRoot.referenceTarget IDL property.* (8 returned)
  - `"reference target" "cross-root" ("intent to prototype" OR "intent to ship" OR chromestatus OR webkit OR gecko)` — *Track multi-engine support, browser implementation status, Intent to Ship threads, and browser vendor adoption consensus.* (3 returned)
  - `"reference target" ("shadow dom" OR "web components") ("label for" OR "aria-labelledby") (site:github.com OR site:news.ycombinator.com OR site:dev.to)` — *Surface community feedback, developer sentiment, and accessibility discussions across developer forums and social hubs.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **8 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 569 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5188237101891584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5188237101891584)
- [Specification](https://github.com/whatwg/html/pull/10995)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/346835896)
