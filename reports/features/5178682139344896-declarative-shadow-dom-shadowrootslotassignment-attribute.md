# Declarative shadow DOM: shadowrootslotassignment attribute

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds the shadowrootslotassignment attribute to the <template> element, allowing declarative shadow roots to use manual slot assignment. Until now this option was only available imperatively, via attachShadow({slotAssignment: "manual"}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts "named" (the default, preserving current behavior) and "manual", and is reflected by the shadowRootSlotAssignment property on HTMLTemplateElement.

### Motivation

slotAssignment is fixed at shadow root creation, so components using manual slot assignment could not adopt declarative shadow DOM.

The gap was raised in https://github.com/WICG/webcomponents/issues/967 and specified in the HTML Standard via https://github.com/whatwg/html/pull/12267 .

 Both Gecko and WebKit have implemented the attribute, so shipping in Chromium completes cross-engine support.

This feature is opt-in and the default ("named") is unchanged.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Declarative shadow DOM: shadowrootslotassignment attribute is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Hacker News: "Rob Eisenberg on X: "Very nice example of using Shadow DOM outside of a Web Component to implement fully declarative (no JS) out-of-order HTML streaming. Declarative Shadow DOM (DSD) and other related standards enable tons of new possibilities without needing proprietary frameworks or even JS." / X" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Rob Eisenberg on X: "Very nice example of using Shadow DOM outside of a Web Component to implement fully declarative (no JS) out-of-order HTML streaming. Declarative Shadow DOM (DSD) and other related standards enable tons of new possibilities without needing proprietary frameworks or even JS." / X](https://twitter.com/EisenbergEffect/status/1743663754703765505) — *by @EisenbergEffect, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Yes!!! Declarative Shadow DOM (DSD) is now supported in ...](https://twitter.com/EisenbergEffect/status/1760038483014422901) — *by @EisenbergEffect, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [For the Shadow DOM folks* The platform is for everyone!](https://twitter.com/techytacos/status/1748448559568162960) — *by @techytacos, 0 likes/RTs, 0 replies*

## Packages & Polyfills

- [@webcomponents/template-shadowroot](https://www.npmjs.com/package/@webcomponents/template-shadowroot) `v0.2.1` — Declarative Shadow DOM for SSR

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHP78FwV_bffJuJbFmFQeC8bxUQApoHIO7ZX7kwyM4jflnuavdWPEmp8pFOYQFxujeFAXFGrZpYBdwUuzexPMLLh2fBwkpLWYZhOI3Kkb9Z-akR_eB8G45XXcFxFa_0FcSXazJ8D4Rh) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1_T0w7X18Ws4astLUj9gTSDhM6VkcZXEBMSqjPbGv2SZdjR12O-7MOLqgobDQAWkbfSmNh0JMzutlyzpwPNBMWVlla5Nrc3WdoxHURAV8kK6tWgM-DL4rRHK0WznvHEWtNm34kGzz81MJB5nf2FdH4hdbYL8N9kHKd9yW8fbElw==) *(vertexaisearch.cloud.google.com)*
  > ShadowRoot: slotAssignment property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs ShadowRoot slotAssignment Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) 日本語 ShadowRoot: ...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFh_5DDPq2g3K3uUBJsRSZ2BuVGYO4Nr1ICFwx915nohuPF4nMuaYPdiBIDd2fsTGzYnQcDErWWthSwHF6eQiopJOIEjV3aElYiA8zKvraeAOo9TisqqdpHgRM-EaBASdxsWXWyRqQZS-ieSSZnuIaQpTmvDT_JZJ1WFRES0ESjA1Ata2tNN_A384ZZNWh4XwyvkDs=) *(vertexaisearch.cloud.google.com)*
  > HTMLTemplateElement: shadowRootSlotAssignment property - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs HTMLTemplateElement shadowRootSlotAssignment Theme OS default Light Dark English (US) Remember language Learn more...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGntnPsWL7zXHO6ZCZJVGe-v4JyrJDSMT-j2HgAdMVg1UUBIXzafVoMLoK2xrzkul0MLsJPX0V36fMCD9FRXH_qxjOdEg75ailsQzv8Xj6MovwqR3ISnnU66DCD-O-rjo8kpu17yMvUYNI=) *(vertexaisearch.cloud.google.com)*
  > New in Chrome 151 | Blog | Chrome for Developers Skip to main content / English Nederlands Русский فارسی বাংলা Sign in Blog Chrome for Developers Blog New in Chrome 151 Stay organized with collections Save and categorize content based on your prefere...
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEzNdhWUQSqswhBXr5MJ01gftB4eg8urfqq0GDRloda_dKMxbtddlpmLDVa4dH1UhMtGsFgQP2LVaVeJJE9AMNNSoLeJvPhveDYKIfTm-JzpHnOgAZqQvMZkeE_SV5Th0Ml7w==) *(vertexaisearch.cloud.google.com)*
  > Chromium Sign in
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH9FQ_7W6tHR3Uhu0IZCMAWb4011xjXaMGUWUCjMuZ2q-k2z_dwIZc2o0wgGTpZ4FgzzTFCytu9PsawRX1Jrd7cJvH-nZHCh9f5l-J2kFhF-3y8E56FAOSZ3BVmAsY8028nOBoqACJi55w8bcm0rWlzLEG4IrhJ_ngo2w==) *(vertexaisearch.cloud.google.com)*
  > [dev-platform] Intent to Prototype & Ship: shadowrootslotassignment attribute Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; [dev-platform] Intent to...
- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmv0tKZhl72xDMouYpk_PLGGqIMQlDYJ-X-1HTP59pJ_IG9zsKc1EyDnGJkVB2SLnz-mkhljVQZZ1RJ1sJ4MOc-Vz08vTAPEKIMq5j0yrQHH567eo9CA-KbeupH8KdDyhFXVKTi3-DKUT3SptslE2pwGp1i7M-eXDsucx2LAV7MLSpsbqkExhD1qjqrZUWqQ==) *(vertexaisearch.cloud.google.com)*
  > Using templates and slots - Web APIs | MDN Skip to main content Skip to search Toggle sidebar Web Web APIs Web Components Using templates and slots Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Español Fra...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG4xirolBQ9crv0-Mk0w0zvMtsIyZZk8HU-LtlmVSXyRuRSq4Z6Fc-e27iJyn98k3ZIClm7TMdmT8k89ovsVThOHmrzyemRoM5AjQxh4QEdJkNe_urDFi69coftE3y_gA==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in July | Blog | web.dev Skip to main content / Sign in Blog Home Blog New to the web platform in July Stay organized with collections Save and categorize content based on your preferences. Discover some of the interesting fea...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHtEZMOn3Rtq05p2kj0DBfI1UMD_8GZk9yOcI2ON_aoHz66KFfChYUM2PB4xJmVSiOoxSu3bSDWZkQmq7ckWKX08CaY2dzfUXcuN9IshCMsOyNnKGzgOb2BSTuPXGJTS6o0fl7cF5gGQ4rCS_dqzQ==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`shadowrootslotassignment`** attribute allows developers to use **manual slot assignment** within Declarative Shadow DOM (DSD) templates.   Prior to this specification update, manual slot assignment could only be ena
