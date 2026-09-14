# Reference Target for Cross-root ARIA

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

Reference Target enables ID attributes like &lt;label for&gt;, aria-labelledby, popovertarget, and commandfor to be forwarded to elements inside a component's shadow DOM, while maintaining the shadow's encapsulation of its internal state.   When a shadow host specifies an element in its shadow tree to act as its reference target, all ID references pointing to the shadow host are forwarded to the reference target element instead.  &lt;label for="my-checkbox"&gt;Checkbox value (click me to toggle checkbox)&lt;/label&gt; &lt;custom-checkbox id="my-checkbox"&gt;   &lt;template shadowrootmode="open" shadowrootreferencetarget="real-checkbox"&gt;     &lt;input id="real-checkbox" type="checkbox"&gt;   &lt;/template&gt; &lt;/custom-checkbox&gt;  The reference target can be set declaratively like in the above example, or in JavaScript with ShadowRoot's referenceTarget property.

### Motivation

The Shadow DOM presents a problem for accessibility: there is not a way to establish semantic relationships between elements on in different shadow trees (such as via `aria-labelledby`). This limits the ability to design web components in a way that works with accessibility tools such as screen readers. The ARIAMixin IDL attributes (https://w3c.github.io/aria/#ARIAMixin) are a partial solution to the problem; however, they lack the ability to create a reference "into" a shadow tree from the outside. Reference Target is a solution to that missing piece of the problem. The specifics of the proposal are detailed in the linked explainer.

## Ecosystem Status

- **Momentum:** High (485 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** Reference Target resolves a decade-long friction point between Shadow DOM encapsulation and accessibility by allowing light DOM IDREFs (such as \`&lt;label for&gt;\`, \`aria-labelledby\`, \`popovertarget\`, and \`commandfor\`) to resolve directly to elements inside a shadow root. While Chromium has led the charge with default enablement in Chrome 152, the broader ecosystem is steadily following through upstream WHATWG standardisation and Igalia-backed prototypes across other engines. Consensus on Phase 1 is solid, moving the web components landscape closer to first-class accessible design systems.

### Recommendations
- Actionable Advice: Design system maintainers should test and progressively adopt \`shadowrootreferencetarget\` / \`referenceTarget\` in Chrome and flagged preview channels today. However, production applications must continue providing fallback accessibility strategies (such as ElementInternals or light DOM slotting) until Firefox and Safari enable the feature unflagged.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @annevk: "As per the README:  &gt; Note that positions on this repository do not reflect implementation status. We might like something we do not get around to imp..."
- Standards Activity (Mozilla): Latest discussion from @keithamus: "There are well demonstrated use cases for this, and I think phase 1 of the API seems well motivated to solve these. I have minor concerns about some m..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Reference Target for Cross-Root ARIA](https://github.com/WebKit/standards-positions/issues/356) [open]
- **Mozilla:** [Reference Target for Cross-Root ARIA](https://github.com/mozilla/standards-positions/issues/1035) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY) *(groups.google.com)*
  > Intent to Experiment: Reference Target for Cross-root ARIA Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Reference Target for ...
- [RE: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16884.html) *(mail-archive.com)*
  > RE: [blink-dev] Intent to Ship: Reference Target Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: Reference Target 'Daniel Clark' via blink-dev Thu, 25 Jun 2026 16:31:29 -0700 I’ve resolved all spec issues raised in prior rounds ...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ?pli=1) *(groups.google.com)*
  > Intent to Experiment: Reference Target for Cross-root ARIA Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Reference Target for ...
- [Registration for Reference Target for Cross-Root ARIA \| studio.sakupi01.com](https://studio.sakupi01.com/whatwg/reference-target-for-cross-root-aria) *(studio.sakupi01.com)*
  > Registration for Reference Target for Cross-Root ARIA | studio.sakupi01.com Registration for Reference Target for Cross-Root ARIA Explainer: https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md Intent: https://g...
- [Re: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16904.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt; &gt; [email protected]&gt; wrote: &gt; &gt; *Contact emails* &gt; &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; &gt; https://g...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ) *(groups.google.com)*
  > Reference Target is <strong>a feature to enable using IDREF attributes such as `for` and `aria-labelledby` to refer to elements inside a component&#x27;s shadow DOM, while maintaining encapsulation of the internal details of the shadow DOM</strong>. ...
- [Solving Cross-root ARIA Issues in Shadow DOM](https://blogs.igalia.com/mrego/solving-cross-root-aria-issues-in-shadow-dom) *(blogs.igalia.com · 2025-02-10T00:00:00)*
  > At this point this is the most promising proposal is the Reference Target one. This proposal allows the web authors to use Shadow DOM and still don’t break the accessibility of their web applications. The proposal is still in flux and it’s currently ...
- [Reference Target for Cross-root ARIA](https://chromestatus.com/feature/5188237101891584) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Referencing HTML elements inside Shadow DOM - HTMHell](https://www.htmhell.dev/adventcalendar/2025/4) *(htmhell.dev · 2025-12-04T00:00:00)*
  > Reference Target Tracking Issue ... · WICG/webcomponents · Reference Target for Cross-root ARIA <strong>enables us to reference HTML elements inside the Shadow DOM</strong>....
- [\[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11959.html) *(mail-archive.com)*
  > Yes Is this feature fully tested by web-platform-tests? Yes: https://wpt.fyi/results/shadow-dom/reference-target (with additional tests in development) Flag name on about://flags None Finch feature name ShadowRootReferenceTarget Non-finch justificati...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11992.html) *(mail-archive.com)*
  > The cross-root ARIA problem that reference target solves has been a longstanding hurdle for WebComponents adoption. See https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/, https://alice.pages.igalia.com/blog/how-sh...
- [ARIA Role Reference - Complete Guide to ARIA Attributes \| Internet Toolset](https://www.internettoolset.com/accessibility/aria-reference) *(internettoolset.com)*
  > Searchable database of 50+ ARIA roles, states, and properties with usage examples. Learn how to implement ARIA attributes for accessible web applications.
- [How to use ARIA: A beginner’s guide \| Webflow Blog](https://webflow.com/blog/how-to-use-aria) *(webflow.com · 2025-10-24T00:00:00)*
  > For more in-depth guidance on correct ARIA usage, check out the official references from MDN Web Docs and W3C&#x27;s “Using ARIA” documentation.
- [Using ARIA](https://w3c.github.io/using-aria) *(w3c.github.io · 2021-06-24T00:00:00)*
  > This document is <strong>a practical guide for developers on how to add accessibility information to HTML elements using the [[[WAI-ARIA-1.2]]] specification</strong>, which defines a way to make Web content and Web applications more accessible to pe...
- [Accessible Rich Internet Applications (WAI-ARIA) 1.3](https://w3c.github.io/aria) *(w3c.github.io · 2026-08-29T00:00:00)*
  > Accessibility of web content requires semantic information about widgets, structures, and behaviors, in order to allow assistive technologies to convey appropriate information to persons with disabilities. This specification provides an ontology of r...
- [ARIA attributes aria-label, aria-labelledby and aria-describedby - Web Accessibility Guidelines](https://stevenmouret.github.io/web-accessibility-guidelines/techniques/aria-label-labelledby-describedby.html) *(stevenmouret.github.io)*
  > render in AT : W3C Link World Wide Web Consortium The content of the element and the aria-describedby attribute element are rendered in the AT. &lt;p id=&quot;birdthday&quot;&gt;Birthday&lt;/p&gt; &lt;input type=&quot;text&quot; aria-labelledby=&quot...
- [Targets](https://developer.adobe.com/commerce/pwa-studio/api/buildpack/targets) *(developer.adobe.com · 2021-11-27T00:00:00)*
  > View detailed API reference documentation for the targets library in the Buildpack package of the PWA Studio framework.
- [Targeting by Reference in the Shadow DOM](https://meyerweb.com/eric/thoughts) *(meyerweb.com)*
  > That Shadowed component takes that reference and redirects it to an effective target — the reference target identified in its shadowRootReferenceTarget attribute. You could also set up the reference with JavaScript instead of an HTML template: &lt;la...
- [Reference Target: having your encapsulation and eating it too](https://blogs.igalia.com/alice/reference-target-having-your-encapsulation-and-eating-it-too) *(blogs.igalia.com)*
  > In this example, we’ve set the referenceTarget property directly on the ShadowRoot object, but it can also be set declaratively when using the &lt;template&gt; element to create the shadow root: &lt;label for=&quot;track&quot;&gt;Track name:&lt;/labe...
- [\[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16836.html) *(mail-archive.com)*
  > For example, here the &lt;label&gt;’s “my-checkbox” ID reference is forwarded to the element in the shadow with the ID “real-checkbox&quot;: &lt;label for=&quot;my-checkbox&quot;&gt;Click me to toggle checkbox&lt;/label&gt; &lt;custom-checkbox id=&qu...
- [Targeting by Reference in the Shadow DOM](https://meyerweb.com/eric/thoughts/2025/12/19/targeting-by-reference-in-the-shadow-dom) *(meyerweb.com · 2025-12-19T00:00:00)*
  > &lt;label for=&quot;consent&quot;&gt;I agree to join your marketing email list for some reason&lt;/label&gt; &lt;sp-checkbox id=&quot;consent&quot;&gt; &lt;template shadowRootReferenceTarget=&quot;setting&quot;&gt; &lt;input id=&quot;setting&quot; ty...
- [Can I create an ARIA reference to an element in shadow DOM? - Manuel Matuzovic](https://www.matuzo.at/blog/2023/web-components-accessibility-faq/aria-references) *(matuzo.at)*
  > &lt;label for=&quot;date&quot;&gt;Birthday&lt;/label&gt; &lt;input type=&quot;date&quot; id=&quot;date&quot; aria-describedby=&quot;hint&quot;&gt; &lt;the-hint&gt; #shadowRoot | &lt;p id=&quot;hint&quot;&gt; | Format: DD.MM.YYYY | &lt;/p&gt; #shadowR...
- [Intent to Prototype: ExportID for cross ShadowRoot ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/CEdbbQXPIRk) *(groups.google.com)*
  > The new plan is to implement Reference Target (https://github.com/WICG/aom/pull/207), which is simpler and more scoped to solving cross-root ARIA. I’ve updated the chromestatus feature to refer to Reference Target instead: https://chromestatus.com/fe...
- [Reference Target for Cross-root ARIA - Chrome Platform Status](https://cr-status.appspot.com/feature/5188237101891584) *(cr-status.appspot.com)*
  > Acceder con GoogleAcceder con Google. Se abre en una pestaña nueva
- [Re: \[blink-dev\] Intent to Experiment: Reference Target for Cross-root ARIA](https://www.mail-archive.com/blink-dev@chromium.org/msg11991.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; *Blink component* &gt; &gt; Blink&gt;DOM&gt;ShadowDOM &gt; &gt; &gt; &gt; *TAG review* &gt; &gt; https://github.com/w3ctag/design-reviews/issues/961 &gt; &gt; *TAG review status* &gt; &gt; Resolution: Satisfied &gt; &gt; *Risks* &...
- [Shadow DOM and accessibility: the trouble with ARIA \| Read the Tea Leaves](https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria) *(nolanlawson.com · 2025-05-28T13:20:59)*
  > Yes, that proposal has been superseded by Reference Target for Cross-Root ARIA. Although neither proposal has made it into a browser unflagged yet, as far as I know. ... I’m a PM at Microsoft and we’re working on the Reference Target proposal and try...
- [accessibility \| Read the Tea Leaves - Nolan Lawson](https://nolanlawson.com/category/accessibility) *(nolanlawson.com)*
  > Now normally, you can freely traverse up the tree in shadow DOM, even if you can’t traverse down – which means that, even with closed shadow roots, an element can always access anything in its ancestor hierarchy. So the goal of this restriction is to...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5188237101891584`)*
  > Intent to Experiment: Reference Target for Cross-root ARIA Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Reference T...
- [RE: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16884.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > RE: [blink-dev] Intent to Ship: Reference Target Skip to site navigation (Press enter) RE: [blink-dev] Intent to Ship: Reference Target 'Daniel Clark' via blink-dev Thu, 25 Jun 2026 16:31:29 -0700 I’ve resolved all spec issues raised in pri...
- [Intent to Experiment: Reference Target for Cross-root ARIA](https://groups.google.com/a/chromium.org/g/blink-dev/c/C3pELgMqzCY/m/Lpb6DkueAQAJ?pli=1) *(groups.google.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Intent to Experiment: Reference Target for Cross-root ARIA Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Reference T...
- [Registration for Reference Target for Cross-Root ARIA \| studio.sakupi01.com](https://studio.sakupi01.com/whatwg/reference-target-for-cross-root-aria) *(studio.sakupi01.com)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Registration for Reference Target for Cross-Root ARIA | studio.sakupi01.com Registration for Reference Target for Cross-Root ARIA Explainer: https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md Intent:...
- [Breakout Sessions \| Past calendar \| TPAC 2024 \| W3C](https://www.w3.org/calendar/tpac2024/breakout-sessions/?past=1) *(w3.org)* *(Cites: `https://github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md`)*
  > Session to discuss ARIA and web components: https://<strong>github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md</strong>
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-07-06 (public-html@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jul/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > (4 by annevk, dholbert, fsoder) ... - #12561 Make the DocumentFragment to sanitize inert (1 by noamr) https://github.com/whatwg/html/pull/12561 [topic: sanitizer] - #10995 <strong>Add reference target</strong> (1 by smaug----) https://githu...
- [Re: \[blink-dev\] Intent to Ship: Reference Target](http://www.mail-archive.com/blink-dev@chromium.org/msg16904.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > &gt; &gt; &gt; &gt; On Tue, Jun 23, 2026 at 4:22 PM &#x27;Daniel Clark&#x27; via blink-dev &lt; &gt; [email protected]&gt; wrote: &gt; &gt; *Contact emails* &gt; &gt; [email protected], [email protected] &gt; &gt; *Explainer* &gt; &gt; &gt;...
- [Re: \[whatwg/dom\] \[DRAFT\] Propagate events into the event's source's tree where appropriate. (PR #1377) from Dan Clark on 2026-05-19 (public-webapps-github@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-webapps-github/2026May/0309.html) *(lists.w3.org · 2026-05-19T00:00:00)* *(Cites: `https://github.com/whatwg/html/pull/10995`)*
  > dandclark left a comment ... https://github.com/whatwg/dom/pull/1353, and pulled https://github.com/whatwg/html/pull/11349 into https://<strong>github.com/whatwg/html/pull/10995</strong>....

## 📚 Platform Documentation & Specifications

- [Breakout Sessions \| Past calendar \| TPAC 2024 \| W3C](https://www.w3.org/calendar/tpac2024/breakout-sessions/?past=1) *(w3.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-07-06 (public-html@w3.org from July 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jul/0000.html) *(lists.w3.org)*
- [Re: \[whatwg/dom\] \[DRAFT\] Propagate events into the event's source's tree where appropriate. (PR #1377) from Dan Clark on 2026-05-19 (public-webapps-github@w3.org from May 2026)](https://lists.w3.org/Archives/Public/public-webapps-github/2026May/0309.html) *(lists.w3.org)*
- [Reference Target for Cross-Root ARIA · Issue #1035 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1035) *(github.com)*
- [Reference Target for Cross-Root ARIA · Issue #1011 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1011) *(github.com)*
- [Reference Target for Cross-Root ARIA · Issue #356 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/356) *(github.com)*
- [Reference Target · Issue #961 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/961) *(github.com)*
- [Articles/Short note on aria-labelledby and aria-describedby.html at master · stevefaulkner/Articles](https://github.com/stevefaulkner/Articles/blob/master/Short%20note%20on%20aria-labelledby%20and%20aria-describedby.html) *(github.com)*
- [Enhanced \`labelledby\` for Scroll Markers · Issue #13497 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/13497) *(github.com)*
- [wcag/techniques/aria/ARIA13.html at main · w3c/wcag](https://github.com/w3c/wcag/blob/main/techniques/aria/ARIA13.html) *(github.com)*
- [aria/index.html at main · w3c/aria](https://github.com/w3c/aria/blob/main/index.html) *(github.com)*
- [content/files/en-us/web/accessibility/aria/reference/attributes/aria-labelledby/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/accessibility/aria/reference/attributes/aria-labelledby/index.md?plain=1) *(github.com)*
- [Cross shadowroot ARIA Attendees: - Joey Arhar (Google) -](https://www.w3.org/2023/09/tpac-breakouts/14-minutes.pdf) *(w3.org)*
- [1981341 - Add referenceTarget and shadowRootReferenceTarget attributes](https://bugzilla.mozilla.org/1981341) *(bugzilla.mozilla.org)*
- [Add reference target to shadow root by dandclark · Pull Request #1353 · whatwg/dom](https://github.com/whatwg/dom/pull/1353) *(github.com)*
- [ARIA reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference) *(developer.mozilla.org)*
- [ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 59 result(s) found across 12 planned queries — **42 verified relevant**
  - `"chromestatus.com/feature/5188237101891584" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/webcomponents/blob/gh-pages/proposals/reference-target-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"github.com/whatwg/html/pull/10995" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Reference Target for Cross-root ARIA" API` — *Core feature API query* (8 returned)
  - `"Reference Target for Cross-root ARIA" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"aria-labelledby" OR "w3c.github" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Reference Target for Cross-root ARIA" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Reference Target for Cross-root ARIA" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"shadowrootreferencetarget" OR "referenceTarget" "web components" tutorial OR guide` — *Finds developer-oriented tutorials and guides explaining how to use the Reference Target attribute with web components.* (8 returned)
  - `"shadowrootreferencetarget" ("aria-labelledby" OR "label for" OR "popovertarget") example` — *Discovers concrete code examples illustrating cross-root attribute forwarding like label for and aria-labelledby into shadow DOM.* (8 returned)
  - `"Reference Target" "Cross-root ARIA" ("Intent to Ship" OR "Chrome Platform Status" OR "standards-positions")` — *Tracks browser engine positions, implementation status, and official announcements across Chromium, WebKit, and Gecko.* (8 returned)
  - `"reference target" "cross-root" accessibility "shadow dom" (feedback OR alternative OR problem)` — *Surfaces developer discussions, design feedback, and community sentiment regarding solving shadow DOM accessibility barriers.* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5188237101891584)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5188237101891584)
- [Specification](https://github.com/whatwg/html/pull/10995)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/346835896)
