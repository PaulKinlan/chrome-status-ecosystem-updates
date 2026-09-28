# User Agent Image Replacement API

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.  Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).  For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

### Motivation

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.

Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).

For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

## Ecosystem Status

- **Momentum:** High (80 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The User Agent Image Replacement API is an observational mechanism introduced by Google and entering Origin Trial in Chromium browsers (Chrome and Edge 152 to 157). It allows web applications to detect when built-in browser generative AI features alter or replace page media—such as virtual try-on tools replacing apparel images—enabling authors to hide or adjust conflicting page context like model sizing text. The feature is currently Chromium-specific and incubated within early Google explainers, with no formal standard in WHATWG or W3C yet.

### Recommendations
- Actionable Advice: Web teams should treat this API as strictly experimental and avoid shipping production dependencies until cross-browser consensus emerges. E-commerce and media-heavy sites experiencing automated browser image substitutions should test the Origin Trial in Chrome/Edge 152+ to evaluate whether the provided callbacks are sufficient to mitigate visual or descriptive discrepancies.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [microsoft.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFRFNBS8ejqRA2YbRc9jcEIwtrR6bmTIdmvU1hXXpD70cRzpM7620V0fgNxp9iXHFY7ypqmh292c0YBAB_uw8lPcAuoE0wGl09mdQnXx34b1hqvTGNEhci9fQh6z_U-jN6EaulLvRYDIR1uvdFD9s4jO41WNVbK6lXodOUqBwc7Nn0Gaw_bjzaYmEJYZMilhEPM3KnSs74BF0Wzf95pBA==) *(vertexaisearch.cloud.google.com)*
  > Microsoft Edge Origin Trials Skip to main content Sign-in to GitHub User Agent Image Replacement API Provides an API for web developers to observe when particular Chrome browser features cause images in the page content to be replaced. Note that thes...
- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)*
  > https://github.com/explainers-... and possibly shipped as needed, <strong>an API to allow pages to adapt when a user agent feature augments the page by generating an edited version of an image in a page and displays it in place of that image</strong>...
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)*
  > Origin Trial documentation link https://<strong>github.com/explainers-by-googlers/ua-image-replacement</strong> Risks Interoperability and Compatibility No information provided Gecko: No signal WebKit: No signal Web developers: No signals Other signa...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Alex &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tuesday, August 11, 2026 at 2:20:39 PM UTC-7 Chromestatus wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *Contact emails* &gt;&...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)*
  > Best, Alex On Tuesday, August 11, 2026 at 2:20:39 PM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/ua-image-replacement</strong> &gt; &gt; *Specific...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17163.html) *(mail-archive.com)*
  > The page improves the user experience by removing text &gt;&gt; referring to the model&#x27;s dimensions and the garment size depicted, as it &gt;&gt; may not be correct in the replacement image. &gt;&gt; &gt;&gt; *Blink component* &gt;&gt; Blink&gt;...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17164.html) *(mail-archive.com)*
  > If additional or different API &gt;&gt;&gt; is required to adapt appropriately, we&#x27;d like to know that sooner rather &gt;&gt;&gt; than later, especially if the changes required are not purely additive. &gt;&gt;&gt; &gt;&gt;&gt; *Origin Trial doc...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17169.html) *(mail-archive.com)*
  > bility* &gt;&gt;&gt;&gt; *No information provided* ...40823760896 &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; This intent message was generated by Chrome Platform Status &gt;&gt;&gt;&gt; &lt;https://chromestatus.com&gt;. &gt;&gt;&gt;&gt; &gt;&gt;&gt; -- &gt;&g...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > https://github.com/explainers-... and possibly shipped as needed, <strong>an API to allow pages to adapt when a user agent feature augments the page by generating an edited version of an image in a page and displays it in place of that imag...
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Origin Trial documentation link https://<strong>github.com/explainers-by-googlers/ua-image-replacement</strong> Risks Interoperability and Compatibility No information provided Gecko: No signal WebKit: No signal Web developers: No signals O...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > &gt;&gt;&gt; &gt;&gt;&gt; &gt;&gt;&gt;&gt; Best, &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Alex &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; On Tuesday, August 11, 2026 at 2:20:39 PM UTC-7 Chromestatus wrote: &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; *Contact ema...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Best, Alex On Tuesday, August 11, 2026 at 2:20:39 PM UTC-7 Chromestatus wrote: &gt; *Contact emails* &gt; [email protected] &gt; &gt; *Explainer* &gt; https://<strong>github.com/explainers-by-googlers/ua-image-replacement</strong> &gt; &gt;...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 64 result(s) found across 12 planned queries — **7 verified relevant**
  - `"chromestatus.com/feature/5076374013476864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/ua-image-replacement" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"User Agent Image Replacement API" API` — *Core feature API query* (2 returned)
  - `"User Agent Image Replacement API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"e-commerce" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"User Agent Image Replacement API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"User Agent Image Replacement API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"User Agent Image Replacement API" OR "ua-image-replacement" (explainer OR tutorial OR blog)` — *Discover introductory guides, overview articles, and developer breakdowns of the User Agent Image Replacement proposal.* (8 returned)
  - `"ua-image-replacement" OR "User Agent Image Replacement" (WebIDL OR "addEventListener" OR interface OR HTMLImageElement)` — *Search for code snippets, proposed WebIDL interfaces, and JavaScript event models for detecting image modifications.* (8 returned)
  - `"ua-image-replacement" (site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR "standards position")` — *Track other browser vendors' assessments, support, or pushback regarding UA-driven image replacement.* (1 returned)
  - `"User Agent Image Replacement" ("blink-dev" OR "intent to prototype" OR "chromestatus")` — *Find official Chromium Blink-dev discussions, Intent to Prototype announcements, and feature tracking.* (8 returned)
  - `"User Agent Image Replacement" ("generative AI" OR "try-on") (site:news.ycombinator.com OR site:reddit.com OR twitter.com OR bsky.app)` — *Monitor developer sentiment and community reactions regarding generative AI modifications directly inside web browsers.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 8 result(s) found — **1 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
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
