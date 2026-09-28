# Avoid caching module failures

> **Report Week:** 2026-W40 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** High (300 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Avoid caching module failures is currently Enabled by default in Chrome 156. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG-jLKCBtW-XhKQ2Xb5r7uKrR5crqPZGP6GQUpehtSbBoLgveUdWGTkeUrTmw-lR4FJf4CfAAih78Njzj9EwXe-XCE_UIVjuT57ZTeb9fB_PgzdV1D-an88atskma8S2wU=) *(vertexaisearch.cloud.google.com)*
  > Failed dynamic import should not always be cached · Issue #6768 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refres...
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGs_w9eX92Io2-dSVtorKbJSIZGyAjMZSC269n8q8x0SlN8MV5T1NsEZ10Q1TB2V6-8pkPLhhJ1LHmdHBrPQAAMsYrEh3o2EBmDpS6b7i6-WvKQzUTw4OJGjVUAauIvErRpd735QGpMQBw23Gh0zMM=) *(vertexaisearch.cloud.google.com)*
  > Retry failed dynamic import · Issue #80 · tc39/proposal-dynamic-import · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh your ...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZ6X9xpG0hepCQ99Lq1ZZzliUnsZgHcRnAB5VFN5E2RAjz5l2ldZBEjSKjQKNKfHQeR0hU8UrNgw2x8g0038r4YJNxxRs7S57almApadoMGuABpW8ee6uY-nxBW3waHu5qWuBy6zfjB3PKyqri6BlOpwCDlZQ-GvTyUoUOQbYylFT55unNyL75n7LExpNG) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [laplusda.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE9Tkm0JJ1dHHKjuPqbm7IMcd9Nw2B4fptLnZGQbYW95G9lJ8K_jtdqBbMJ6lvXxoLoGp-r8sljo8Ch3DhUxh_lkpsy4BAIeL20Kcs28bdn2_ZtXBhgOFNZlVFbq9QpOvDEQDJ1e8qunrz6DxeNfgKOvcSnHowpnYc=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFhl2foSjv3qt9jUw5_WlJVDMYUvT4swh8dzRHQRQ1E6r3jxgj_-dGd7nqoix3YZ_Ow-E8KVdAy-_yWLZbqw1-wI2l8_VzUproySJYP8CmAtqwIpS8NplNd2mjvZhWcnwtBzvQZADZP) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [woowahan.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGr6sn1FVYu6IqPzgrHvCsCji87hKNdUEYgx8NW2BQ4yE3vSHb8jqMJsDxJEwmD1VPzRrqCNa9RNXPX5b8Us369fW4_3cpYQKeX0_i5M-XaOhLNV-5zTIigtmU=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEcgS4k_UbrR_FiA7TgFvSFR5NEV_EV4XrGwo30wn2KuW8R0QfLxER3ifw4nGYByV7lcxXA8eQZ7_E3b4Xy0l1EJDms0M0w8yTlKVZsU0t5t8Ly7F4ON488NJXPrua9WyjO6r7yMcg8) *(vertexaisearch.cloud.google.com)*
  > Chrome 155 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJHYpFusfzT_pdXUCz8Q0TKe-tsyvZIm5HTvfgJT_SG6KUPT0bQsoalJ2yWugsLNPnIoUuB8WFE9nxNP3cofNXgdKpomM0HdEx5a5If0k6e_b7Za7ncgtRS9hB4XkRhQmpi7ZeExAl) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQ1KqCq-jkROaJ6dxuYHmUv7e-wlU5acSKBHCJa-D5QS3gU4WNSr7APTklaTOQCouiFw0cZKX5x1NmhlzzwUjQoBCXszplgyyPJlnWh87zuR-AztDJtZ2TTHZiK5doB2RAdEIhei5yk0eJjEqZoWgRHmlIB9SKjRw=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEoe4HSsxfEkBmoAYUbczR05hWIpQJslca2DQopU2ICRS3ExK_rm1zkGcKJAS7KhjgvFslKngP2n7J2hl1qBX0MT68eWI-dgFwo0_TMepBV) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [chromium.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHr2OKozOWRR-TZ_afOg98rnqfpgrrXB7CBZL8-CPKNBIp2KZoeSA9tEaupJFs9wklO3cYJ4svKbfUswqPGaAkyTvKQN7hAfvNCvGstCwFdu30kgPlSLlvzVLi4adB7OngQgw==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF3r76JvtlCJMsGYQ_ZsisznXPO5Fd5hmwHNak4z2h7N9hdRmdguh3FIN9qJKWSfh1eaQqS382VCXKVJ1bY5-fgogSsjgMO2T-6W5HPY1vBH8WCI7fs31mFRX3-4TSmhj4=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [sentry.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE77OykdPLDGtg23-xk11kEWsgUYtur_ZpS3bySmlP9O_g0mV2oolz-1YJ6eBGBF2GuL0_hdijGXa8jFFPrJ3a7gZctIdD6TAoyEHYxC3iJbs-MtTCWlu67AKfvutpJGW4_Z6cevqSpGP2z9MREKgXZ5IDIHX3XO4LDkKTTdKHpwSStNjUV) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGOF9HozbE7TW7d3KCWEX-78u3U2YC_Tk1TfIviMdYbLVvDbQ_CLycFsUtqogYJ-WZFiGogM6X9f5nIUIgI1mz5OTY8XiqMQViBU7NXZWQNT9eApCoFt4eUJIZT__ibtAjn53c1rywsGznxDwfJNO8Avm1fhniWv4pWoCWiuuS6C_RWm633tF9x) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [biomousavi.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWCl7Bd5DfqPdfoE-9F-Ai-4V6UOILVr5Jl9GVA9H3tASMnD8LjXUblLsjfVk3uYXEhPwMBsvZSXFgsMKEt7r7IX0rz3jncAXNAXrFyeT6-aniKj0NwBapLaZK5A1e8T1HH0WfWorBfjonR-rudICS7aqmcUWE0cgi4gSoqutwCPcl8-UDzn0kJ1xbj0EWvflMWZybLH8zRr0=) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [module-federation.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGu-_U_DEeevMSPe9thVp9VdqTQSjK3xqMkiIDe8IT0mzZk_LAqatBWltKu83T7JogAlfi6YDZYdGvKmC47OxFLcsZ-fFj3ccoQWmT1l3vxB6RHRMWDFATDeoGws4Lg4oQF5IyYSmIOsAMQsu7ZT05kOyBh13sVCt0rH3A_IcbPu0Q1AQ==) *(vertexaisearch.cloud.google.com)*
  > ### Feature Summary: "Avoid Caching Module Failures"  In the original WHATWG HTML specification, when a JavaScript module fetch failed (such as a temporary network hiccup or a transient HTTP error during a dynamic `import()`), the browser recorded a
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5214647044145152</strong>?gate=6129672218869760 &gt;&gt;&gt; &gt;&gt;&gt; This intent...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > &gt;&gt; On 9/10/26 8:43 a.m., Yoav Weiss (@Shopify) wrote: &gt;&gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c &gt;&gt; &gt;&gt; *Spe...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > *Contact emails* [email protected] *Explainer* https://<strong>gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c</strong>
- [Caching Guide - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/current/caching.html) *(httpd.apache.org)*
  > Modules | Directives | FAQ | Glossary | Sitemap | Report a bug ... This document supplements the mod_cache, mod_cache_disk, mod_file_cache and htcacheclean reference documentation. It describes how to use the Apache HTTP Server&#x27;s caching feature...
