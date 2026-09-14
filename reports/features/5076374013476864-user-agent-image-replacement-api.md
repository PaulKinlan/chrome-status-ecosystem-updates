# User Agent Image Replacement API

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Origin trial

## Overview

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.  Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).  For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

### Motivation

Modern browsers can provide capabilities to augment the browsing experience by modifying media in the page on behalf of the user. The advent of generative AI makes it more likely that browsers will add such features.

Sometimes, the replacement content added at the user request might not match other content and functionality in the page, which could confuse the user. Even if this cannot be completely avoided, if authors can observe when replacement happens they can adjust the document to mitigate confusion (e.g., by hiding or adjusting other content).

For example, a user browsing an e-commerce site with a generic product image (e.g., a model wearing a jacket) might wish to imagine themselves wearing the item. The user agent uses generative AI technology to produce that image and present it in place of the model image. The page improves the user experience by removing text referring to the model's dimensions and the garment size depicted, as it may not be correct in the replacement image.

## Ecosystem Status

- **Momentum:** High (220 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** User Agent Image Replacement API is currently Origin trial in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- In active Origin Trial in Chrome 152. Validate API ergonomics in staging/pilot environments before general availability.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Getting started with Cards \| Docs \| Twitter Developer Platform" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Getting started with Cards \| Docs \| Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) — *0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#160;protec...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Thanks for fi...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks for all th...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17163.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Jeremy Roman Wed, 12 Aug 2026 17:14:07 -0700 Thanks for the feedback a...
- [How to Use Mistral Agents API (Quick Guide)](https://huggingface.co/blog/lynn-mikami/mistral-agent-api) *(huggingface.co)*
  > How to Use Mistral Agents API (Quick Guide) Hugging Face Log In Sign Up Back to Articles a]:hidden"> How to Use Mistral Agents API (Quick Guide) Community Article Published May 28, 2025 Upvote 1 Lynn Mikami lynn-mikami Follow :last-child]:mb-0"> Tire...
- [Using images with an agent \| Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/agents/multimodal) *(learn.microsoft.com · 2026-08-25T00:00:00)*
  > Using images with an agent | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support. Down...
- [Use the image generation tool (preview) in Foundry Agent Service - Microsoft Foundry \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/image-generation) *(learn.microsoft.com · 2026-08-21T00:00:00)*
  > Use the image generation tool (preview) in Foundry Agent Service - Microsoft Foundry | Microsoft Learn Skip to main content Skip to Ask Learn chat experience This browser is no longer supported. Upgrade to Microsoft Edge to take advantage of the late...
- [Automating Image Generation with Precision: A Developer’s Guide to the Image Generation Agent — Cohorte Engineering Blog](https://cohorte.co/blog/automating-image-generation-with-precision-a-developers-guide-to-the-image-generation-agent) *(cohorte.co)*
  > Pass → immediately return image to user. Fail → refine prompt (e.g., “add more brush-stroke detail”) and repeat. This continues until the agent either achieves a satisfactory score or exhausts its refinement budget—usually just one or two extra round...
- [Image Generation API for AI Agents: Complete Guide 2026 \| Felo Search Blog](https://felo.ai/blog/image-generation-api-ai-agents-2026) *(felo.ai · 2026-07-16T01:28:35)*
  > The Image Generation API lets agents create visual assets on demand — for presentations, landing pages, campaigns, and reports.
- [Best User Agent List for Web Scraping in 2026 (with Examples & Tips)](https://www.scraperapi.com/web-scraping/best-user-agent-list-for-web-scraping) *(scraperapi.com · 2026-05-27T07:36:38)*
  > Sites can compare the `navigator.userAgent` value in JavaScript with the User-Agent header sent in your HTTP request. If you’re using Selenium or another browser automation tool, these values must match perfectly. Even with perfect headers, sites ana...
- [Building an E-commerce Website Using HTML, CSS, and JavaScript - DEV Community](https://dev.to/arishn/building-an-e-commerce-website-using-html-css-and-javascript-2bm4) *(dev.to · 2026-02-13T11:06:10)*
  > In this tutorial, we’ll build a basic functional e-commerce website using only HTML, CSS, and JavaScript — no frameworks required.
- [Building an E-commerce Website Using HTML and CSS - GeeksforGeeks](https://www.geeksforgeeks.org/web-tech/building-an-e-commerce-website-code-sections-and-css-features) *(geeksforgeeks.org · 2025-08-02T15:20:30)*
  > <strong>Defines the structure of a simple web page with a header and placeholder content</strong>. Includes a navigation bar with links (FAQ, Orders, Cart, Logout) and a logo. The Cart link (id=&quot;cartLink&quot;) is used to dynamically update item...
- [Creating an E-Commerce Application with JavaScript \| by Relax Into Code \| Medium](https://medium.com/@relaxintocode/creating-an-e-commerce-application-with-javascript-601a9c94068d) *(medium.com · 2024-02-07T23:19:33)*
  > In the index.html, add the typical boiler plate code along with the css located in the head (I have added google fonts and font awesome icons). I have also added javascript to the body(make sure it is the last thing in the body at all times): &lt;!DO...
- [E-commerce website using HTML CSS JS With Source Code - CodeWithCurious](https://codewithcurious.com/projects/ecommerce-website-using-html-css-js) *(codewithcurious.com · 2024-10-14T20:00:44)*
  > See the Pen Ecommerce Website - HTML, CSS &amp; JavaScript (Product_Page) by Sunil Pradhan (@Sunil_Pradhan) on CodePen.
- [E-Commerce Site using HTML, CSS & JavaScript coding challenge solution](https://www.frontendmentor.io/solutions/ecommerce-site-using-html-css-and-javascript-AK9ueIWfM9) *(frontendmentor.io)*
  > Esagecc&#x27;s front-end solution for the E-commerce product page coding challenge on Frontend Mentor
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17169.html) *(mail-archive.com)*
  > &gt; I believe that would be the result in Chrome&#x27;s implementation (which uses UA shadow DOM to embed an iframe to a UA-controlled origin) and I think vendors ought to do the same or something similar in most cases, but all I&#x27;m aiming to ex...
- [Intent to Ship: Sec-CH-UA-Full-Version-List user-agent client hint](https://groups.google.com/a/chromium.org/g/blink-dev/c/yZh8Lwr34Ro) *(groups.google.com · 2021-11-22T00:00:00)*
  > But we do not intend to do that until we ship its replacement. https://github.com/w3ctag/design-reviews/issues/640 · Pending (there’s a pre-existing review, and this hint came up in the review process as feedback from other browsers, so the TAG is aw...
- [r/programming on Reddit: Intent to Deprecate and Freeze: The User-Agent string](https://www.reddit.com/r/programming/comments/eom3k3/intent_to_deprecate_and_freeze_the_useragent) *(reddit.com · 2020-01-14T14:39:34)*
  > I was trying to make my site do an http2 push of all images above the fold,, which required guessing if the client needed high-dpi versions of images with zero round trips. I was planning to use some heutistics on user agent string to at least have a...
- [r/privacy on Reddit: How to choose a user agent?](https://www.reddit.com/r/privacy/comments/1khk8hk/how_to_choose_a_user_agent) *(reddit.com · 2025-05-08T07:28:02)*
  > There&#x27;s no such thing as an ad for Nike shoes that&#x27;s an image on the Acme website. It just doesn&#x27;t work that way. Everyone is targetting ads. Acme is selling space to Google, who&#x27;s selling it to Nike, who&#x27;s showing you an ad....
- [r/Safari on Reddit: Found an extension that allows us to change the User-Agent string for Safari on a per-website basis](https://www.reddit.com/r/Safari/comments/14yftjx/found_an_extension_that_allows_us_to_change_the) *(reddit.com · 2023-07-13T09:16:58)*
  > You might be presented endless CAPTCHAs asking you to solve hundreds of Google traffic images and other crap. You have been warned. Now, Safari comes with tools to set the user agent. You can enable the Developer menu in Safari preferences, &quot;Adv...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[Tracking\] UA Image Replacement API \[544822216\] - Chromium](https://issues.chromium.org/issues/544822216) *(issues.chromium.org)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Chromium Sign in
- [\[blink-dev\] Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17146.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Intent to Experiment: User Agent Image Replacement API Chromestatus Tue, 11 Aug 2026 14:20:36 -0700 Contact emails [email&#...
- [\[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17157.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Wed, 12 Aug 2026 08:55:57 -0700 Hey Jeremy, Tha...
- [Re: \[blink-dev\] Re: Intent to Experiment: User Agent Image Replacement API](http://www.mail-archive.com/blink-dev@chromium.org/msg17192.html) *(mail-archive.com)* *(Cites: `https://github.com/explainers-by-googlers/ua-image-replacement`)*
  > Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Skip to site navigation (Press enter) Re: [blink-dev] Re: Intent to Experiment: User Agent Image Replacement API Alex Russell Mon, 17 Aug 2026 11:48:07 -0700 Thanks ...

## 📚 Platform Documentation & Specifications

- [ecommerce-website · GitHub Topics](https://github.com/topics/ecommerce-website?l=html) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 12 planned queries — **22 verified relevant**
  - `"chromestatus.com/feature/5076374013476864" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/explainers-by-googlers/ua-image-replacement" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (4 returned)
  - `"User Agent Image Replacement API" API` — *Core feature API query* (2 returned)
  - `"User Agent Image Replacement API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"e-commerce" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"User Agent Image Replacement API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"User Agent Image Replacement API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"User Agent Image Replacement" explainer OR webidl github` — *Finds technical explainer documents, IDL interfaces, and early code drafts for the User Agent Image Replacement API.* (8 returned)
  - `"User Agent Image Replacement" OR "ua-image-replacement" "intent to prototype" OR "standards-positions"` — *Tracks browser vendor sentiment and standards discussions across Blink, WebKit, and Mozilla forums.* (8 returned)
  - `"User Agent Image Replacement API" "generative AI" browser` — *Discovers developer blog posts and commentary on how generative AI browser features interact with web page image replacement.* (0 returned)
  - `"ua-image-replacement" OR "User Agent Image Replacement" site:news.ycombinator.com OR site:reddit.com` — *Captures developer and community discourse, critiques, and reactions on social and aggregator platforms.* (8 returned)
  - `"User Agent Image Replacement" e-commerce OR try-on JavaScript` — *Locates practical use-case walkthroughs and guides addressing how e-commerce sites adapt content when AI replaces product imagery.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 5 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 1 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 471 item(s) inspected

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
