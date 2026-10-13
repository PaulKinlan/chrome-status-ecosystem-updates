# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time.    We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** Moderate (footprint 200 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Opposed
- **Executive Take:** Related Website Sets (formerly First-Party Sets) and its companion API document.requestStorageAccessFor are scheduled for full deprecation and removal in Chromium by Chrome 153, following Google's decision to maintain third-party cookies under a user-choice model. The mechanism suffered from negligible developer adoption—peaking at just 71 registered sets—and faced persistent criticism from privacy researchers as an unwarranted hole in cross-site boundary protections. With no competing browser ever implementing the mechanism, Chromium's withdrawal permanently eliminates a contentious, single-engine relaxation of same-origin storage boundaries.

### Recommendations
- Actionable Advice: Engineering teams must immediately audit and remove invocations of document.requestStorageAccessFor(), transitioning cross-site iframe flows to the standard, interoperable Storage Access API (document.requestStorageAccess) or Partitioned Cookies (CHIPS). Enterprise administrators should update device configurations to eliminate legacy RelatedWebsiteSetsEnabled enterprise policy dependencies before the milestone removal.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5162221567082496) *(chromestatus.com)*
  > requestStorageAccessFor()\` (\`rSAFor\`)\*\* relatedWebsiteSetsEnabled\`) are phased out
- [leapbuzz.com](https://leapbuzz.com/blog/privacy-sandbox-wind-down-cookieless) *(leapbuzz.com)*
  > Following Google’s pivot to maintain support for third-party cookies (offering a user-choice model rather than complete default deprecation), Google scheduled RWS and associated APIs for full deprecation and removal Developer Blogs & Ecosystem Analys...
- [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > \* \*\*Deprecation & Removal Target:\*\* Deprecation warnings rolled out starting around Chrome 144, with removals progressing toward Chrome 152–153 requestStorageAccessFor"\*\*: \* \*\*Motivation:\*\* The Blink intent explicitly notes that low ecosystem adoptio...
- [Privacy Sandbox feature status](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > \* \*\*Impact on SAA:\*\* The Storage Access API itself remains supported across all major browsers, but invocations within former set domains will now fall back to standard SAA behavior (requiring user interaction and permissions prompts where applicable...
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_au/policies/related-website-sets-enabled) *(chromeenterprise.google)*
  > relatedWebsiteSetsEnabled\`) are phased out \* Clarifies enterprise impact: Chrome Enterprise policy \`RelatedWebsiteSetsEnabled\` is marked deprecated, and administrators are advised to shift intranet workflows to standard cookie configurations or enter...
- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Chrome Release Notes & Developer Guides (\`developer.chrome.com\`) \* \*\*Chrome Beta and Stable Release Notes (Chrome 152 / 153)\*\*: \* Outlines RWS removal alongside several other retired Privacy Sandbox APIs (including Topics, Protected Audience, and Sha...
- [xt.pt](https://xt.pt/software/chrome-152-removes-private-aggregation-two-milestones-later-than-the-intent-said) *(xt.pt)*
  > Chrome Release Notes & Developer Guides (\`developer.chrome.com\`) \* \*\*Chrome Beta and Stable Release Notes (Chrome 152 / 153)\*\*: \* Outlines RWS removal alongside several other retired Privacy Sandbox APIs (including Topics, Protected Audience, and Sha...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Related Web...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15146.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Rick Byers Fri, 07 Nov 2025 12:59:25 -0800 I guess the...
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:48:07 -0800 Contact...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov 2025 16:45:37 -0800 Ignoring r...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12:34:45 -0800...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Wed, 10 Jun 2026 06:47:...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ) *(groups.google.com)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. &lt;strong&gt;Related ...
- [Intent to Deprecate and Remove: document.requestStorageAccessFor](https://groups.google.com/a/chromium.org/g/blink-dev/c/bqHGZYHWxnQ/m/Bobim4thBQAJ) *(groups.google.com)*
  > Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove rSAFor, as it is only usable in Chrome to request storage access between RWS sites. &lt;strong&gt;Related ...
- [Chrome’s third-party cookie crackdown has an exception most people don’t know about](https://www.makeuseof.com/chromes-third-party-cookie-crackdown-has-exception-most-dont-know-about) *(makeuseof.com · 2026-08-24T13:00:14)*
  > &lt;strong&gt;After Google decided to keep third-party cookies, the reason Related Website Sets were created was lost&lt;/strong&gt;. This feature was built primarily to soften the move to a web without those cookies.
- [Chrome Platform Status](https://chromestatus.com/feature/5194473869017088?gate=6562951716798464) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: R...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15146.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Rick Byers Fri, 07 Nov 2025 12:59:25 -0800 I...

## 📚 Platform Documentation & Specifications

- [Document: requestStorageAccessFor() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccessFor) *(developer.mozilla.org)*
- [GitHub - privacycg/requestStorageAccessFor: A proposed extension to the Storage Access API and discussion of how it may be integrated with First-Party Sets. · GitHub](https://github.com/privacycg/requestStorageAccessFor) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 55 result(s) found across 11 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Related Website Sets" OR "First-Party Sets" deprecation "Storage Access API" fallback` — *Developer guides and blog posts explaining the deprecation of Related Website Sets and how to migrate to standard Storage Access API fallback behavior.* (8 returned)
  - `"document.requestStorageAccessFor" OR "requestStorageAccessFor" javascript example` — *Practical JavaScript code examples and API invocations of the companion requestStorageAccessFor method designed for Related Website Sets.* (8 returned)
  - `site:groups.google.com/a/chromium.org "Intent to Deprecate and Remove" "Related Website Sets"` — *Chromium dev group intent thread detailing timeline, enterprise policy phase-out, and browser vendor alignment.* (4 returned)
  - `"Related Website Sets" OR "First-Party Sets" ("deprecated" OR "deprecation" OR "canceled") "third-party cookies"` — *Web community reactions, privacy advocacy discussions, and industry sentiment regarding Google abandoning RWS following changes to third-party cookie deprecation plans.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 12 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 2 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 9 result(s) found — **4 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 14 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
