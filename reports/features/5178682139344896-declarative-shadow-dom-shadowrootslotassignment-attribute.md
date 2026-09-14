# Declarative shadow DOM: shadowrootslotassignment attribute

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Adds the shadowrootslotassignment attribute to the &lt;template&gt; element, allowing declarative shadow roots to use manual slot assignment. Until now this option was only available imperatively, via attachShadow({slotAssignment: "manual"}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts "named" (the default, preserving current behavior) and "manual", and is reflected by the shadowRootSlotAssignment property on HTMLTemplateElement.

### Motivation

slotAssignment is fixed at shadow root creation, so components using manual slot assignment could not adopt declarative shadow DOM.

The gap was raised in https://github.com/WICG/webcomponents/issues/967 and specified in the HTML Standard via https://github.com/whatwg/html/pull/12267 .

 Both Gecko and WebKit have implemented the attribute, so shipping in Chromium completes cross-engine support.

This feature is opt-in and the default ("named") is unchanged.

## Ecosystem Status

- **Momentum:** High (240 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Declarative shadow DOM: shadowrootslotassignment attribute is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16899.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute Chris Harrelson Mon, 29 Jun 20...
- [\[blink-dev\] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16886.html) *(mail-archive.com)*
  > Initial public proposal No information provided Search tags shadow, DOM, slot TAG review No information provided TAG review status Not applicable Goals for experimentation None Risks Interoperability and Compatibility Low risk. The new behavior is op...
- [Re: \[blink-dev\] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16910.html) *(mail-archive.com)*
  > Until now this option was only available imperatively, via attachShadow({slotAssignment: &quot;manual&quot;}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts &quot;named&quot; (th...
- [A practical guide to using shadow DOM - Mayank](https://mayank.co/blog/declarative-shadow-dom-guide) *(mayank.co)*
  > This JavaScript requirement made shadow DOM a non-starter for the vast majority of use cases. I used it almost exclusively for optional enhancements that are not critical to the initial page load. Even then, the developer ergonomics of imperatively a...
- [Declarative Shadow DOM: The Magic Pill for Server-Side Rendering and Web Components \| HackerNoon](https://hackernoon.com/declarative-shadow-dom-the-magic-pill-for-server-side-rendering-and-web-components) *(hackernoon.com · 2024-07-31T00:00:00)*
  > In the declarative example, we <strong>use HTML to define a template for the Shadow DOM structure.</strong> We then use JavaScript to clone and append this template to the Shadow DOM, along with any additional content we wish to add.
- [the &lt;template&gt; Tag and Shadow DOM: A Deep Dive into Modern Web Development \| by Web Development Tips \| Medium](https://medium.com/@asobalsayed/the-template-tag-and-shadow-dom-a-deep-dive-into-modern-web-development-2480605995ef) *(medium.com · 2025-05-03T15:09:26)*
  > Shadow DOM Integration: <strong>With the shadowrootmode attribute, &lt;template&gt; can declaratively create a Shadow DOM</strong>.
- [Shadow DOM](https://javascript.info/shadow-dom) *(javascript.info)*
  > The browser uses DOM/CSS internally to draw them. That DOM structure is normally hidden from us, but we can see it in developer tools. E.g. in Chrome, we need to <strong>enable in Dev Tools “Show user agent shadow DOM” option</strong>.
- [Shadow DOM concepts - Polymer Project](https://polymer-library.polymer-project.org/2.0/docs/devguide/shadow-dom) *(polymer-library.polymer-project.org)*
  > <strong>The span &quot;I&#x27;m in light DOM&quot; is assigned to the slot #parent-slot in &lt;parent-element&gt;&#x27;s shadow DOM</strong>. The #parent-slot is then assigned to #child-slot in &lt;child-element&gt;&#x27;s shadow DOM. Note: This exam...
- [Sharing Styles in Declarative Shadow DOM \| by EisenbergEffect \| Medium](https://eisenbergeffect.medium.com/sharing-styles-in-declarative-shadow-dom-c5bf84ffd311) *(eisenbergeffect.medium.com · 2024-05-07T13:09:52)*
  > In the above HTML, &lt;hello-world&gt;serves as our DSD &quot;host&quot;. Inside of the host element, we have a &lt;template&gt; element with the shadowrootmode=&quot;open&quot; attribute. This does not define a template. This declaratively creates a...
- [Shadow DOM \| Create Lightning Web Components \| Lightning Web Components Developer Guide \| Salesforce Developers](https://developer.salesforce.com/docs/platform/lwc/guide/create-dom.html) *(developer.salesforce.com)*
  > To understand the shadow tree, let’s look at some markup. This markup contains two Lightning web components: c-todo-app and c-todo-item. The #shadow-root document fragment defines the boundary between the DOM and the shadow tree.
- [\[blink-dev\] Web-Facing Change PSA: shadowrootslotassignment attribute for declarative shadow DOM](http://www.mail-archive.com/blink-dev@chromium.org/msg16734.html) *(mail-archive.com)*
  > Until now this option was only available imperatively, via attachShadow({slotAssignment: &quot;manual&quot;}), so components that rely on manual assignment could not create their shadow roots declaratively. The attribute accepts &quot;named&quot; (th...
- [Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically](https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b) *(dev.to · Mario Ezquerro · Sep 11)*
  > Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16899.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5178682139344896`)*
  > Re: [blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Declarative shadow DOM: shadowrootslotassignment attribute Chris Harrelson Mon,...
- [Citing HTML spec: v5.2 or WHATWG? · Issue #879 · act-rules/act-rules.github.io](https://github.com/act-rules/act-rules.github.io/issues/879) *(github.com · 2019-09-09T12:24:18)* *(Cites: `https://html.spec.whatwg.org/#attr-template-shadowrootslotassignment`)*
  > Citing HTML spec: v5.2 or WHATWG? · Issue #879 · act-rules/act-rules.github.io · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reloa...

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

- **Brave Search:** 36 result(s) found across 7 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5178682139344896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" API` — *Core feature API query* (2 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"github.com" OR "cross-engine" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (3 returned)
  - `"Declarative shadow DOM: shadowrootslotassignment attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 113836 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5178682139344896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5178682139344896)
- [Specification](https://html.spec.whatwg.org/#attr-template-shadowrootslotassignment)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/493315747)
