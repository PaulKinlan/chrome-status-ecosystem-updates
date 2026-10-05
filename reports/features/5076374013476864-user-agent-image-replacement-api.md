# User Agent Image Replacement API

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.  Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).  For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

### Motivation

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.

Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).

For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

## Ecosystem Status

- **Momentum:** Moderate (50 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** The User Agent Image Replacement API is an experimental proposal entering Origin Trial in Chrome 152 through 157 that notifies web pages when browser-level generative AI features (such as virtual try-on or text translation) alter or replace image media. It exposes lifecycle events allowing developers to adjust surrounding UI—such as dismissing conflicting zoom overlays or model sizing details—to prevent user confusion. The API remains an early-stage sketch restricted to select Chrome pilot scenarios and lacks broader multi-engine consensus.

### Recommendations
- Actionable Advice: Treat this API purely as an experimental signal; e-commerce and media platforms testing generative AI integration can evaluate the Origin Trial in Chromium, but production workflows should rely on progressive enhancement and assume other engines will not expose these events.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#160;protec...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks for all th...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Thanks for fi...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17163.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Jeremy Roman Wed, 12 Aug 2026 17:14:07 -0700 Thanks for the feedback a...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks ...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Tha...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 36 result(s) found across 7 planned queries — **5 verified relevant**
  - `"chromestatus.com/feature/5076374013476864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/ua-image-replacement" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"User Agent Image Replacement API" API` — *Core feature API query* (2 returned)
  - `"User Agent Image Replacement API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"e-commerce" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"User Agent Image Replacement API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"User Agent Image Replacement API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 3 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 1 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 477 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5076374013476864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5076374013476864)
- [Specification](https://github.com/explainers-by-googlers/ua-image-replacement)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/544822216)
