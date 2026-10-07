# Speculation rules: form\_submission field

> **Report Week:** 2026-W39 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

This extends speculation rules syntax to allow developers to specify the form\_submission field for prerender.  This field directs the browser to prepare the prerender as a form submission, so that it can be activated by real form submission navigations. Examples include a simple search form which results in a /search?q=XXX GET request navigation, support of which has been requested by web developers.

### Motivation

Form submissions cannot activate prerendered pages currently by design, due to internal browser limitations. In at least Chrome, ordinary form submission navigations have special state and run extra checks that ordinary prerenders don't experience. This means that a form submission can never activate a prerender, because the prerender was not prepared properly as a form submission. In addition to the internal browser limitations, resources can be wasted on prerendering a page which is not eligible, such as CSP disallowing form-action.

## Ecosystem Status

- **Momentum:** High (280 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Speculation rules: form\_submission field is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @domfarolino: "&gt; @domfarolino so why isn't this thing a method on form element, something which could be triggered from JS easily?  I also don't understand the quest..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for the clarification! @xiaochengh and I have continued looking at this and had a few more suggestions and questions.  - The fact that this is ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Speculation rules: \`form\_submission\` field](https://github.com/WebKit/standards-positions/issues/614) [open]
- **Mozilla:** [Speculation rules: \`form\_submission\` field](https://github.com/mozilla/standards-positions/issues/1355) [open]
- **W3C TAG:** [Incubation: speculation rules \`form\_submission\` field for prerendering](https://github.com/w3ctag/design-reviews/issues/1192) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Experiment: Speculation rules: form\_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/Py0vdYAtSD4) *(groups.google.com)*
  > Intent to Experiment: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Speculation rules...
- [Intent to Prototype: Speculation rules: form\_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/dbXHb3y2ceQ) *(groups.google.com · 2026-02-13T00:00:00)*
  > Intent to Prototype: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Speculation rules: ...
- [Re: \[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16773.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Mike Taylor Tue, 16 Jun 2026 12:28:02 -0700 LGTM2 On 6/15/...
- [\[blink-dev\] Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16006.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation rules: form_submission field Chromestatus Thu, 05 Mar 2026 17:35:01 -0800 Contact emails [e...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16776.html) *(mail-archive.com)*
  > RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field 'Daniel Clark' via blink-dev...
- [\[blink-dev\] Re: Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16007.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Huanpo Lin Thu, 05 Mar 2026 17:37:27 -0800 Not quite s...
- [\[blink-dev\] Intent to Prototype: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg15847.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculation rules: form_submission field Chromestatus Fri, 13 Feb 2026 02:51:58 -0800 Contact emails [ema...
- [Re: \[blink-dev\] Re: Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16015.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Mike Taylor Fri, 06 Mar 2026 08:35:31 -0800 LG...
- [\[blink-dev\] Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16708.html) *(mail-archive.com)*
  > Explainer https://github.com/W..._kSYZtvhRNaKpCiP7wLKYtDcpLdDWSH4y6gHq0kQ/edit?usp=sharing Summary <strong>This extends speculation rules syntax to allow developers to specify the form_submission field for prerender</strong>....
- [\[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16766.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; &gt;&gt; *Specification* ...wLKYtDcpLdDWSH &gt;&gt; 4y6gHq0kQ/edit?usp=sharing &gt;&gt; &gt;&gt; *Summary* &gt;&gt; <strong>This extends speculation rules syntax to allow developers to specify the &gt;&gt; form_sub...
- [Speculation rules: form\_submission field](https://chromestatus.com/feature/5074313831120896) *(chromestatus.com · 2026-02-10T00:00:00)*
  > We cannot provide a description for this page right now
- [Setting the Form Action with a JavaScript Function \| HTML Form Guide](https://html.form.guide/html-form/form-action-using-javascript-function) *(html.form.guide)*
  > Add the following CSS styling: form label { display: inline-block; width: 100px; } form div { margin-bottom: 10px; } Add the following JavaScript to the file. <strong>function setAction(form) { form.action = &quot;register.html&quot;; alert(form.acti...
- [A Mini Guide to HTML Form Action \| Formspree](https://formspree.io/blog/html-form-action) *(formspree.io · 2025-02-27T00:00:00)*
  > In this article, you will discover how the HTML form action attribute works and how to use it effectively to control form submissions, send data to the right destination, and improve user interactions. You will learn best practices for setting up act...
- [form action with javascript - Stack Overflow](https://stackoverflow.com/questions/10520899/form-action-with-javascript) *(stackoverflow.com)*
  > THe only way I can get thiis to work is using form action but it does not work in IE, i cant understand wjy the posted solutions are not working but they wont call simpleCart.chekout 2012-05-10T12:59:01.247Z+00:00 ... The best way to do this in my op...
- [Prerender pages with Speculation Rules](https://techdocs.akamai.com/ion/docs/prerender-pages-with-speculation-rules) *(techdocs.akamai.com)*
  > <strong>You can leverage Speculation Rules API to improve the performance of Multi Page Apps (MPA) by prefetching or prerendering future navigations</strong>. This API promises a nearly-instant load of URLs that you specify in a special JSON structur...
- [Speculation Rules API: The new alternative to prerender \| Uploadcare](https://uploadcare.com/blog/speculation-rules-api-guide) *(uploadcare.com · 2026-03-20T00:00:00)*
  > The Speculation Rules API lets you make page navigation feel instant by prerendering likely next pages in the background before the user clicks. If you run a content-heavy or multi-page site, an e-commerce store, a blog, or a multi-step funnel, addin...
- [Speculation Rules on Shopify: Prefetch & Prerender (2026)](https://www.fudge.ai/guides/speculation-rules-shopify) *(fudge.ai · 2026-08-09T00:00:00)*
  > Shopify rolled speculation rules out platform-wide in late June 2025 and serves them via a Speculation-Rules response header pointing at a JSON file on its CDN. The platform ruleset prefetches product, collection, page, search, shop, blog, policy and...
- [Speculation Rules and Modern Frontend Frameworks: Integration Guide - DEV Community](https://dev.to/sankalan47/speculation-rules-and-modern-frontend-frameworks-integration-guide-3b4d) *(dev.to · 2025-03-16T06:44:49)*
  > The target page must allow prerendering via the document policy header: Document-Policy: prerender=1 · Cross-origin speculation requires appropriate permissions · Speculation Rules work through two key components:
- [Prerender pages in Chrome for instant page navigations \| Web Platform \| Chrome for Developers](https://developer.chrome.com/docs/web-platform/prerender-pages) *(developer.chrome.com · 2026-01-23T00:00:00)*
  > For a greater than 50% confidence level (shown in green), Chrome will prerender the URL. For the Speculation Rules API prerender option, web developers can <strong>insert JSON instructions onto their pages to inform the browser about which URLs to pr...
- [Speculative loading and the Speculation Rules API - Web Performance Calendar](https://calendar.perfplanet.com/2024/speculative-loading-and-the-speculation-rules-api) *(calendar.perfplanet.com · 2024-12-18T00:00:00)*
  > Google’s Speculation Rules API, which is available in Chromium-based browsers since Chrome 109, offers a more ergonomic and full-featured approach to prefetch and prerender. There is currently no support in Firefox (see the tracking issue for their p...
- [Speculation Rules Debugger \| specrules.com](https://specrules.com) *(specrules.com)*
  > Yes. form_submission (Chrome 151+) marks a prerender rule as targeting GET form submissions, such as a search form navigating to /search?q=term. The debugger validates the field type and flags misuse on prefetch or document rules. prerender_until_scr...
- [\[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16752.html) *(mail-archive.com)*
  > Yes, <strong>it only works for GET based form submissions</strong>. On Wednesday, June 10, 2026 at 10:45:42 PM UTC+9 Yoav Weiss wrote: &gt; On Tuesday, June 9, 2026 at 6:22:10 AM UTC+2 Chromestatus wrote: &gt; &gt; *Contact emails* &gt; [email protec...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Speculation rules: form\_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/Py0vdYAtSD4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5074313831120896`)*
  > Intent to Experiment: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Specula...
- [Intent to Prototype: Speculation rules: form\_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/dbXHb3y2ceQ) *(groups.google.com · 2026-02-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5074313831120896`)*
  > Intent to Prototype: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Speculati...
- [Re: \[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16773.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Mike Taylor Tue, 16 Jun 2026 12:28:02 -0700 LGTM...
- [\[blink-dev\] Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16006.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation rules: form_submission field Chromestatus Thu, 05 Mar 2026 17:35:01 -0800 Contact...
- [RE: \[EXTERNAL\] Re: \[blink-dev\] Re: Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16776.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field 'Daniel Clark' via...
- [\[blink-dev\] Re: Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16007.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Huanpo Lin Thu, 05 Mar 2026 17:37:27 -0800 N...
- [\[blink-dev\] Intent to Prototype: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg15847.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Intent to Prototype: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculation rules: form_submission field Chromestatus Fri, 13 Feb 2026 02:51:58 -0800 Contact e...
- [Re: \[blink-dev\] Re: Intent to Experiment: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16015.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Mike Taylor Fri, 06 Mar 2026 08:35:3...
- [\[blink-dev\] Intent to Ship: Speculation rules: form\_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16708.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Explainer https://github.com/W..._kSYZtvhRNaKpCiP7wLKYtDcpLdDWSH4y6gHq0kQ/edit?usp=sharing Summary <strong>This extends speculation rules syntax to allow developers to specify the form_submission field for prerender</strong>....

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 49 result(s) found across 12 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5074313831120896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"storage.googleapis.com/spec-previews/WICG/nav-speculation/pull/426/diff/prerendering.html" -site:storage.googleapis.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Speculation rules: form_submission field" API` — *Core feature API query* (7 returned)
  - `"Speculation rules: form_submission field" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"form-action" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Speculation rules: form_submission field" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation rules: form_submission field" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"speculation rules" prerender "form_submission" tutorial OR guide` — *Finds developer guides and blog posts explaining how to use form_submission within Speculation Rules for instant form or search results.* (8 returned)
  - `"type": "speculationrules" "form_submission" "prerender"` — *Searches for JSON configuration snippets and source code demonstrating the exact syntax for prerendering form submissions.* (1 returned)
  - `"speculation rules" "form_submission" ("intent to ship" OR "intent to prototype" OR Chrome)` — *Finds browser release notes, Blink-dev Intent threads, and standardization milestones across the Chromium ecosystem.* (7 returned)
  - `site:github.com/WICG/nav-speculation ("form_submission" OR "prerendering-form-submission")` — *Targets specification issues, pull requests, and web developer feedback regarding form submission prerendering.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 2 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 9 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5074313831120896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5074313831120896)
- [Specification](https://storage.googleapis.com/spec-previews/WICG/nav-speculation/pull/426/diff/prerendering.html)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/346555939)
