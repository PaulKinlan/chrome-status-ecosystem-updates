# Avoid caching module failures

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** Emerging (footprint 130 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** This specification update to the WHATWG HTML standard alters the document module map so transient network errors, HTTP failure codes, and MIME mismatches are no longer permanently cached for the lifetime of a browsing session. With Blink shipping the change enabled by default in Chrome 156, the web platform achieves full multi-engine consensus alongside prior implementations in WebKit and Gecko. Developers widely applaud the fix, which resolves years of production headaches around sticky failures in code-split single-page applications.

### Recommendations
- Actionable Advice: Teams should adopt bounded retry wrappers with backoff (e.g., executing dynamic import loader functions inside a try/catch loop) for user-critical lazy-loaded routes and components. However, retry logic should be capped and paired with clear fallback UI, ensuring deployment version skew and HTTP 404s still trigger user-prompted hard reloads rather than endless network requests.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification and browser implementations mandated that failed module loads (network drops, HTTP 4xx/5xx responses, MIME type mismatches) were recorded in the document’s internal \*\*module map\*\* Because this map is designed to e...
- [chromestatus.com](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Official Browser Announcements & Specifications \* \*\*Chrome Platform Status & Chrome Release Notes (Chrome 155 Beta / Chrome 156):\*\* Google Chromium shipped the feature under the flag/entry \*"Avoid caching module failures"\*
- [JavaScript 動態 import() 失敗怎麼重試？Chrome 155 Beta 的模組載入邊界 - ZeroOne](https://laplusda.com/posts/javascript-dynamic-import-failed-retry) *(laplusda.com)*
  > now())\`), which risked breaking module singletons, bypassing HTTP cache rules, and bloating memory Ecosystem posts acknowledge that as this feature lands natively, developers can migrate toward standard \`try/catch\` retry wrappers without mutating URL...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at 7:07 PM Ch...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;protected\] \*E...
- [Chrome 155 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-155-beta) *(developer.chrome.com · 2026-09-16T00:00:00)*
  > &lt;strong&gt;Currently web developers cannot retry failed module loads&lt;/strong&gt;, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retr...
- [Chrome Platform Status](https://chromestatus.com/feature/5214647044145152/activity) *(chromestatus.com)*
  > Chrome Platform Status

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

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

- [Failed dynamic import should not always be cached · Issue #6768 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/6768) *(github.com)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [Add retriable module loading keys by ddbeck · Pull Request #30604 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30604) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"caching module failures" OR "retry failed module" import() javascript` — *Searches for developer guides and blog posts explaining the change in module failure caching and how to retry dynamic imports.* (5 returned)
  - `javascript retry dynamic "import()" failed module network error` — *Finds code snippets and patterns showing how developers retry ES module dynamic imports after network drops.* (8 returned)
  - `"Avoid caching module failures" OR "Don't cache module script graph loading failures" Chrome OR WebKit OR Firefox` — *Tracks browser engine implementation status, intent-to-ship threads, and platform release notes.* (8 returned)
  - `"whatwg/html/pull/10327" OR "a54501545ab2ad22bfde0ebed02a115c"` — *Discovers standards discussions, developer sentiment, and spec debates around module graph loading failure caching.* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 10 result(s) found — **4 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 8 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 8 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 12 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5214647044145152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5214647044145152)
- [Specification](https://github.com/whatwg/html/pull/10327)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781954)
