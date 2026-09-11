# User Agent Image Replacement API

> **Report Week:** 2026-W37 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.

Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).

For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

### Motivation

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.

Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).

For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

## Ecosystem Status

- **Momentum:** High (120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** The User Agent Image Replacement API is an emerging Blink initiative entering an Origin Trial in Chrome 152 to notify web applications when a browser alters or replaces on-page media via user-initiated tools like generative AI. It primarily targets e-commerce scenarios—such as virtual try-on features—allowing sites to adjust adjacent metadata and descriptions when an image is swapped. However, the proposal remains incubating within Google explainers and has yet to achieve multi-engine consensus or formal standardization.

### Recommendations
- Actionable Advice: Web development teams should take a wait-and-see approach unless participating directly in e-commerce Origin Trial pilots for Chrome 152. If testing image replacement events, ensure all logic is wrapped in strict feature detection without blocking core DOM interactions or rendering.
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#160;protec...
- [Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks for all th...
- [[blink-dev] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Thanks for fi...
- [User-Agent Client Hints Explained: The Replacement for the UA String | HackMyIP](https://hackmyip.com/sheets/what-are-user-agent-client-hints) *(hackmyip.com · 2026-04-30T00:00:00)*
  > User-Agent Client Hints Explained: The Replacement for the UA String | HackMyIP Skip to content HackMyIP Account EN 简 繁 &larr; back to sheets User-Agent Client Hints Explained: The Replacement for the UA String ~/sheets/what-are-user-agent-client-hin...
- [Using images with an agent | Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/tutorials/agents/images) *(learn.microsoft.com · 2026-02-03T00:00:00)*
  > Using images with an agent | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support. Down...
- [Use the image generation tool (preview) in Foundry Agent Service - Microsoft Foundry | Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation) *(learn.microsoft.com · 2026-08-21T00:00:00)*
  > <strong>The image generation tool in Microsoft Foundry Agent Service generates images from text prompts in conversations and multistep workflows</strong>.
- [javascript - HTML - How to show different image in different user agents? - Stack Overflow](https://stackoverflow.com/questions/29066555/html-how-to-show-different-image-in-different-user-agents) *(stackoverflow.com · 2015-03-16T00:00:00)*
  > navigator.browsercheck= (function(){ var ua= navigator.userAgent, tem, M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; if(/trident/i.test(M[1])){ tem= /\brv[ :]+(\d+)/g.exec(ua) || []; return &#x27;IE &#x27;+(tem[1]...
- [HTMLImageElement.loading - Web APIs | MDN](https://mdn2.netlify.app/en-us/docs/web/api/htmlimageelement/loading) *(mdn2.netlify.app · 2022-03-29T00:00:00)*
  > The HTMLImageElement property loading is <strong>a string whose value provides a hint to the user agent on how to handle the loading of the image which is currently outside the window&#x27;s visual viewport</strong>.
- [r/privacy on Reddit: How to choose a user agent?](https://www.reddit.com/r/privacy/comments/1khk8hk/how_to_choose_a_user_agent) *(reddit.com · 2025-05-08T07:28:02)*
  > There&#x27;s no such thing as an ad for Nike shoes that&#x27;s an image on the Acme website. It just doesn&#x27;t work that way. Everyone is targetting ads. Acme is selling space to Google, who&#x27;s selling it to Nike, who&#x27;s showing you an ad....
- [r/programming on Reddit: Intent to Deprecate and Freeze: The User-Agent string](https://www.reddit.com/r/programming/comments/eom3k3/intent_to_deprecate_and_freeze_the_useragent) *(reddit.com · 2020-01-14T14:39:34)*
  > I was trying to make my site do an http2 push of all images above the fold,, which required guessing if the client needed high-dpi versions of images with zero round trips. I was planning to use some heutistics on user agent string to at least have a...
- [r/Safari on Reddit: Found an extension that allows us to change the User-Agent string for Safari on a per-website basis](https://www.reddit.com/r/Safari/comments/14yftjx/found_an_extension_that_allows_us_to_change_the) *(reddit.com · 2023-07-13T09:16:58)*
  > You might be presented endless CAPTCHAs asking you to solve hundreds of Google traffic images and other crap. You have been warned. Now, Safari comes with tools to set the user agent. You can enable the Developer menu in Safari preferences, &quot;Adv...
- [r/webscraping on Reddit: User agents? Any resources?](https://www.reddit.com/r/webscraping/comments/17sh8xs/user_agents_any_resources) *(reddit.com · 2023-11-10T23:42:23)*
  > Or you can use browser automation through puppeteer/playwright, then intercept and save all images to files.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#...
- [Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks ...
- [[blink-dev] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Tha...

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 35 result(s) found across 6 planned queries — **12 verified relevant**
  - `"chromestatus.com/feature/5076374013476864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/ua-image-replacement" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"User Agent Image Replacement" OR "ua-image-replacement" (explainer OR tutorial OR overview)` — *Find developer guides, high-level explainers, and introductory articles about the proposed browser image replacement feature.* (8 returned)
  - `"ua-image-replacement" OR "User Agent Image Replacement API" (WebIDL OR javascript OR "HTMLImageElement" OR "event")` — *Locate WebIDL interface definitions, DOM event specifications, and JavaScript usage patterns for observing image replacement.* (8 returned)
  - `"User Agent Image Replacement" ("standards-positions" OR "intent to prototype" OR site:chromestatus.com)` — *Check multi-engine browser vendor consensus, Mozilla/WebKit standards positions, and Chromium implementation milestones.* (8 returned)
  - `"ua-image-replacement" OR "User Agent Image Replacement" (site:news.ycombinator.com OR site:reddit.com OR site:github.com/WICG)` — *Uncover developer sentiment, privacy/UX concerns, and community debates on browser-driven generative AI image replacements.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5076374013476864)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5076374013476864)
- [Specification](https://github.com/explainers-by-googlers/ua-image-replacement)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/544822216)
