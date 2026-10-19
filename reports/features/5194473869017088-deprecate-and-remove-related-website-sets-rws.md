# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W43 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time.    We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** Emerging (footprint 160 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Related Website Sets (RWS) is being deprecated and removed in Chrome following Google's strategic shift to maintain the current third-party cookie approach instead of full deprecation. With low overall registration and adoption numbers alongside a lack of multi-engine interest, Google has initiated the sunsetting of RWS and its companion requestStorageAccessFor API.

### Recommendations
- Actionable Advice: Development teams should audit applications for reliance on RWS and the requestStorageAccessFor API, preparing to transition back to standard Storage Access API fallback behaviors or alternative multi-domain architecture. Set owners should proactively unwind integrations as deprecation rollouts advance.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [What are Related Website Sets? Unpacking Google’s Privacy Sandbox Initiative](https://www.adfixus.com/post/wth-are-related-website-sets-unpacking-googles-privacy-sandbox-initiative) *(adfixus.com)*
  > \*\*Related Website Sets (RWS)\*\*—formerly known as \*First-Party Sets\*—was introduced as part of Google’s Privacy Sandbox initiative It provided a framework allowing organizations to declare relationships across multiple domains
- [Chrome is Entrenching Third-Party Cookies For Some Sites In A Way That Will Predictably, Inevitably Mislead Users \| Brave](https://brave.com/blog/related-website-sets) *(brave.com)*
  > From its inception, RWS faced intense scrutiny from privacy advocates and competing browser vendors (such as Brave and independent security researchers) Critics frequently argued that RWS risked recreating privacy loopholes similar to third-party coo...
- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Related Web...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov 2025 16:45:37 -0800 Ignoring r...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12:34:45 -0800...
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months ago) Langua...
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:48:07 -0800 Contact...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Wed, 10 Jun 2026 06:47:...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) *(developers.google.com · 2024-02-06T00:00:00)*
  > &lt;strong&gt;--use-related-website-set=&quot;{\\&quot;primary\\&quot;: \\&quot;https://related-website-sets.glitch.me\\&quot;, \\&quot;associatedSites\\&quot;: \[\\&quot;https://rws-member-1.glitch.me\\&quot;\]}&quot; \\ https://related-website-sets.glitch.me/&lt;/stro...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > (An &quot;intra-RWS context&quot; is a context, such as an iframe, whose embedded site and top-level site are in the same RWS.) Note: SAA is shipping in several browsers, however there are differences between browser implementations in the rules of h...
- [Related Website Sets - the new name for First-Party Sets in Chrome 117 \| Privacy Sandbox](https://privacysandbox.google.com/blog/related-website-sets) *(privacysandbox.google.com · 2023-08-31T00:00:00)*
  > &lt;strong&gt;Many Privacy Sandbox APIs are ramping up to General Availability (GA) in Chrome Stable in preparation for third-party cookie deprecation beginning in 2024&lt;/strong&gt;. Some of these APIs will help preserve crucial cross-site cookie use cases, li...
- [Chrome’s third-party cookie crackdown has an exception most people don’t know about](https://www.makeuseof.com/chromes-third-party-cookie-crackdown-has-exception-most-dont-know-about) *(makeuseof.com · 2026-08-24T13:00:14)*
  > &lt;strong&gt;After Google decided to keep third-party cookies, the reason Related Website Sets were created was lost&lt;/strong&gt;. This feature was built primarily to soften the move to a web without those cookies.
- [Chrome Platform Status](https://chromestatus.com/feature/5162221567082496) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: R...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov 2025 16:45:37 -0800 ...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12:3...
- [https://github.com/WICG/first-party-sets \| Ecosyste.ms: Awesome](https://awesome.ecosyste.ms/projects/github.com/WICG/first-party-sets) *(awesome.ecosyste.ms)* *(Cites: `https://wicg.github.io/first-party-sets`)*
  > URL: https://github.com/WICG/first-party-sets · Owner: WICG · Created: 2018-08-01T23:25:34.000Z (over 6 years ago) Default Branch: main · Last Pushed: 2024-06-23T21:07:00.000Z (8 months ago) Last Synced: 2024-08-01T15:05:50.261Z (7 months a...

## 📚 Platform Documentation & Specifications

- [related-website-sets/RWS-Submission\_Guidelines.md at main · GoogleChrome/related-website-sets](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md) *(github.com)*
- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*
- [GitHub - WICG/first-party-sets · GitHub](https://github.com/WICG/first-party-sets) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 11 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `Related Website Sets deprecation Chrome guide` — *Finds official ecosystem announcements and developer guidance regarding the deprecation of Related Website Sets.* (8 returned)
  - `requestStorageAccessFor API tutorial examples` — *Searches for practical developer guides and usage tutorials for the companion rSAFor API.* (8 returned)
  - `First Party Sets Storage Access API code snippet` — *Retrieves real-world JavaScript code examples using Storage Access API within Related Website Sets.* (8 returned)
  - `Related Website Sets removed third-party cookies discussion` — *Discovers community sentiment, blog posts, and developer discussions on the removal of RWS.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 3 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 2 result(s) found — **1 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 9 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
