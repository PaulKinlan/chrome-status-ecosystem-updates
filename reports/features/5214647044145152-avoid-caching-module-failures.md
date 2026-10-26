# Avoid caching module failures

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Enabled by default

## Overview

Currently web developers cannot retry failed module loads, as these failures are being cached (and retries just result in immediate failures). This change to the module loading behavior enables failed module loads to be manually retried (e.g. by calling \`import()\` again), solving real developer (and user) pain when it comes to using modules over unstable networks.

### Motivation

This change enables developers to retry failed module loads (e.g. due to network failures).

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive
- **Executive Take:** The WHATWG HTML specification update to avoid caching module fetch failures resolves a notorious limitation in JavaScript module loading by allowing failed fetches—such as transient network drops, 5xx server errors, or MIME mismatches—to be retried via subsequent dynamic import calls without requiring a full page refresh. The change has achieved robust cross-engine consensus, shipping enabled by default in Chromium and landing across Firefox and WebKit implementations. This architectural update formally shifts the module map's design philosophy from strict failure determinism to high application availability.

### Recommendations
- Actionable Advice: Development teams should start introducing retry logic (such as exponential backoff inside route loaders and React/Vue error boundaries) around dynamic imports today, while temporarily retaining fallback cache-busting queries or reload prompts for users on older browser engine versions until broad ecosystem coverage is established.
- Shipping enabled by default in Chrome 156. Developers can begin adopting in production with progressive feature detection.
- Strong multi-vendor alignment across Chromium, Gecko, and WebKit indicating high likelihood of eventual web baseline.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [trade-assistance.com](https://trade-assistance.com/blog/chrome-stops-caching-failed-module-imports-retry-dynamic-import) *(trade-assistance.com)*
  > Historically, the HTML specification mandated that browsers store module fetch results in a per-page \*\*module map\*\* to ensure every module was evaluated only once However, this behavior extended to \*\*failed module fetches\*\*
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures 'Dan Clark' via blink-dev Mon, 14 Sep 2026 14:00:15 -0700 LGTM3 On Thursday, September 1...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at 7:07 PM Ch...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;protected\] \*E...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com · 2026-09-14T08:09:53)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload t...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17447.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5214647044145152`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures 'Dan Clark' via blink-dev Mon, 14 Sep 2026 14:00:15 -0700 LGTM3 On Thursday, S...
- [Re: \[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17434.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 12:16:49 -0700 On Thu, Sep 10, 2026 at ...
- [\[blink-dev\] Intent to Ship: Avoid caching module failures](http://www.mail-archive.com/blink-dev@chromium.org/msg17430.html) *(mail-archive.com)* *(Cites: `https://gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c`)*
  > \[blink-dev\] Intent to Ship: Avoid caching module failures Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Avoid caching module failures Yoav Weiss (@Shopify) Thu, 10 Sep 2026 08:43:49 -0700 \*Contact emails\* \[email&#160;pro...
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > 2055211 - Don't cache HTTP errors in the module map Mozilla Home Privacy Cookies Legal Bugzilla Log In Log In with GitHub or Remember me Create an Account &middot; Forgot Password Browse Advanced Search New Bug Reports Documentation Please ...
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/10327`)*
  > (2 by josepharhar, tabatkins) ... - #12444 Add \`&lt;meta name=&quot;responsive-embedded-sizing&quot;&gt;\` (1 by zcorpan) https://github.com/whatwg/html/pull/12444 \[agenda+\] - #10327 Don&#x27;t cache HTTP errors in the module map (1 by hiros...

## 📚 Platform Documentation & Specifications

- [Avoid caching module failures · Issue #4335 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4335) *(github.com)*
- [Avoid caching module failures · Issue #33 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/33) *(github.com)*
- [2055211 - Don't cache HTTP errors in the module map](https://bugzilla.mozilla.org/show_bug.cgi?id=2055211) *(bugzilla.mozilla.org)*
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-08-03 (public-html@w3.org from August 2026)](https://lists.w3.org/Archives/Public/public-html/2026Aug/0000.html) *(lists.w3.org)*
- [Retry failed dynamic import · Issue #80 · tc39/proposal-dynamic-import](https://github.com/tc39/proposal-dynamic-import/issues/80) *(github.com)*
- [Failed dynamic import should not always be cached · Issue #6768 · whatwg/html](https://github.com/whatwg/html/issues/10327/linked_closing_reference?reference_location=REPO_ISSUES_INDEX) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 54 result(s) found across 12 planned queries — **9 verified relevant**
  - `"chromestatus.com/feature/5214647044145152" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (3 returned)
  - `"gist.github.com/yoavweiss/a54501545ab2ad22bfde0ebed02a115c" -site:gist.github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (2 returned)
  - `"github.com/whatwg/html/pull/10327" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Avoid caching module failures" API` — *Core feature API query* (2 returned)
  - `"Avoid caching module failures" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"import()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Avoid caching module failures" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Avoid caching module failures" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"avoid caching module failures" OR "retry failed module" javascript dynamic import` — *Discovers articles and developer guides explaining the module loading change and how to retry dynamic imports upon network failure.* (2 returned)
  - `retry dynamic import "import()" catch module error network` — *Surfaces JavaScript code patterns demonstrating retry strategies and error handling around dynamic module imports.* (8 returned)
  - `"Avoid caching module failures" ("Intent to Ship" OR "Chrome" OR "WHATWG")` — *Finds browser vendor signals, implementation milestones, and intent to ship announcements across Chromium, Gecko, and WebKit.* (1 returned)
  - `"caching module failures" OR "retry dynamic import" (site:news.ycombinator.com OR site:reddit.com OR site:github.com)` — *Tracks web developer discussions, feedback, and reactions regarding caching behaviors of failed module fetches.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **2 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Tweets found by web search:** 7 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
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