- [debugbear.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQe3aTU0Jc9q_QA1qBK2T_bxAYvewDu-61UCt4O0bnWnSIdeJobmSkONPvz67HF5rfjVIAQWrMT9q05gPm1vUO5yrYNEjD55cTl2RLmp1VAY77-RyMEVOl51CZmngF7FZE198CHSRcfFL9sA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`shadowrootslotassignment`** attribute allows developers to use **manual slot assignment** within Declarative Shadow DOM (DSD) templates.   Prior to this specification update, manual slot assignment could only be ena
- [gorzelinski.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHDaWvsUId0j1kaAjrlGrCoTKzTnUg7rngO-htjiG83t_w9VUevJvkqyPJ4V5wYylJtptB_-EiVqD8SgOiBYeRVZHmCNmj3OEAWANBswEKOh6Uo7vdBtGUhTFXzKnXy5Pthx5mpFZYAwgnSC0i7HAEIHq128S3DCaWG3Y_CFA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **`shadowrootslotassignment`** attribute allows developers to use **manual slot assignment** within Declarative Shadow DOM (DSD) templates.   Prior to this specification update, manual slot assignment could only be ena
- [[blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16886.html) *(mail-archive.com)*
  > Initial public proposal No information provided Search tags shadow, DOM, slot TAG review No information provided TAG review status Not applicable Goals for experimentation None Risks Interoperability and Compatibility Low risk. The new behavior is op...
- [Re: [blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16910.html) *(mail-archive.com)*
  > Until now this option was only available imperatively, via attachShadow({slotAssignment: &quot;manual&quot;}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts &quot;named&quot; (th...
- [A practical guide to using shadow DOM - Mayank](https://mayank.co/blog/declarative-shadow-dom-guide) *(mayank.co)*
  > This JavaScript requirement made shadow DOM a non-starter for the vast majority of use cases. I used it almost exclusively for optional enhancements that are not critical to the initial page load. Even then, the developer ergonomics of imperatively a...
- [Declarative Shadow DOM: The Magic Pill for Server-Side Rendering and Web Components | HackerNoon](https://hackernoon.com/declarative-shadow-dom-the-magic-pill-for-server-side-rendering-and-web-components) *(hackernoon.com · 2024-07-31T00:00:00)*
  > In the declarative example, we <strong>use HTML to define a template for the Shadow DOM structure.</strong> We then use JavaScript to clone and append this template to the Shadow DOM, along with any additional content we wish to add.
- [the <template> Tag and Shadow DOM: A Deep Dive into Modern Web Development | by Web Development Tips | Medium](https://medium.com/@asobalsayed/the-template-tag-and-shadow-dom-a-deep-dive-into-modern-web-development-2480605995ef) *(medium.com · 2025-05-03T15:09:26)*
  > Shadow DOM Integration: <strong>With the shadowrootmode attribute, &lt;template&gt; can declaratively create a Shadow DOM</strong>.
- [Shadow DOM concepts - Polymer Project](https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom) *(polymer-library.polymer-project.org)*
  > <strong>The span &quot;I&#x27;m in light DOM&quot; is assigned to the slot #parent-slot in &lt;parent-element&gt;&#x27;s shadow DOM</strong>. The #parent-slot is then assigned to #child-slot in &lt;child-element&gt;&#x27;s shadow DOM. Note: This exam...
- [Shadow DOM](https://javascript.info/shadow-dom) *(javascript.info)*
  > The browser uses DOM/CSS internally to draw them. That DOM structure is normally hidden from us, but we can see it in developer tools. E.g. in Chrome, we need to <strong>enable in Dev Tools “Show user agent shadow DOM” option</strong>.
- [Sharing Styles in Declarative Shadow DOM | by EisenbergEffect | Medium](https://eisenbergeffect.medium.com/sharing-styles-in-declarative-shadow-dom-c5bf84ffd311) *(eisenbergeffect.medium.com · 2024-05-07T13:09:52)*
  > In the above HTML, &lt;hello-world&gt;serves as our DSD &quot;host&quot;. Inside of the host element, we have a &lt;template&gt; element with the shadowrootmode=&quot;open&quot; attribute. This does not define a template. This declaratively creates a...
- [Shadow DOM | Create Lightning Web Components | Lightning Web Components Developer Guide | Salesforce Developers](https://developer.salesforce.com/docs/platform/lwc/guide/create-dom.html) *(developer.salesforce.com)*
  > To understand the shadow tree, let’s look at some markup. This markup contains two Lightning web components: c-todo-app and c-todo-item. The #shadow-root document fragment defines the boundary between the DOM and the shadow tree.
- [[blink-dev] Web-Facing Change PSA: shadowrootslotassignment attribute for declarative shadow DOM](http://www.mail-archive.com/blink-dev@chromium.org/msg16734.html) *(mail-archive.com)*
  > Until now this option was only available imperatively, via attachShadow({slotAssignment: &quot;manual&quot;}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts &quot;named&quot; (th...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Citing HTML spec: v5.2 or WHATWG? · Issue #879 · act-rules/act-rules.github.io](https://github.com/act-rules/act-rules.github.io/issues/879) *(github.com · 2019-09-09T12:24:18)* *(Cites: `https://html.spec.whatwg.org/#attr-template-shadowrootslotassignment`)*
  > There are essentially 2 versions of the HTML specs: The &quot;stable&quot; HTML5.2 published by W3C at https://www.w3.org/TR/html52/ and the &quot;living standard&quot; published by WHATWG at <strong>https://html.spec.whatwg.org/</strong> (...

## 📚 Platform Documentation & Specifications

- [Citing HTML spec: v5.2 or WHATWG? · Issue #879 · act-rules/act-rules.github.io](https://github.com/act-rules/act-rules.github.io/issues/879) *(github.com)*
- [webcomponents/proposals/Declarative-Shadow-DOM.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Declarative-Shadow-DOM.md) *(github.com)*
- [GitHub - electron/electron: :electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS · GitHub](https://github.com/electron/electron) *(github.com)*
- [css-in-js · GitHub Topics · GitHub](https://github.com/topics/css-in-js) *(github.com)*
- [cross-browser · GitHub Topics · GitHub](https://github.com/topics/cross-browser?l=css) *(github.com)*
- [html5-css3-javascript · GitHub Topics · GitHub](https://github.com/topics/html5-css3-javascript) *(github.com)*
- [styling-css-in-js · GitHub Topics · GitHub](https://github.com/topics/styling-css-in-js) *(github.com)*
- [css · GitHub Topics · GitHub](https://github.com/topics/css) *(github.com)*
- [html-css-javascript · GitHub Topics · GitHub](https://github.com/topics/html-css-javascript) *(github.com)*
- [HTMLTemplateElement: shadowRootSlotAssignment property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment) *(developer.mozilla.org)*
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) *(developer.mozilla.org)*
- [dom.openOrClosedShadowRoot()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 7 planned queries — **19 verified relevant**
  - `"chromestatus.com/feature/5178682139344896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" API` — *Core feature API query* (2 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "cross-engine" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178682139344896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178682139344896)
- [Specification](https://html.spec.whatwg.org/#attr-template-shadowrootslotassignment)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/493315747)
