# Parse processing instructions in HTML

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** Enabled by default

## Overview

Processing instructions (syntax: <?target data>) are an existing DOM construct, exposed in XML, that allows node objects that are not elements but can have some semantic meaning for the processing of a document.

Processing instructions are parsed by the HTML parser, and receive an attribute API similar to elements to mutate their data.

### Motivation

The work on out of order streaming showed that defining declarative ranges with elements is insufficient, and there's need to be a "lighter" declarative way to denote ranges, that doesn't e.g. affect CSS relationships.

This seems to unlock some future use-cases, such as declaratively denoting CSS custom highlights, and controlling the streaming/buffering of an HTML response.

## Ecosystem Status

- **Momentum:** High (170 points)
- **Standards Alignment:** Multi-Engine Consensus
- **Sentiment:** Positive / High Interest
- **Executive Take:** Parse processing instructions in HTML is currently Enabled by default in Chrome 150. Verified ecosystem momentum is High with Multi-Engine Consensus standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 150. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @noamr: "> Colleagues and I are quite happy with how this turned out, in particular the revival of processing instructions to solve the long-standing marker is..."
- Standards Activity (Mozilla): Latest discussion from @hsivonen: "I suggest positive for this.  (From the implementation perspective, I don't like it that this can cause insertions before a marker instead of just app..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Out of order streaming](https://github.com/WebKit/standards-positions/issues/628) [closed]
- **Mozilla:** [Out of order streaming](https://github.com/mozilla/standards-positions/issues/1369) [closed]

## 📰 Ecosystem Blogs & Articles

- [[blink-dev] Ready for Developer Testing: Declarative Document Patching](http://www.mail-archive.com/blink-dev@chromium.org/msg16160.html) *(mail-archive.com)*
  > [blink-dev] Ready for Developer Testing: Declarative Document Patching Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Declarative Document Patching Chromestatus Tue, 24 Mar 2026 04:57:54 -0700 Contact emails [email&#16...
- [[blink-dev] Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16589.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Out of order streaming Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Out of order streaming Noam Rosenthal Tue, 26 May 2026 07:16:38 -0700 Contact emails [email&#160;protected] , [email&#160;protected] ...
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16230.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML Mike Taylor Wed, 01 Apr 2026 07:31:05 -0700 Is there any fuz...
- [[blink-dev] Re: Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16599.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Out of order streaming Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Out of order streaming Yoav Weiss (@Shopify) Tue, 26 May 2026 13:38:52 -0700 LGTM2 On Tue, May 26, 2026 at 8:41 PM Alex Russe...
- [Parse processing instructions in HTML [481087638] - Chromium](https://issues.chromium.org/issues/481087638) *(issues.chromium.org)*
  > Chromium Sign in
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16240.html) *(mail-archive.com)*
  > &gt; &gt;&gt; On 3/31/26 7:34 a.m., Chromestatus ...ative-partial-updates/blob/main/patching-explainer.md#proposed-markup &gt;&gt; &gt;&gt; *Specification* &gt;&gt; https://<strong>github.com/whatwg/html/pull/12118</strong> &gt;&gt; &gt;&gt; *Summary...
- [[blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16220.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup Specification https://github.com/whatwg/html/pull/12118 Summary Processing instructions (syntax: &lt;?target data&gt;) are <strong>an existi...
- [[blink-dev] Intent to Prototype: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg15714.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup Specification https://github.com/whatwg/html/pull/12118 Summary Processing instructions (syntax: &lt;?target data&gt;) are <strong>an existi...
- [How to parse HTML in Python: A step-by-step guide for beginners | ScrapingBee](https://www.scrapingbee.com/blog/python-html-parsers) *(scrapingbee.com · 2026-01-16T00:00:00)*
  > It can jump to the title, loop through links, or pull out one specific element you care about. But there&#x27;s still one more layer: you have to tell your parser what you want. That&#x27;s where selectors and queries come in. They&#x27;re the &quot;...
- [How to Efficiently Parse HTML in Python? [+Examples]](https://www.index.dev/blog/parsing-html-using-python-guide) *(index.dev)*
  > However, for larger projects or speedier processing, lxml may be a better option. Let&#x27;s set up the environment first before we start writing code. First, you must install the essential libraries. You can easily achieve this with pip. ... This wi...
- [Use Cases of JavaScript](https://www.linkedin.com/pulse/use-cases-javascript-deepali-mishra) *(linkedin.com · 2021-06-19T10:44:52)*
  > Even if the user is not aware of programming language then they can easily build a site with so much help online. These presentations are touch optimized and work great with mobile devices, phones, and tablets. JavaScript also provides different tran...
- [JavaScript use-cases and most popular technologies used with JavaScript - DEV Community](https://dev.to/devaddict/javascript-use-cases-and-most-popular-technologies-used-with-javascript-10j3) *(dev.to · 2021-11-14T13:09:22)*
  > All of the lite versions of your popular applications are built by PWA which is basically improving your website to be a better mobile application. You can use JavaScript to create desktop applications. One of the most popular technologies to create ...
- [What is JavaScript and use cases of JavaScript?](https://www.devopsschool.com/blog/what-is-javascript-and-use-cases-of-javascript) *(devopsschool.com)*
  > JavaScript is used in many different ways. Some of the top use cases of JavaScript are: ... One of the key features of JavaScript is its ability to manipulate the Document Object Model (DOM) of a web page.
- [JAVASCRIPT AND ITS USE-CASES](https://www.linkedin.com/pulse/javacript-its-use-cases-aakash-nagpal) *(linkedin.com · 2021-06-24T18:35:18)*
  > Google operates this framework and is designed to use it to develop a Single Page Application (SPA). This development framework is known primarily because it gives developers the best conditions to combine JavaScript with HTML and CSS. Over half a mi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [[blink-dev] Ready for Developer Testing: Declarative Document Patching](http://www.mail-archive.com/blink-dev@chromium.org/msg16160.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup`)*
  > [blink-dev] Ready for Developer Testing: Declarative Document Patching Skip to site navigation (Press enter) [blink-dev] Ready for Developer Testing: Declarative Document Patching Chromestatus Tue, 24 Mar 2026 04:57:54 -0700 Contact emails ...
- [[blink-dev] Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16589.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup`)*
  > [blink-dev] Intent to Ship: Out of order streaming Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Out of order streaming Noam Rosenthal Tue, 26 May 2026 07:16:38 -0700 Contact emails [email&#160;protected] , [email&#160;p...
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16230.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup`)*
  > Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML Skip to site navigation (Press enter) Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML Mike Taylor Wed, 01 Apr 2026 07:31:05 -0700 Is the...
- [[blink-dev] Re: Intent to Ship: Out of order streaming](http://www.mail-archive.com/blink-dev@chromium.org/msg16599.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup`)*
  > [blink-dev] Re: Intent to Ship: Out of order streaming Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Out of order streaming Yoav Weiss (@Shopify) Tue, 26 May 2026 13:38:52 -0700 LGTM2 On Tue, May 26, 2026 at 8:41 PM ...
- [Parse processing instructions in HTML [481087638] - Chromium](https://issues.chromium.org/issues/481087638) *(issues.chromium.org)* *(Cites: `https://github.com/whatwg/html/pull/12118`)*
  > Chromium Sign in
- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-02-02 (public-html@w3.org from February 2026)](https://lists.w3.org/Archives/Public/public-html/2026Feb/0000.html) *(lists.w3.org)* *(Cites: `https://github.com/whatwg/html/pull/12118`)*
  > (2 by WebReflection, caugner) ... ------------- * whatwg/html (+3/-0/💬16) 3 pull requests submitted: - 12124 (by noamr) https://github.com/whatwg/html/pull/12124 - 12118 (by foolip) https://<strong>github.com/whatwg/html/pull/12118</strong...
- [Re: [blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16240.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12118`)*
  > &gt; &gt;&gt; On 3/31/26 7:34 a.m., Chromestatus ...ative-partial-updates/blob/main/patching-explainer.md#proposed-markup &gt;&gt; &gt;&gt; *Specification* &gt;&gt; https://<strong>github.com/whatwg/html/pull/12118</strong> &gt;&gt; &gt;&gt...
- [[blink-dev] Intent to Experiment: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg16220.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12118`)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup Specification https://github.com/whatwg/html/pull/12118 Summary Processing instructions (syntax: &lt;?target data&gt;) are <strong...
- [[blink-dev] Intent to Prototype: Parse processing instructions in HTML](http://www.mail-archive.com/blink-dev@chromium.org/msg15714.html) *(mail-archive.com)* *(Cites: `https://github.com/whatwg/html/pull/12118`)*
  > Explainer https://github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md#proposed-markup Specification https://github.com/whatwg/html/pull/12118 Summary Processing instructions (syntax: &lt;?target data&gt;) are <strong...

## 📚 Platform Documentation & Specifications

- [Weekly github digest (HTML specs) from W3C Webmaster via GitHub API on 2026-02-02 (public-html@w3.org from February 2026)](https://lists.w3.org/Archives/Public/public-html/2026Feb/0000.html) *(lists.w3.org)*
- [ProcessingInstruction: ProcessingInstruction() constructor](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction/ProcessingInstruction) *(developer.mozilla.org)*
- [ProcessingInstruction](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 44 result(s) found across 8 planned queries — **15 verified relevant**
  - `"chromestatus.com/feature/6534495085920256" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"github.com/WICG/declarative-partial-updates/blob/main/patching-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (7 returned)
  - `"github.com/whatwg/html/pull/12118" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Parse processing instructions in HTML" API` — *Core feature API query* (1 returned)
  - `"Parse processing instructions in HTML" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"use-cases" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Parse processing instructions in HTML" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Parse processing instructions in HTML" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 4 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **1 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 item(s) inspected
- **Engine Bug Trackers:** 4 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 3 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6534495085920256)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6534495085920256)
- [Specification](https://github.com/whatwg/html/pull/12118)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/481087638)
