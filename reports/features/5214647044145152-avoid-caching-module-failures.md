# Avoid caching module failures

> **Report Week:** 2026-W38 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** High (110 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Avoid caching module failures is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m., Yoav We...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 *Contact emails* [email&#160;protected] *E...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at 7:07 PM Ch...
- [Disabling and debugging caching \| Development tools \| Drupal Wiki guide on Drupal.org](https://www.drupal.org/docs/develop/development-tools/disabling-and-debugging-caching) *(drupal.org · 2025-12-17T12:21:36)*
  > Disabling and debugging caching | Development tools | Drupal Wiki guide on Drupal.org Skip to main content Skip to search Can we use first and third party cookies and web beacons to understand our audience, and to tailor promotions you see ? Yes, ple...
- [Caching Guide - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/caching.html) *(httpd.apache.org)*
  > Caching Guide - Apache HTTP Server Version 2.4 Modules | Directives | FAQ | Glossary | Sitemap | Report a bug Apache HTTP Server Version 2.4 Apache > HTTP Server > Documentation > Version 2.4 Caching Guide Available Languages: en | fr | tr This docum...
- [How to Implement Cache Failover](https://oneuptime.com/blog/post/2026-01-30-cache-failover/view) *(oneuptime.com · 2026-01-30T00:00:00)*
  > <strong>Build your cache layer with the assumption that it will fail</strong>. Implement multiple tiers of caching so that local caches can absorb load during remote cache outages. Use circuit breakers to prevent cascading failures and protect your b...
- [Caching Guide - Apache HTTP Server](https://publib.boulder.ibm.com/httpserv/manual70/caching.html) *(publib.boulder.ibm.com)*
  > <strong>It describes how to use Apache&#x27;s caching features to accelerate web and proxy serving, while avoiding common problems and misconfigurations</strong>. ... As of Apache HTTP server version 2.2 mod_cache and mod_file_cache are no longer mar...
- [8 - What is the correct way to handle caching with custom modules? - Drupal Answers](https://drupal.stackexchange.com/questions/216911/what-is-the-correct-way-to-handle-caching-with-custom-modules) *(drupal.stackexchange.com · 2016-10-05T00:00:00)*
  > This is a bit adjacent to this specific question, but if folks land here from search engines looking for information on how to cache custom data, I&#x27;ve created a module to help with that: https://www.drupal.org/project/cache_register

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17429.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Mike Taylor Thu, 10 Sep 2026 07:33:43 -0700 LGTM - thanks! On 9/10/26 8:43 a.m...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 *Contact emails* [email&#160;pro...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: [blink-dev] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at ...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation Please ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add `&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 [agenda+] - #10327 Don&#x27;t cache HTTP errors in the module map (1 by hiros...

## 📚 Platform Documentation & Specifications

- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 8 planned queries — **11 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 90 item(s) inspected

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
