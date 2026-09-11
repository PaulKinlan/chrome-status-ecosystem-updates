# Speculation rules: form_submission field

> **Report Week:** 2026-W37 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

This extends speculation rules syntax to allow developers to specify the form_submission field for prerender.

This field directs the browser to prepare the prerender as a form submission, so that it can be activated by real form submission navigations. Examples include a simple search form which results in a /search?q=XXX GET request navigation, support of which has been requested by web developers.

### Motivation

Form submissions cannot activate prerendered pages currently by design, due to internal browser limitations. In at least Chrome, ordinary form submission navigations have special state and run extra checks that ordinary prerenders don't experience. This means that a form submission can never activate a prerender, because the prerender was not prepared properly as a form submission. In addition to the internal browser limitations, resources can be wasted on prerendering a page which is not eligible, such as CSP disallowing form-action.

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chromium enabled the `form_submission` field in the Speculation Rules API by default in Chrome 151 and Edge 151 to allow prerendered pages to be activated by form navigations, such as GET-based search queries. The addition resolves internal browser constraints where form submissions run distinct security checks (like CSP `form-action`) compared to link navigations. Cross-engine adoption remains Chromium-led, as Gecko and WebKit have not yet implemented the field or formally aligned.

### Recommendations
- Actionable Advice: Adopt `form_submission` prerendering as a progressive enhancement by injecting dynamic speculation rules via JavaScript on submit-button hover or search input debounce. Because unsupported browsers and non-Chromium engines safely ignore unrecognized fields or missing Speculation Rules support, no polyfill or fallback code path is required.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (Mozilla): Latest discussion from @domfarolino: "> @domfarolino so why isn't this thing a method on form element, something which could be triggered from JS easily?  I also don't understand the quest..."
- Standards Activity (W3C TAG): Latest discussion from @dandclark: "Thanks for the clarification! @xiaochengh and I have continued looking at this and had a few more suggestions and questions.  - The fact that this is ..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Speculation rules: `form_submission` field](https://github.com/WebKit/standards-positions/issues/614) [open]
- **Mozilla:** [Speculation rules: `form_submission` field](https://github.com/mozilla/standards-positions/issues/1355) [open]
- **W3C TAG:** [Incubation: speculation rules `form_submission` field for prerendering](https://github.com/w3ctag/design-reviews/issues/1192) [closed]

## 📰 Ecosystem Blogs & Articles

- [Intent to Experiment: Speculation rules: form_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/Py0vdYAtSD4) *(groups.google.com)*
  > Intent to Experiment: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Speculation rules...
- [Intent to Prototype: Speculation rules: form_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/dbXHb3y2ceQ) *(groups.google.com · 2026-02-13T00:00:00)*
  > Intent to Prototype: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Speculation rules: ...
- [Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16773.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Mike Taylor Tue, 16 Jun 2026 12:28:02 -0700 LGTM2 On 6/15/...
- [[blink-dev] Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16006.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation rules: form_submission field Chromestatus Thu, 05 Mar 2026 17:35:01 -0800 Contact emails [e...
- [RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16776.html) *(mail-archive.com)*
  > RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field 'Daniel Clark' via blink-dev...
- [[blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16007.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Huanpo Lin Thu, 05 Mar 2026 17:37:27 -0800 Not quite s...
- [[blink-dev] Intent to Prototype: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg15847.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculation rules: form_submission field Chromestatus Fri, 13 Feb 2026 02:51:58 -0800 Contact emails [ema...
- [Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16015.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Mike Taylor Fri, 06 Mar 2026 08:35:31 -0800 LG...
- [[blink-dev] Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16708.html) *(mail-archive.com)*
  > Explainer https://github.com/W..._kSYZtvhRNaKpCiP7wLKYtDcpLdDWSH4y6gHq0kQ/edit?usp=sharing Summary <strong>This extends speculation rules syntax to allow developers to specify the form_submission field for prerender</strong>....
- [[blink-dev] Re: Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16752.html) *(mail-archive.com)*
  > &gt; &gt; &gt; &gt; &gt; *Specification* &gt; ...pCiP7wLKYtDcpLdDWSH &gt; 4y6gHq0kQ/edit?usp=sharing &gt; &gt; *Summary* &gt; <strong>This extends speculation rules syntax to allow developers to specify the &gt; form_submission field for prerender</s...
- [Speculation rules: form_submission field](https://chromestatus.com/feature/5074313831120896) *(chromestatus.com · 2026-02-10T00:00:00)*
  > We cannot provide a description for this page right now

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Speculation rules: form_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/Py0vdYAtSD4) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5074313831120896`)*
  > Intent to Experiment: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Specula...
- [Intent to Prototype: Speculation rules: form_submission field](https://groups.google.com/a/chromium.org/g/blink-dev/c/dbXHb3y2ceQ) *(groups.google.com · 2026-02-13T00:00:00)* *(Cites: `https://chromestatus.com/feature/5074313831120896`)*
  > Intent to Prototype: Speculation rules: form_submission field Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Speculati...
- [Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16773.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Mike Taylor Tue, 16 Jun 2026 12:28:02 -0700 LGTM...
- [[blink-dev] Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16006.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: Speculation rules: form_submission field Chromestatus Thu, 05 Mar 2026 17:35:01 -0800 Contact...
- [RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16776.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field Skip to site navigation (Press enter) RE: [EXTERNAL] Re: [blink-dev] Re: Intent to Ship: Speculation rules: form_submission field 'Daniel Clark' via...
- [[blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16007.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Huanpo Lin Thu, 05 Mar 2026 17:37:27 -0800 N...
- [[blink-dev] Intent to Prototype: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg15847.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > [blink-dev] Intent to Prototype: Speculation rules: form_submission field Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Speculation rules: form_submission field Chromestatus Fri, 13 Feb 2026 02:51:58 -0800 Contact e...
- [Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16015.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: Speculation rules: form_submission field Mike Taylor Fri, 06 Mar 2026 08:35:3...
- [[blink-dev] Intent to Ship: Speculation rules: form_submission field](http://www.mail-archive.com/blink-dev@chromium.org/msg16708.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md`)*
  > Explainer https://github.com/W..._kSYZtvhRNaKpCiP7wLKYtDcpLdDWSH4y6gHq0kQ/edit?usp=sharing Summary <strong>This extends speculation rules syntax to allow developers to specify the form_submission field for prerender</strong>....

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 41 result(s) found across 8 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5074313831120896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/nav-speculation/blob/main/prerendering-form-submission.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"storage.googleapis.com/spec-previews/WICG/nav-speculation/pull/426/diff/prerendering.html" -site:storage.googleapis.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Speculation rules: form_submission field" API` — *Core feature API query* (7 returned)
  - `"Speculation rules: form_submission field" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"form-action" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Speculation rules: form_submission field" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Speculation rules: form_submission field" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
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
