# Avoid caching module failures

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** Moderate (footprint 340 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The 'Avoid caching module failures' update resolves a longstanding flaw in the HTML specification where transient network or HTTP fetch failures were permanently cached in the document's module map. With the merge of the specification update in the WHATWG HTML standard, all major browser engines have moved to align, eliminating sticky fetch errors and allowing dynamic imports to be retried. The platform consensus shifts module loading priorities from strict failure determinism toward real-world network resilience.

### Recommendations
- Actionable Advice: Teams should audit their critical dynamic import and code-splitting boundaries to implement bounded retry wrappers with exponential backoff for failed imports instead of relying immediately on full page reloads. However, developers must still retain fallback reload logic for production deployment churn, as missing hashed chunks from new deployments or JavaScript evaluation failures will still fail across retries.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification required browsers to maintain a per-document \*\*module map\*\* where all fetched modules were recorded Under the previous specification behavior, if a dynamic import (\`import()\`) or module script failed due to transi...
- [javascript - Failed to fetch dynamically imported module - Stack Overflow](https://stackoverflow.com/questions/72376333/failed-to-fetch-dynamically-imported-module) *(stackoverflow.com)*
  > Historically, the HTML specification required browsers to maintain a per-document \*\*module map\*\* where all fetched modules were recorded Libraries like \`@fatso83/retry-dynamic-import\` and custom cache-busting query strings were historically required ...
- [iloveblogs.blog](https://www.iloveblogs.blog/post/failed-to-fetch-dynamically-imported-module) *(iloveblogs.blog)*
  > The specification change (\*\*WHATWG HTML PR #10327: "Don't cache HTTP errors in the module map"\*\*) shifted the platform’s tradeoff from strict determinism toward availability Originating from discussions going back to WHATWG HTML issue \`#6768\` ("Faile...
- [appspot.com](https://img120-dot-cr-status.appspot.com) *(img120-dot-cr-status.appspot.com)*
  > Chrome introduced this feature in \*\*Chrome 155 Beta\*\* and shipped it enabled by default in \*\*Chrome 156\*\*
- [appspot.com](https://cr-status.appspot.com) *(cr-status.appspot.com)*
  > Chrome introduced this feature in \*\*Chrome 155 Beta\*\* and shipped it enabled by default in \*\*Chrome 156\*\*
- [stackoverflow.com](https://stackoverflow.com/questions/79991193/react-lazy-permanently-caches-a-failed-dynamic-import-how-can-i-retry-a-route) *(stackoverflow.com)*
  > lazy\`) and Vite setups Articles and community guides (such as analyses on Sentry, Vite issue #11804, and community posts) highlight that native retryability allows route-level error boundaries to offer "Retry" buttons that actually work without wipin...
- [Fix Failed to Fetch Dynamically Imported Module in React \| Sentry](https://sentry.io/answers/failed-to-fetch-dynamically-imported-module-in-react) *(sentry.io)*
  > Articles and community guides (such as analyses on Sentry, Vite issue #11804, and community posts) highlight that native retryability allows route-level error boundaries to offer "Retry" buttons that actually work without wiping out in-memory state M...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m., Yoav We...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at 7:07 PM Ch...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;protected\] \*E...
- [Fix: Loading chunk failed / ChunkLoadError - FixDevs](https://fixdevs.com/blog/loading-chunk-failed) *(fixdevs.com · 2026-05-22T00:00:00)*
  > Parcel v2 generates ES-module chunks with content hashes and uses native import(). Failures look like Vite failures. Parcel’s runtime does not retry — wrap your imports manually. Practical takeaway for retries. The retry pattern in Fix 2 (wrap import...
- [Retry Dynamic Imports with “React.lazy” \| Logz.io](https://logz.io/blog/retry-dynamic-imports-react-lazy) *(logz.io · 2023-08-31T11:22:04)*
  > Since this has been deployed, we are seeing a decrease of 94% in failures to fetch dynamic modules with the expected error: Failed to fetch dynamically imported module · It turns out that this is a known issue and is being discussed in the community ...
- [Retry dynamic imports with “React.lazy” \| by Alon Mizrahi \| Medium](https://medium.com/@alonmiz1234/retry-dynamic-imports-with-react-lazy-c7755a7d557a) *(medium.com · 2023-05-11T17:05:14)*
  > We need some way to tell the browser that we want to retry fetching the module. We can do it &lt;strong&gt;using a mechanism called cache-busting&lt;/strong&gt;. We can add a dynamic search parameter for each network call.
- [@fatso83/retry-dynamic-import - npm](https://www.npmjs.com/package/@fatso83/retry-dynamic-import) *(npmjs.com · 2025-09-07T00:00:00)*
  > ❌ dual exports (currently just ESM), shout out if you want it (we already produce the \*.cjs files) While that works fine in Firefox, in Chromium based browsers (Edge, Chrome, ...) a failed module import is cached and that failure is sticky: it is not...
- [r/vuejs on Reddit: Browser caching issue when code-splitting (Failed to fetch dynamically imported module)](https://www.reddit.com/r/vuejs/comments/1429o7m/browser_caching_issue_when_codesplitting_failed) *(reddit.com · 2023-06-06T09:06:15)*
  > Every time I build and push to production and then navigate through the app, I get this error: \`TypeError: Failed to fetch dynamically imported module\`, since the browser has cached the files from the previous build so now it&#x27;s looking for the o...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17431.html) *(mail-archive.com)*
  > &gt; On 9/10/26 8:43 a.m., Yoav Weiss (@Shopify) wrote: &gt; &gt; \*Contact emails\* &gt; \[email protected\] &gt; &gt; \*Explainer\* &gt; https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c &gt; &gt; \*Specification\* &gt; https://github.com/...
- ["TypeError: Failed to fetch dynamically imported module" on Vue/Vite vanilla setup](https://stackoverflow.com/questions/69300341/typeerror-failed-to-fetch-dynamically-imported-module-on-vue-vite-vanilla-set) *(stackoverflow.com)*
  > Your errors may be browser specific. For example Firefox and Safari: error loading a dynamically imported module Importing a module script failed 2023-02-27T23:05:20.757Z+00:00 ... The spec dictates that module caching is to happen even if it fails. ...
- [reactjs - React.js + Vite: failed to fetch dynamically imported module - Stack Overflow](https://stackoverflow.com/questions/78571093/react-js-vite-failed-to-fetch-dynamically-imported-module) *(stackoverflow.com)*
  > import React from &#x27;react&#x27;; export const lazyWithRetries: typeof React.lazy = (importer) =&gt; { const retryImport = async () =&gt; { try { return await importer(); } catch (error: any) { for (let i = 0; i &lt; 5; i++) { await new Promise((r...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m...
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at ...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;pro...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation Please ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add \`&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;\` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 \[agenda+\] - #10327 Don&#x27;t cache HTTP errors in the module map (1 by hiros...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/vitejs/vite/issues/11804?timeline_page=1) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/30304) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/6768) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [github.com](https://github.com/denoland/deno/issues/36057) *(github.com)*
- [github.com](https://github.com/nodejs/node/issues/64517) *(github.com)*
- [GitHub - fatso83/retry-dynamic-import: Workaround for when failed dynamic import resolutions are cached in browsers · GitHub](https://github.com/fatso83/retry-dynamic-import) *(github.com)*
- [Updates for Chrome 156 beta by Elchi3 · Pull Request #30754 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30754) *(github.com)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [Retrying failed to fetch dynamically imported modules · Issue #116 · WICG/import-maps](https://github.com/WICG/import-maps/issues/116) *(github.com)*
- [Add retriable module loading keys by ddbeck · Pull Request #30604 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30604) *(github.com)*
- [TypeError: Failed to fetch dynamically imported module · Issue #11804 · vitejs/vite](https://github.com/vitejs/vite/issues/11804) *(github.com)*
- [GitHub - rcoopr/retry-dynamic-import: Workaround for when failed dynamic import resolutions are cached in browsers · GitHub](https://github.com/rcoopr/retry-dynamic-import) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 60 result(s) found across 12 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"retry dynamic import" "failed" OR "failure" javascript OR "ES modules"` — *Find practical guides and developer tutorials explaining how to retry dynamic import() calls after network errors.* (8 returned)
  - `"import(" "retry" ("module map" OR "Failed to fetch dynamically imported module")` — *Discover JavaScript code snippets and retry patterns handling dynamic module load failures.* (8 returned)
  - `"Avoid caching module failures" OR "whatwg/html/pull/10327"` — *Search for official browser release notes, standards discussions, and implementation tracking for WHATWG PR 10327.* (4 returned)
  - `"failed module" ("retry" OR "caching") "dynamic import" site:github.com OR site:stackoverflow.com` — *Locate developer discussions, bug reports, and workarounds concerning browser caching of failed ES module requests.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 14 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5214647044145152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5214647044145152)
- [Specification](https://github.com/whatwg/html/pull/10327)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781954)