- [Disabling and debugging caching \| Development tools \| Drupal Wiki guide on Drupal.org](https://www.drupal.org/docs/develop/development-tools/disabling-and-debugging-caching) *(drupal.org · 2025-12-17T12:21:36)*
  > <strong>Open Developer Tools (F12) --&gt; Network --&gt; Disable Cache (toggle).</strong> Tested in Chrome, Firefox and Brave. You can install the Mix module, and switch between Dev/Prod mode by toggling the &quot;Enable development mode&quot; checkb...
- [How to Implement Cache Failover](https://oneuptime.com/blog/post/2026-01-30-cache-failover/view) *(oneuptime.com · 2026-01-30T00:00:00)*
  > <strong>Build your cache layer with the assumption that it will fail</strong>. Implement multiple tiers of caching so that local caches can absorb load during remote cache outages. Use circuit breakers to prevent cascading failures and protect your b...
- [Mastering Caching: Strategies, Patterns & Pitfalls — bool.dev](https://bool.dev/blog/detail/mastering-caching-strategies-patterns-pitfalls) *(bool.dev · 2025-03-28T00:00:00)*
  > A social media app caches user profiles. When a profile is requested, the app first checks the cache. If it isn&#x27;t found, the app retrieves it from the database, caches it, and serves subsequent requests quickly. ... You have large data volumes a...
- [Fixing Caching Errors: A Developer's Guide](https://runninghill.co.za/blog/cache-me-if-you-can-how-caching-goes-wrong-and-how-to-fix-it) *(runninghill.co.za · 2025-05-26T00:00:00)*
  > Potential for cascading failures as downstream services time out. What it is: <strong>This problem arises when requests are made for data that does not exist in the cache and also does not exist in the primary data store</strong>.
- [How To Configure Content Caching Using Apache Modules On A VPS \| DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-configure-content-caching-using-apache-modules-on-a-vps) *(digitalocean.com · 2013-08-16T23:40:38)*
  > The second directive, CacheLockMaxAge, is used to establish the longest time in seconds that a lock file will be considered valid. This is important in case there is a failure or an abnormal delay in refreshing a resource.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > 🔗 https://<strong>chromestatus.com/feature/5214647044145152</strong>
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > &gt;&gt;&gt; *No information provided* &gt;&gt;&gt; &gt;&gt;&gt; *Link to entry on the Chrome Platform Status* &gt;&gt;&gt; https://<strong>chromestatus.com/feature/5214647044145152</strong>?gate=6129672218869760 &gt;&gt;&gt; &gt;&gt;&gt; T...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > &gt;&gt; On 9/10/26 8:43 a.m., Yoav Weiss (@Shopify) wrote: &gt;&gt; &gt;&gt; *Contact emails* &gt;&gt; [email protected] &gt;&gt; &gt;&gt; *Explainer* &gt;&gt; https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c &gt;&gt; &gt...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > *Contact emails* [email protected] *Explainer* https://<strong>gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c</strong>
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > https://<strong>github.com/whatwg/html/pull/10327</strong> fixes that. Browsers should implement that change · The Bugbug bot thinks this bug should belong to the &#x27;Core::Networking&#x27; component, and is moving the bug to that compone...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add `&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 [agenda+] - #10327 Don&#x27;t cache HTTP errors in the module map (1 by hiros...

## 📚 Platform Documentation & Specifications

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [import() - JavaScript - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 39 result(s) found across 8 planned queries — **14 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 16 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 90 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5214647044145152)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5214647044145152)
- [Specification](https://github.com/whatwg/html/pull/10327)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/534781954)
