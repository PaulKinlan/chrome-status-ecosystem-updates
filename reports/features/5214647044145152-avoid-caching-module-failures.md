# Avoid caching module failures

> **Report Week:** 2026-W45 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** Moderate (+60 points since 2026-10-12; footprint 190 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The web platform has resolved a long-standing architectural pain point by removing transient network failures and HTTP errors from the browser's internal module map following WHATWG HTML PR #10327. Shipped by default in Chrome 156 with matching implementations landing across Firefox and WebKit (Safari Technology Preview), the feature transitions the platform from strict idempotency of failures to an availability-first model. This allows failed dynamic imports to be retried in-place without resorting to cache-busting URLs or disruptive full-page reloads.

### Recommendations
- Actionable Advice: Teams should incorporate retry utilities or user-facing retry actions into their dynamic import wrappers and UI error boundaries to gracefully recover from temporary offline blips or server restarts. However, applications must remember that module evaluation failures and missing hashed chunks from newer deployments cannot be solved by retrying alone, and older browser versions will still require fallback strategies.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification dictated that browsers store all module fetch outcomes—including network errors, HTTP error codes, and MIME type mismatches—in the page’s internal \*\*module map\*\* Because the module map prioritizes idempotency and ...
- [chromestatus.com](https://chromestatus.com/feature/5214647044145152?gate=6551884683935744) *(chromestatus.com)*
  > Historically, the HTML specification dictated that browsers store all module fetch outcomes—including network errors, HTTP error codes, and MIME type mismatches—in the page’s internal \*\*module map\*\* The web platform specification changed via \*\*WHATWG...
- [chrome.com](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com)*
  > \*\*The Announcement:\*\* Introduced in the Chrome 155 beta and officially enabled by default in Chrome 156 desktop/Android, the Blink team labeled the feature \*\*"Avoid caching module failures"\*\*
- [chromestatus.com](https://chromestatus.com) *(chromestatus.com)*
  > \*\*The Announcement:\*\* Introduced in the Chrome 155 beta and officially enabled by default in Chrome 156 desktop/Android, the Blink team labeled the feature \*\*"Avoid caching module failures"\*\*
- [pixoptimo.com](https://pixoptimo.com/javascript-module-retry-chrome-156) *(pixoptimo.com)*
  > \*\*Developer Action:\*\* Highlights that while the browser \*permits\* retries, it does \*\*not\*\* auto-retry on your behalf Developers must wire up retry logic (e.g., wrapping \`import()\` inside an exponential backoff function or a user-initiated "Retry" but...
- [iloveblogs.blog](https://www.iloveblogs.blog/post/failed-to-fetch-dynamically-imported-module) *(iloveblogs.blog)*
  > js Developers emphasize an important distinction: retrying an \`import()\` succeeds if the failure was caused by a \*\*temporary network blip, tunnel drop, or a transient 5xx server error\*\*
- [Retry dynamic imports with “React.lazy” \| by Alon Mizrahi \| Medium](https://medium.com/@alonmiz1234/retry-dynamic-imports-with-react-lazy-c7755a7d557a) *(medium.com)*
  > The consensus from ecosystem maintainers is overwhelmingly positive, concluding a multi-year debate (dating back to WHATWG HTML Issue #6768) over whether module determinism was worth the cost of unrecoverable dynamic loading failures
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m., Yoav We...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17431.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Chris Harrelson Thu, 10 Sep 2026 10:08:03 -0700 LGTM2 On Thu, Sep 10, 2026 at 6:36 AM Mi...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;protected\] \*E...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > &gt;&gt; On 9/10/26 8:43 a.m., Yoav Weiss (@Shopify) wrote: &gt;&gt; &gt;&gt; \*Contact emails\* &gt;&gt; \[email protected\] &gt;&gt; &gt;&gt; \*Explainer\* &gt;&gt; https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c &gt;&gt; &gt;&gt; \*Spe...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Blink component\* &gt;&gt;&gt; Blink&gt;HTML&gt;Modules &gt;&gt;&gt; &lt;https://issues.chromium.org/issues?q=customfield1222907:&quot;Blink&gt;HTML&gt;Modules&quot;&gt; &gt;&gt;&gt; &gt;&gt;&gt; \*Web Feature ID\* &gt;&gt;&gt...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m...
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your sessi...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17431.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Chris Harrelson Thu, 10 Sep 2026 10:08:03 -0700 LGTM2 On Thu, Sep 10, 2026 at ...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;pro...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation Please ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add \`&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;\` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 \[agenda+\] - #10327 Don&#x27;t cache HTTP errors in the module map (1 by hiros...

## 📚 Platform Documentation & Specifications

- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [w3.org](https://www.w3.org/groups/cg/webdx/activity) *(w3.org)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Retriable module loading · Issue #954 · web-platform-dx/developer-signals · GitHub](https://github.com/web-platform-dx/developer-signals/issues/954) *(github.com)*
- [javascript.operators.import - don't cache HTTP errors · Issue #30304 · mdn/browser-compat-data · GitHub](https://github.com/mdn/browser-compat-data/issues/30304) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 12 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"retry dynamic import" OR "retry failed module" javascript` — *Searches for developer guides, tutorials, and patterns for handling and retrying failed dynamic module imports.* (8 returned)
  - `"import()" retry "failed module" OR "module script" error handling` — *Finds real-world code snippets demonstrating error catching and retrying dynamic import() syntax.* (8 returned)
  - `"whatwg/html/pull/10327" OR "yoavweiss/a54501545ab2ad22bfde0ebed02a115c"` — *Locates developer discussions, issues, and standards feedback directly referencing the specification change and explainer.* (3 returned)
  - `"Avoid caching module failures" OR "caching module failures" "intent to ship"` — *Tracks browser engine status updates, Chrome Intent to Ship threads, and platform adoption timelines.* (3 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **9 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 5 result(s) found — **5 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5214647044145152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5214647044145152)
- [Specification](https://github.com/whatwg/html/pull/10327)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781954)
