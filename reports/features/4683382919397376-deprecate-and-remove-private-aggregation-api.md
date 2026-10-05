# Deprecate and remove: Private Aggregation API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Deprecated

## Overview

The Private Aggregation API is a generic mechanism for measuring aggregate, cross-site data in a privacy preserving manner. It was originally designed for a future without third-party cookies.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page\[0\]). This API is only exposed via the Shared Storage and Protected Audience APIs, which are also planned to be deprecated and removed. So, no additional work will be required for Private Aggregation.  \[0\]: https://privacysandbox.google.com/overview/status

### Motivation

Chrome has announced[0] that the current approach to third-party cookies will be maintained. Given this, we expect adoption of the Private Aggregation API to decrease over time as cross-site measurement will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. Removing this (and certain other Privacy Sandbox APIs[1]) will help focus efforts on the proposed interoperable Attribution[2] standard.

[0]: https://privacysandbox.com/news/update-on-plans-for-privacy-sandbox-technologies/
[1]: https://privacysandbox.google.com/overview/status
[2]: https://github.com/w3c/attribution

## Ecosystem Status

- **Momentum:** High (90 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Deprecate and remove: Private Aggregation API is currently Deprecated in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Marked for deprecation in Chrome 152. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Private Aggreg...
- [Deprecate and remove: Private Aggregation API](https://chromestatus.com/feature/4683382919397376) *(chromestatus.com · 2025-10-21T00:00:00)*
  > We cannot provide a description for this page right now
- [\[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15188.html) *(mail-archive.com)*
  > &gt; &gt; Following Chrome&#x27;s announcement that the current approach to third-party &gt; cookies will be maintained, <strong>we are now planning to deprecate and remove the &gt; Private Aggregation API</strong> (along with certain other Privacy S...
- [Re: \[blink-dev\] Re: Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg16758.html) *(mail-archive.com)*
  > Hi API Owners, <strong>Private Aggregation API was deprecated in M144 with a plan to remove it in M150</strong>.
- [\[blink-dev\] Intent to Deprecate and Remove: Private Aggregation API](http://www.mail-archive.com/blink-dev@chromium.org/msg15139.html) *(mail-archive.com)*
  > False Estimated milestones <strong>Deprecate in M144 and then remove in M150</strong>. There will be one aspect of the API that will end sooner. Server-side &lt;https://privacysandbox.google.com/private-advertising/aggregation-service&gt; summary rep...
- [Chrome 152 removes Private Aggregation, two milestones later than the intent said — XT.PT](https://xt.pt/software/chrome-152-removes-private-aggregation-two-milestones-later-than-the-intent-said) *(xt.pt · 2026-08-29T09:36:17)*
  > <strong>The removal was filed on the Blink developer list on November 7, 2025 by Alex Turner, as an &quot;Intent to Deprecate and Remove: Private Aggregation API.&quot;</strong> The intent named a schedule: deprecation in M144, full removal in M150, ...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > <strong>Following Chrome&#x27;s announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Private Aggregation API</strong> (along with certain other Privacy Sandbox APIs).
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com · 2026-10-02T00:00:01)*
  > On July 22, 2024, Google changed that premise, and on <strong>October 17, 2025, it announced the retirement of APIs with low adoption. The end proceeds version by version, from the retirement announcement to deprecation and removal. Most retired APIs...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Deprecate and Remove: Private Aggregation API](https://groups.google.com/a/chromium.org/g/blink-dev/c/Ld7avyD0U0Q) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Intent to Deprecate and Remove: Private Aggregation API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Deprecate and Remove: Priv...
- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com · 2026-08-14T17:31:48)* *(Cites: `https://chromestatus.com/feature/4683382919397376`)*
  > Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another ...

## 📚 Platform Documentation & Specifications

- [Deprecate and remove: Private Aggregation API · Issue #1326 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1326) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 7 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/4683382919397376" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"patcg-individual-drafts.github.io/private-aggregation-api" -site:patcg-individual-drafts.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" API` — *Core feature API query* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.google" OR "privacysandbox.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and remove: Private Aggregation API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 7 result(s) found — **0 verified relevant**
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
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/4683382919397376)
- [ChromeStatusLite](https://chromestatuslite.com/feature/4683382919397376)
- [Specification](https://patcg-individual-drafts.github.io/private-aggregation-api)
