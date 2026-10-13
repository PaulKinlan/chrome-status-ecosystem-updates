# Deprecate and Remove: Shared Storage API

> **Report Week:** 2026-W42 | **Milestone:** Chrome 153 | **Category:** Deprecated

## Overview

The Shared Storage API is a privacy-preserving web API to enable storage that is not partitioned by first-party site.  Following Chrome's announcement that the current approach to third-party cookies will be maintained, we are now planning to deprecate and remove the Shared Storage API (along with certain other Privacy Sandbox APIs, as outlined on the Privacy Sandbox feature status page).  \[0\]: https://privacysandbox.com/news/privacy-sandbox-next-steps/

### Motivation

Chrome has announced that the current approach to third-party cookies will be maintained. Given this, we expect adoption to decrease over time (currently at ~11% of page loads) as the main use cases for Shared Storage will remain possible in Chrome using third-party cookies. Further, other browser engines have not signaled interest in launching the API. See also the initial public proposal below.

## Ecosystem Status

- **Momentum:** High (footprint 320 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Following Google's decision to preserve user-choice third-party cookies rather than deprecating them outright, Chrome has slated the Shared Storage API for formal deprecation and removal starting in Chrome 153. The API operated exclusively within Chromium as part of the Privacy Sandbox suite, never establishing cross-browser interoperability or gaining traction beyond ad-tech pilots. With low standalone utility and fading ecosystem adoption, Chrome is dismantling the storage worklet infrastructure and aligning its storage architecture back toward standard models.

### Recommendations
- Actionable Advice: Development teams should audit their client-side bundles and third-party scripts to purge references to the \`sharedStorage\` interface and associated worklets before full engine removal triggers runtime exceptions. For authenticated cross-origin embedded contexts, teams should rely on standardized storage partitioning rules and the Storage Access API rather than non-standard Privacy Sandbox worklets.
- Marked for deprecation in Chrome 153. Audit codebases and migrate to modern standard alternatives.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/153) *(developer.chrome.com)*
  > Following Google’s reversal of its plan to phase out third-party cookies by default, Chrome formally initiated plans to \*\*deprecate and remove the Shared Storage API\*\* (alongside associated APIs such as Private Aggregation, Protected Audience, Topics...
- [Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com](https://hidekazu-konishi.com/entry/privacy_sandbox_history_and_timeline.html) *(hidekazu-konishi.com)*
  > Privacy Sandbox History and Timeline - The Third-Party Cookie Phase-Out Plan, Its Reversal, API Deprecation and Removal in Chrome, and What Remains Supported \| hidekazu-konishi.com hidekazu-konishi.com https://hidekazu-konishi.com/images/privacy\_sand...
- [google.com](https://privacysandbox.google.com/overview/status) *(privacysandbox.google.com)*
  > Following Google’s reversal of its plan to phase out third-party cookies by default, Chrome formally initiated plans to \*\*deprecate and remove the Shared Storage API\*\* (alongside associated APIs such as Private Aggregation, Protected Audience, Topics...
- [secureprivacy.ai](https://secureprivacy.ai/blog/google-killed-privacy-sandbox-what-changes-for-cookie-consent-in-2026) *(secureprivacy.ai)*
  > Chrome and Blink developers confirmed that maintaining these custom storage worklets without third-party cookie phaseout offered low utility relative to their complexity and ecosystem adoption The decision to remove the API brings Blink back in line ...
- [arxiv.org](https://arxiv.org/pdf/2606.26390) *(arxiv.org)*
  > Chrome for Developers & Chrome Platform Status \* \*\*Intent and Tracking Status:\*\* Filed under Chromium Issue \`#462465887\` and tracked on Chrome Platform Status as \*Deprecate and Remove: Shared Storage API\*
- [chromestatus.com](https://chromestatus.com/release-notes/153) *(chromestatus.com)*
  > \* The release notes reiterate that the API is scheduled for complete removal in alignment with the broader retirement of Privacy Sandbox ad-targeting primitives
- [xt.pt](https://xt.pt/software/chrome-152-removes-private-aggregation-two-milestones-later-than-the-intent-said) *(xt.pt)*
  > \* \*\*Cross-Browser Interoperability:\*\* \* Neither Apple (WebKit/Safari) nor Mozilla (Gecko/Firefox) had adopted the Shared Storage API, raising concerns over cross-site data leakage, worklet complexity, and browser monoculture
- [researchgate.net](https://www.researchgate.net/publication/408340951_The_Rise_and_Fall_of_Google's_Privacy_Sandbox) *(researchgate.net)*
  > \* \*\*AdTech Whiplash & Migration Costs:\*\* \* Developer blogs and ad-tech analyses (e.g., across industry publications and academic post-mortems like \*The Rise and Fall of Google's Privacy Sandbox\*) noted frustration among engineering teams that investe...
- [usercentrics.com](https://usercentrics.com/knowledge-hub/what-is-google-privacy-sandbox) *(usercentrics.com)*
  > \* \*\*Compliance and Consent Clarifications:\*\* \* Privacy analysts and consent platform blogs (e.g., Usercentrics, privacy-focused developer roundups) emphasize to developers that the retirement of Privacy Sandbox features does not eliminate compliance ...
- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared Storage API ...
- [PSA: Shared Storage API deprecation and removal](https://groups.google.com/a/chromium.org/g/shared-storage-api-announcements/c/QvXkrgoqi80) *(groups.google.com · 2025-12-04T00:00:00)*
  > Following the announcement that Chrome will maintain its current approach to third-party cookies, &lt;strong&gt;the Shared Storage API will be deprecated in Chrome 144&lt;/strong&gt;, along with certain other APIs as outlined on the Privacy Sandbox feature statu...
- [\[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg15141.html) *(mail-archive.com)*
  > \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Cammie Smith Barnes Fri, 07 Nov 2025 11:32:42 -0800 Intent to deprecate and remove Sha...
- [Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API](http://www.mail-archive.com/blink-dev@chromium.org/msg17585.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Skip to site navigation (Press enter) Re: \[blink-dev\] Intent To Deprecate and Remove: Shared Storage API Mike Taylor Tue, 29 Sep 2026 15:13:44 -0700 Hey Cammie, Can you clarify which ...
- [Shared Storage API - Web APIs \| MDN](https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API.html) *(www-igm.univ-mlv.fr)*
  > This method acts as a proxy to our worklet operation, accessing it securely and returning the result without leaking any data. &lt;strong&gt;selectURL() is the correct method to call our user-defined worklet operation&lt;/strong&gt; because it was defined with t...
- [Close shared storage worklet by default after execution \[40260850\] - Chromium](https://issues.chromium.org/issues/40260850) *(issues.chromium.org)*
  > \[Empty comment from Monorail migration\] ... the default for shared storage worklets so that &lt;strong&gt;they close after a \`run()\` or \`selectURL()\` operation, unless the caller uses the new option (added in this CL) \`keepAlive: true\`&lt;/strong&gt;. This optio...
- [Shared Storage - Chrome Developers](https://chrome.jscn.org/docs/privacy-sandbox/shared-storage) *(chrome.jscn.org)*
  > URL selection can be tested in ... in Chrome M107+ Canary and Dev. &lt;strong&gt;The API can be tested by enabling the Privacy Sandbox Ads APIs experiment flag at chrome://flags/#privacy-sandbox-ads-apis&lt;/strong&gt;....
- [Shared Storage and Private Aggregation Implementation Quickstart \| Privacy Sandbox](https://developers.google.com/privacy-sandbox/relevance/shared-storage/api-walkthrough) *(developers.google.com · 2023-10-23T00:00:00)*
  > To measure aggregatable data stored in Shared Storage, you can use the Private Aggregation API. To create a report, call contributeToHistogram() inside a worklet with a bucket and value. The bucket is represented by an unsigned 128-bit integer which ...
- [Intent to Ship: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/dZ0NRwh7cvs) *(groups.google.com · 2023-06-20T00:00:00)*
  > Shared Storage &lt;strong&gt;provides a general purpose privacy primitive for use cases where a small amount of cross-site data is required&lt;/strong&gt;.
- [Intent to Ship: Shared Storage API Enhancements](https://groups.google.com/a/chromium.org/g/blink-dev/c/QWC8SnyOdzI) *(groups.google.com)*
  > &lt;strong&gt;Shared Storage&lt;/strong&gt; database contents for an origin can be viewed and modified within devtools.
- [Intent to Prototype: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/_quChIvPzT8) *(groups.google.com · 2021-06-30T00:00:00)*
  > This is &lt;strong&gt;a new API that intentionally allows for cross-site storage in a web in which all other storage has been partitioned by top-level site&lt;/strong&gt;. To prevent cross-site tracking of users, data in Shared Storage may only be read in a secu...
- [Intent to Ship: Support Cross-Origin Shared Storage Worklets](https://groups.google.com/a/chromium.org/g/blink-dev/c/JJFldgplL58/m/rebk85J7AAAJ) *(groups.google.com)*
  > Privacy In the case of creating or using a cross-origin worklet, if the worklet cannot be created because the user has denied storage for that site, then the promise will resolve (rather than reject) to prevent leaking cross-site data. A caller may s...
- [Intent to Ship: Allow Reading Interest Groups in Shared Storage Worklet](https://groups.google.com/a/chromium.org/g/blink-dev/c/6UGf5PAt8eY) *(groups.google.com)*
  > An interestGroups() method is added to the shared storage worklet, to return the Protected Audience interest groups associated with the shared storage origin&#x27;s owner, with some additional metadata.
- [FYI: Shared Storage API data storage limits updated](https://groups.google.com/a/chromium.org/g/blink-dev/c/vu8hvzY__y4) *(groups.google.com)*
  > As noted previously in pull request #132, we have removed the limits on number of keys as well as on lengths of keys and values, and replaced these limits with a single per-origin limit of 5MB on the total storage used by the origin&#x27;s key-value ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent To Deprecate and Remove: Shared Storage API](https://groups.google.com/a/chromium.org/g/blink-dev/c/uh5Ke6qyegc) *(groups.google.com · 2025-11-07T00:00:00)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > Intent To Deprecate and Remove: Shared Storage API Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent To Deprecate and Remove: Shared St...
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)* *(Cites: `https://chromestatus.com/feature/5076349064708096`)*
  > \[Google Privacy Sandbox\] Chrome 152 stubbed out Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance setti...

## 📚 Platform Documentation & Specifications

- [Shared Storage API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Shared_Storage_API) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorage) *(developer.mozilla.org)*
- [Privacy sandbox - Privacy on the web - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Privacy_sandbox) *(developer.mozilla.org)*
- [\[Google Privacy Sandbox\] Chrome 152 removed Shared Storage API by bershanskiy · Pull Request #30659 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30659) *(github.com)*
- [SharedStorageWorklet - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageWorklet) *(developer.mozilla.org)*
- [GitHub - WICG/shared-storage: Explainer for proposed web platform Shared Storage API · GitHub](https://github.com/WICG/shared-storage) *(github.com)*
- [WindowSharedStorage: selectURL() method - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowSharedStorage/selectURL) *(developer.mozilla.org)*
- [SharedStorageOperation - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/SharedStorageOperation) *(developer.mozilla.org)*
- [CSP: in Chrome: Deprecated feature used: Shared Storage API · alpinejs/alpine · Discussion #4736 · GitHub](https://github.com/alpinejs/alpine/discussions/4736) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 11 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5076349064708096" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"wicg.github.io/shared-storage" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Deprecate and Remove: Shared Storage API" API` — *Core feature API query* (7 returned)
  - `"Deprecate and Remove: Shared Storage API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"privacysandbox.com" OR "privacy-preserving" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Deprecate and Remove: Shared Storage API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"window.sharedStorage" OR "sharedStorage.worklet" (selectURL OR run)` — *Real-world JavaScript code examples and worklet invocation patterns for the Shared Storage API.* (8 returned)
  - `"Shared Storage API" (tutorial OR guide OR walkthrough) "Privacy Sandbox"` — *Developer guides, tutorials, and practical implementation overviews for Shared Storage.* (4 returned)
  - `"Shared Storage" (deprecate OR removal OR "intent to remove" OR sunset) Chrome "Privacy Sandbox"` — *Industry news, tracker updates, and ecosystem impact following Chrome's planned deprecation and removal of Shared Storage.* (8 returned)
  - `site:groups.google.com/a/chromium.org/g/blink-dev "Shared Storage"` — *Chromium blink-dev discussions and Intent to Deprecate/Remove threads capturing web standards feedback.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 5 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 7 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 10 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5076349064708096)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5076349064708096)
- [Specification](https://wicg.github.io/shared-storage)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/462465887)
