# Deprecate and Remove: Related Website Sets (RWS)

> **Report Week:** 2026-W39 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

Related Website Sets (RWS), formerly known as First Party Sets, provides a framework for developers to declare relationships among sites, to enable limited cross-site cookie access for specific, user-facing purposes. This is facilitated through the use of the Storage Access API (SAA) and requestStorageAccessFor (rSAFor). RWS was designed for use in a browser without third-party cookies. Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove Related Website Sets (RWS).    Once RWS is deprecated; existing usage of SAA across contexts within a set will fall back to the API’s behavior outside of RWS as specified here. The difference in SAA behavior outside of RWS is well illustrated in our developer blogpost here.   The companion rSAFor API will also be deprecated via a separate intent.     We also intend to deprecate RWS-related Chrome Enterprise policies, as well as the chrome.privacy.relatedWebsiteSetsEnabled extension API; and will follow the relevant processes.

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. RWS usage is indicated by the number of registered sets (currently at 71 sets), and the usage of the requestStorageAccessFor API (currently at about 0.95% of pageloads), and after this announcement we intend to archive the registration repository, and expect adoption of rSAFor to decrease over time. 


We will continue to monitor usage and aim to drive it down prior to removal by proactively informing set owners of the deprecation timelines and request them to turn down usage. Further, other browser engines have not signaled interest in launching the API, obviating any interoperability concerns.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Related Website Sets (RWS, formerly First-Party Sets) and its companion \`requestStorageAccessFor\` API are scheduled for deprecation and removal in Chrome 153 following Google's broader retreat from mandatory third-party cookie phaseouts. RWS saw negligible developer traction (only 71 registered sets in the canonical registry) and failed to gain traction outside Chromium. Its removal resolves a long-standing point of ecosystem friction by reverting cookie-sharing workflows entirely to the standard Storage Access API (SAA).

### Recommendations
- Actionable Advice: Cease submissions to the canonical RWS GitHub repository and audit existing applications to remove calls to \`document.requestStorageAccessFor()\`. Migrate any required cross-site embedded state workflows to standard \`document.requestStorageAccess()\`, ensuring user interfaces accommodate transient user activation and explicit browser permission prompts.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Related Web...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12:34:45 -0800...
- [\[blink-dev\] Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15143.html) *(mail-archive.com)*
  > [blink-dev] Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) [blink-dev] Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 11:48:07 -0800 Contact...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15155.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Mike Taylor Sun, 09 Nov 2025 16:45:37 -0800 Ignoring r...
- [Google Privacy Sandbox API deprecations](https://learnfocus-sigma.vercel.app/?page=en-git-mdn-browser-compat-data-1762585883240) *(learnfocus-sigma.vercel.app · 2025-11-07T16:01:04)*
  > These APIs include document.requestStorageAccessFor, Related Website Sets (RWS), Shared Storage, Protected Audience, Private Aggregation API, Attribution Reporting API, and Topics API. The deprecation applies to Chromium-based browsers such as Chrome...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg16726.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; Once RWS is deprecated; existing usage of SAA across contexts within a &gt;&gt;&gt; set will fall back to the API’s behavior outside of RWS as specified &gt;&gt;&gt; here &lt;https://privacycg.github.io/storage-access/&gt;. ...
- [Related Website Sets: developer guide \| Privacy Sandbox](https://privacysandbox.google.com/cookies/related-website-sets-integration) *(privacysandbox.google.com · 2024-02-06T00:00:00)*
  > (An &quot;intra-RWS context&quot; is a context, such as an iframe, whose embedded site and top-level site are in the same RWS.) Note: SAA is shipping in several browsers, however there are differences between browser implementations in the rules of h...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Related Website Sets (RWS)](https://groups.google.com/a/chromium.org/g/blink-dev/c/V-wPXyoruac) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > Intent to Deprecate and Remove: Related Website Sets (RWS) Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: R...
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Related Website Sets (RWS)](http://www.mail-archive.com/blink-dev@chromium.org/msg15144.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5194473869017088`)*
  > [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) Skip to site navigation (Press enter) [blink-dev] Re: Intent to Deprecate and Remove: Related Website Sets (RWS) 'Johann Hofmann' via blink-dev Fri, 07 Nov 2025 12:3...

## 📚 Platform Documentation & Specifications

- [GitHub - GoogleChrome/related-website-sets: Note: This repository will be archived and will no longer accept new submissions. · GitHub](https://github.com/GoogleChrome/related-website-sets) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 7 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5194473869017088" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"wicg.github.io/first-party-sets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (1 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" API` — *Core feature API query* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.privacy" OR "0.95" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Related Website Sets (RWS)" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 27 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 6 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194473869017088)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194473869017088)
- [Specification](https://wicg.github.io/first-party-sets)
