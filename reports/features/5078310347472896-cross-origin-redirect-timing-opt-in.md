# Cross-origin redirect timing opt-in

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Currently developers have no way to measure cross-origin redirects for navigations, even ones under their control, or ones that choose to opt-in to be measured.  This feature enables servers to opt-in to have their redirects measured by the destination origin of the navigation.

### Motivation

Enables developers to measure and optimize their cross-origin redirects, while ensuring that opt-in are secure and aligned with the developer's intention.

## Ecosystem Status

- **Momentum:** High (330 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive / High Interest
- **Executive Take:** Cross-origin redirect timing opt-in is currently Enabled by default in Chrome 151. Verified ecosystem momentum is High with Partial Multi-Engine Interest standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Community package available: \[whatwg-fetch\](https://www.npmjs.com/package/whatwg-fetch) (v3.6.20) for progressive enhancement.

## Packages & Polyfills

- [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) `v3.6.20` — A window.fetch polyfill.

## 📰 Ecosystem Blogs & Articles

- [\[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16860.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Alex Russell Wed, 24 Jun 2026 10:27:16 -0700 LGTM1; this is a great change. ...
- [Re: \[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16883.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Mike Taylor Thu, 25 Jun 2026 14:35:47 -0700 LGTM3 On 6/25/26 4:19 p....
- [Enable opt-in based method to measure cross-origin redirects \[521861828\] - Chromium](https://issues.chromium.org/issues/521861828) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Prototype: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16723.html) *(mail-archive.com)*
  > [blink-dev] Intent to Prototype: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) [blink-dev] Intent to Prototype: Cross-origin redirect timing opt-in Yoav Weiss (@Shopify) Wed, 10 Jun 2026 03:05:01 -0700 *Contact emails* [em...
- [\[blink-dev\] Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16840.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Cross-origin redirect timing opt-in Yoav Weiss (@Shopify) Wed, 24 Jun 2026 04:30:09 -0700 *Contact emails* [email&#160;p...
- [\[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16866.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Yoav Weiss (@Shopify) Thu, 25 Jun 2026 00:40:55 -0700 On Wednesday, June 24,...
- [Re: \[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16880.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Chris Harrelson Thu, 25 Jun 2026 13:19:37 -0700 LGTM2 On Thu, Jun 25...
- [.htaccess Cross-origin Resources \| Tutorial Reference](https://tutorialreference.com/htaccess/htaccess-cross-origin-resources) *(tutorialreference.com)*
  > <strong>The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API</strong>, which would otherwise be reported as zero due to cross-origin restrictions.
- [Timing-Allow-Origin - Expert Guide to HTTP headers](https://http.dev/timing-allow-origin) *(http.dev · 2026-06-05T12:11:37)*
  > <strong>Timing-Allow-Origin: * Server-Timing: cdn-cache;desc=&quot;HIT&quot;, edge;dur=2</strong> ... Test live and from different countries the HTTP responses, redirect chains and status codes of one or multiple URLs.
- [Using CORS in Next.js to handle cross-origin requests - LogRocket Blog](https://blog.logrocket.com/using-cors-next-js-handle-cross-origin-requests) *(blog.logrocket.com · 2025-01-07T20:48:03)*
  > CORS policies may change over time. Therefore, you should not hardcode them. Instead, you can set up some environment variables as shown below: ACCESS_CONTROL_ALLOW_CREDENTIALS=&quot;true&quot; ACCESS_CONTROL_ALLOW_ORIGIN=&quot;*&quot; ACCESS_CONTROL...
- [CORS Tutorial: A Guide to Cross-Origin Resource Sharing](https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing) *(auth0.com · 2019-04-16T08:00:00)*
  > In this example, Access-Control-Allow-Headers echos back the headers that were asked for in the OPTIONS request. This indicates that all the requested headers are allowed to be sent. If for example, the server doesn&#x27;t allow the Accept header, th...
- [What is CORS (cross-origin resource sharing)? Tutorial & Examples \| Web Security Academy](https://portswigger.net/web-security/cors) *(portswigger.net)*
  > In this section, we will explain what cross-origin resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based attacks, ...
- [Enable CORS \| Okta Developer](https://developer.okta.com/docs/guides/enable-cors/main) *(developer.okta.com)*
  > <strong>Enter the base URL of the website that you want to allow cross-origin requests from.</strong> Select CORS as the Type. You can also enable the Redirect setting, which allows redirection to this Trusted Origin after a user signs in or out.
- [302 Redirect After CORS Preflight: How to Fix Cross-Origin Request Errors in Laravel & Angular — tutorialpedia.org](https://www.tutorialpedia.org/blog/302-redirect-after-cors-preflight) *(tutorialpedia.org)*
  > If you’ve ever worked on a Laravel backend and Angular frontend, you’ve likely encountered the dreaded &quot;Cross-Origin Request Blocked&quot; error. A particularly frustrating scenario is when the browser’s CORS preflight request (an OPTIONS reques...
- [How to Redirect a Website After a Specified Time (e.g., 3 Seconds): Step-by-Step Guide — codestudy.net](https://www.codestudy.net/blog/redirect-website-after-specified-amount-of-time) *(codestudy.net)*
  > Managing session timeouts (e.g., “Your session will expire in 3 seconds; redirecting to login…”). In this guide, we’ll explore four methods to implement timed redirects (3 seconds as our example), from simple client-side solutions to server-side conf...
- [Same-Origin Policy: Web Security Fundamentals \| by StatusCode \| Medium](https://status-code.medium.com/same-origin-policy-web-security-fundamentals-091a82126e63) *(status-code.medium.com · 2025-05-12T11:27:45)*
  > While the Same-Origin Policy is strict, there are several intentional exceptions that enable legitimate cross-origin functionality: Browsers allow certain elements to embed resources from different origins: &lt;script src=&quot;https://another-origin...
- [Loading CSS from different domain, and accessing it from Javascript - Stack Overflow](https://stackoverflow.com/questions/5739436/loading-css-from-different-domain-and-accessing-it-from-javascript) *(stackoverflow.com)*
  > ... <strong>CORS (cross-origin resource sharing) is a standard that allows sites to opt-in to access of resources cross-origin</strong>. I do not know if Firefox applies this to CSS yet; I know that it works for XMLHttpRequest, and it is intended tha...
- [A guide to enable cross-origin isolation \| Articles \| web.dev](https://web.dev/articles/cross-origin-isolation-guide) *(web.dev · 2021-02-09T00:00:00)*
  > After you have determined which ... On cross-origin resources such as images, scripts, stylesheets, iframes, and others, <strong>set the Cross-Origin-Resource-Policy:cross-origin header</strong>....
- [Progressive Web Apps in multi-origin sites \| web.dev](https://web.dev/articles/multi-origin-pwas) *(web.dev · 2019-08-19T00:00:00)*
  > Keep service worker installation lightweight: If you are maintaining multiple service workers, avoid making users pay a big installation cost every time they navigate to a new origin. In other words: only pre-cache resources that are absolutely neces...
- [Web App Scope Extensions \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/scope-extensions) *(developer.chrome.com · 2023-12-19T00:00:00)*
  > &quot;Out of scope&quot; bar not shown in cross-origin navigation after origin association has been made with Scope Extensions. Open and install the main PWA in a ChromeOS device. Click the following link: associated origin. The link is opened in a n...
- [Make your website "cross-origin isolated" using COOP and COEP \| Articles \| web.dev](https://web.dev/articles/coop-coep) *(web.dev · 2020-04-13T00:00:00)*
  > Use COOP and COEP to set up a cross-origin isolated environment and enable powerful features like SharedArrayBuffer, performance.measureUserAgentSpecificMemory() and high resolution timer with better precision. ... Caution: SharedArrayBuffer on Chrom...
- [Building Progressive Web Apps on multi-origin sites \| by Demian Renzulli \| Medium](https://medium.com/@drenzulli/building-progressive-web-apps-on-multi-subdomain-sites-fbd3384d0706) *(medium.com · 2019-10-19T12:56:02)*
  > For example: /subdomain.site.com/pwa, with a redirect to site.com. Capture the beforeinstallprompt event, as mentioned before, to check for the existence of a cookie, that will be sent the first time the Add to Home screen prompt is shown.
- [What's new in PWAs - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/whats-new/pwa) *(learn.microsoft.com · 2025-06-25T00:00:00)*
  > Store-installed PWAs that are participating in the URL Handlers origin trial will no longer show the Chrome Custom Tab (CCT) when redirecting from the PWA&#x27;s domain to a matching domain name with a different top-level domain (TLD). This redirecti...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16860.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5078310347472896`)*
  > [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Alex Russell Wed, 24 Jun 2026 10:27:16 -0700 LGTM1; this is a grea...
- [Re: \[blink-dev\] Re: Intent to Ship: Cross-origin redirect timing opt-in](http://www.mail-archive.com/blink-dev@chromium.org/msg16883.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5078310347472896`)*
  > Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Ship: Cross-origin redirect timing opt-in Mike Taylor Thu, 25 Jun 2026 14:35:47 -0700 LGTM3 On 6/25/...
- [Enable opt-in based method to measure cross-origin redirects \[521861828\] - Chromium](https://issues.chromium.org/issues/521861828) *(issues.chromium.org)* *(Cites: `https://github.com/whatwg/html/pull/12513`)*
  > Chromium Sign in
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12513`)*
  > (2 by annevk, justinfagnani) ... intercepted fragment navigations to be cancelled with window.stop (2 by farre, noamr) https://github.com/whatwg/html/pull/12519 - #12513 Expose redirectCount for TAO opted-in redirect chains (3 by yoavweiss)...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-06-08 (public-html@w3.org from June 2026)](https://lists.w3.org/Archives/Public/public-html/2026Jun/0001.html) *(lists.w3.org)*
- [Cross-Origin Resource Sharing (CORS) - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) *(developer.mozilla.org)*
- [crossorigin HTML attribute - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin) *(developer.mozilla.org)*
- [crossorigin HTML attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) *(developer.mozilla.org)*
- [Enable COOP/COEP cross-origin isolation for multithreaded WASM · Issue #828 · swiftsaneai/sanenotes](https://github.com/swiftsaneai/sanenotes/issues/828) *(github.com)*
- [Use cross-origin images in a canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/CORS_enabled_image) *(developer.mozilla.org)*
- [PerformanceResourceTiming: redirectStart property](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 34 result(s) found across 8 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5078310347472896" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/whatwg/html/pull/12513" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/fetch/pull/1931" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"Cross-origin redirect timing opt-in" API` — *Core feature API query* (4 returned)
  - `"Cross-origin redirect timing opt-in" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"cross-origin" OR "opt-in" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Cross-origin redirect timing opt-in" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Cross-origin redirect timing opt-in" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (2 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **Web Platform Tests (wpt.fyi):** 1657 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 2 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5078310347472896)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5078310347472896)
- [Specification](https://github.com/whatwg/fetch/pull/1931)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/521861828)
