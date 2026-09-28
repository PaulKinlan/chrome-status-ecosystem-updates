# Expose the 'autocorrect' global html attribute

> **Report Week:** 2026-W40 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

### Motivation

The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

## Ecosystem Status

- **Momentum:** High (385 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Standardizing the 'autocorrect' global HTML attribute and exposing it via the HTMLElement IDL closes a decade-long interoperability gap across browsers. While Safari and Firefox had already implemented and reflected the attribute, Chromium's implementation in Chrome 152/153 achieves cross-engine alignment and brings the feature to Baseline Newly Available status. This eliminates legacy feature-detection failures where scripts checking 'autocorrect' in HTMLElement.prototype incorrectly assumed lack of support.

### Recommendations
- Actionable Advice: Web teams can immediately apply autocorrect='off' or autocorrect='on' directly to editable elements and dynamically inspect element.autocorrect safely across modern engines. For programmatic checks in older Chromium versions, maintain graceful fallback handling via getAttribute('autocorrect') alongside IDL checks.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHHXtlmTJ6uaJGyMqhZqQ3WRExk4dJLmRsdVJwfhcuup7WWdoxQAUZU96ZhMFU21zALtLv13wHETDikJO5a6M4H_lrd19QYja7gXl0a0Ol2xe3HmYBnWxOYEsMPHgbtGlXSv6a5bemkmq19P-_NyiC7qtUdj2vOBTsFhfgm1ygAcZ81fk-1uVjJ7_Sa7FBCbg==) *(vertexaisearch.cloud.google.com)*
  > autocorrect HTML global attribute - HTML | MDN Skip to main content Skip to search Toggle sidebar Web HTML Reference Global attributes autocorrect Theme OS default Light Dark English (US) Remember language Learn more Deutsch English (US) Français 日本語...
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHeHo5024ImSU6i58pK-dXrx-Z_7V5apmuc93Brz3ftcfMHdOhR_GtWziEb6uuMNIi5mfGbOZrxgZvb-MMvwGO7rKWmwOQaCghAR87gSfkwynli0R1EKGJsHXYHr5I6HQ==) *(vertexaisearch.cloud.google.com)*
  > New to the web platform in August | Blog | web.dev Skip to main content / English Русский فارسی বাংলা Sign in Blog Home Blog New to the web platform in August Stay organized with collections Save and categorize content based on your preferences. Disc...
- [davidwalsh.name](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFHJJnWehMgkqMXqiOOvZU1T_WufO08rr8CeaOKhFiq31gdgGOKeAS2unC8NjLhLATKzd8OVbNs9zBwl-VnZ-KjMmiTYGrXKrNTM57trf8IyesdBEN2n0xt3qXYxeXT3tqe) *(vertexaisearch.cloud.google.com)*
  > Disable Autocomplete, Autocapitalize, and Autocorrect Home Main Content DWB Search Popular: JavaScript Promises fetch API React.js Cache API ES6 Features Node.js JavaScript jQuery Disable Autocomplete, Autocapitalize, and Autocorrect Building Resilie...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEmHwRFIh6WYZfwCFSg1DmygKPTX44Fk9pCXP1i5CIX8evpOS-bU_JKnxMJHEtmCjCn4QziswpwnJYClxXKR4y13Ikod23k8AlS-XvZjP61yqVeL2NXXm3To-uTWCErA-xFMW6_iT5g) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGye4bZLrzM10RKie-_YN2iXO94qLXXUB8VjNJksAHGDbQkiittf4edzVfK2T53yh8UwPMfAGg546E73n7N9Ctre1yr6iM6R2ywTZ_jS05EHAXDJu1Up_rboKFw_MJf9pwHVWbc) *(vertexaisearch.cloud.google.com)*
  > کروم ۱۵۲ | Release notes | Chrome for Developers رد شدن و رفتن به محتوای اصلی / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEuW9jfKfVAkXvbsOXN-PCZIGZVx7Y8-JG4NE4EbqdRVa-adTHXpNjYJcKLNyUolU19vmEXxNnfjit44rduaQ0dx0O5Y3TehwDDkWz-MA-gMDT2Bs5vf2kdleHt9ieNQfkBPNwUMMTh) *(vertexaisearch.cloud.google.com)*
  > Chrome 152 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnLBa_7QznXVi9-rjQ7KMWI6Efa9FbEdYuLlQU08f2FTz2s-3R3ey79jUGRoGmUT0vx3RtNijR78wSr6dx7cwdXlbQobZdXkgbijybQOz3y5cKrxs9yu9P_yjh-eZYQRrxADDF) *(vertexaisearch.cloud.google.com)*
  > Chrome 149 | Release notes | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQECttUdsyiUE1JdErdGWxgiZUu_DBK1BkVEEfZDF4DwsLhybnqCk8ymSEFR6Cj0iqPa5amyIX5KVQIZuS11a1bIe-IDSQJhiYDfu_unJ31L_2luPKEz_LMXyCxKdOjci0rdRBsvnBLL) *(vertexaisearch.cloud.google.com)*
  > Chrome 149 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [stackoverflow.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH8HVNZTJDMVQBi4Go2cyrOH_JGWr2txvwadM5VYXDxFx5DicSPphHHpy3mFLxUgUeRcQFDGa8gKDdTHWC7KlJ-7SqzgO0c9BLLmVJ3S_uilJzZy8nk1cwIokWxqs5G1OXdvYoPXD53BiYmc3pZfS0H9oZxhjB6CoqrE7ijj3PzsUMh_qxOfmMGG8D0MNYJdDi36SxH5iTsoo9b8GiT) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`autocorrect` global HTML attribute** standardizes how developers toggle automatic spelling and punctuation correction on editable surfaces, including `<input>`, `<textarea>`, and `contenteditable` elements.   Historicall
- [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE7tt9IqhfNofhcXissgKVdaI-cKewr4saVQ29sB-IXdljbm7X2VMU1JOuYnKEPkEv17O-aHkP63VmxQm8vT8Qw0DlLqrz6HQLRD2_aq9EyJjJJIRSmBLdzxL16Y7PiRY3lilncxHBziZnw01u6X0PSWhtGvUDV5hRdVQ2T1KdqC3XXvuZf-FqIxbYfde--t_hhHSHEUmC0rwuQpzI9KiN0QNybOliFy38TY1kCBwAwBg==) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`autocorrect` global HTML attribute** standardizes how developers toggle automatic spelling and punctuation correction on editable surfaces, including `<input>`, `<textarea>`, and `contenteditable` elements.   Historicall
- [whatwg.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5MBJ9Y7sCSZizjI0z0X1iqeAG10Wni-RzIb0Gk_ILBnEBAXBLJ4OWsejHHycmNhR-cZpK5VrvLbkUKK0DwoubyTtPp44X77qel4zaL1OaBKyoEj8Z4TqrjnXzkUes4SCf1bR1ukgz) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`autocorrect` global HTML attribute** standardizes how developers toggle automatic spelling and punctuation correction on editable surfaces, including `<input>`, `<textarea>`, and `contenteditable` elements.   Historicall
- [web.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGlgcglX2Buo3qf9cA40khxTbqllKPxSf6Q5FdS8qwfL7GFgedaz8xChJ-CxE0NMYrNMKbrU5vmzuBrQKAIKidNK63GKRryIk3ZpRFq4KPN0ammuyNqSBJ2G6k=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`autocorrect` global HTML attribute** standardizes how developers toggle automatic spelling and punctuation correction on editable surfaces, including `<input>`, `<textarea>`, and `contenteditable` elements.   Historicall
- [caniuse.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7Q35OdY3IznTb4Oo4PcBlTD12zt7sUJm0fknTKkVLYCRZfZ8SfPrqNT2R63QbC8VGfHG2s56Bw52B7og8ZDfbQ0no7AXXIOor4eR6Grlf6kCuT46KswyaE0ilOig=) *(vertexaisearch.cloud.google.com)*
  > ### Executive Summary  The **`autocorrect` global HTML attribute** standardizes how developers toggle automatic spelling and punctuation correction on editable surfaces, including `<input>`, `<textarea>`, and `contenteditable` elements.   Historicall
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6264645053710336</strong>?gate=4718478864023552 This intent message was generated by Chrome Platform Status &lt;https://chromestatus.com&...
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > Please list open issues (eg links ... non-backward-compatible way). No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6264645053710336</strong>?gate=4718478864023552 This intent message was g...
- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > We cannot provide a description for this page right now
- [HTML spellcheck Attribute](https://www.w3schools.com/tags/att_spellcheck.asp) *(w3schools.com)*
  > The spellcheck attribute is part of the Global Attributes, and can be used on any HTML element.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>This feature exposes the autocorrect global HTML attribute and reflects it on HTMLElement</strong>.
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16576.html) *(mail-archive.com)*
  > &gt; https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect &gt; &gt; *Gecko*: Shipped/Shipping ( &gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) &gt; https://www.firefox.com/en-US/firefox/136.0/releaseno...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The HTML autocorrect attribute <strong>lets web authors control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The autocorrect global HTML attribute <strong>controls whether to automatically correct spelling or punctuation errors for user input in &lt;input&gt; and &lt;textarea&gt; elements, and in elements with the contenteditable attribute</strong>.
- [HTML autocorrect Global Attribute - CSS Portal](https://www.cssportal.com/html-global-attributes/autocorrect.php) *(cssportal.com)*
  > The autocorrect attribute can be added to any HTML element that accepts user input, including: ... &lt;form&gt; &lt;!-- Autocorrect enabled (default behavior on some devices) --&gt; &lt;label for=&quot;note&quot;&gt;Notes:&lt;/label&gt; &lt;textarea ...
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16577.html) *(mail-archive.com)*
  > *Blink component* Blink&gt;Editing&gt;IME ... The &#x27;autocorrect&#x27; HTML attribute has been implemented long ago, but since it&#x27;s not defined in any exported IDL, websites fail to detected it as supported. *Initial public proposal* /No info...
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > <strong>The feature makes the &#x27;autocorrect&#x27; attribute to be exposed to web authors</strong>.
- [Chrome 149 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com · 2026-05-06T00:00:00)*
  > The HTML autocorrect attribute <strong>allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6264645053710336`)*
  > /No information provided/ *Link to entry on the Chrome Platform Status* https://<strong>chromestatus.com/feature/6264645053710336</strong>?gate=4718478864023552 This intent message was generated by Chrome Platform Status &lt;https://chromes...
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6264645053710336`)*
  > Please list open issues (eg links ... non-backward-compatible way). No information provided Link to entry on the Chrome Platform Status https://<strong>chromestatus.com/feature/6264645053710336</strong>?gate=4718478864023552 This intent mes...
- [Page Life Cycle Support · Issue #1538 · WebPlatformForEmbedded/WPEWebKit](https://github.com/WebPlatformForEmbedded/WPEWebKit/issues/1538) *(github.com · 2025-07-16T14:23:17)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Technical solution agreed between Architects of Comcast-Sky-LibertyGlobal is : As lifecycle API between Browser and the WebApp, W3C page Lifecycle need to be supported on WebEngine. see specs &amp; documentation: https://developer.chrome.co...
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com · 2024-12-02T19:58:08)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > See a related discussion in CSSWG about the new interactivity property, here: https://github.com/w3c/csswg-drafts/pull/11178/files#r1845716939 · Also see the current HTML spec for how modal dialogs escape inertness, here: https://<strong>ht...
- [Remove concept of expressly inert? · Issue #7564 · whatwg/html](https://github.com/whatwg/html/issues/7564) *(github.com · 2022-02-01T22:10:09)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > https://html.spec.whatwg.org/multipage/interaction.html#expressly-inert <strong>An element is expressly inert if it is inert and its node document is not inert</strong>. I was trying to understand if I implemented this right in Blink, but I...

## 📚 Platform Documentation & Specifications

- [Page Life Cycle Support · Issue #1538 · WebPlatformForEmbedded/WPEWebKit](https://github.com/WebPlatformForEmbedded/WPEWebKit/issues/1538) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [Remove concept of expressly inert? · Issue #7564 · whatwg/html](https://github.com/whatwg/html/issues/7564) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [autocorrect HTML global attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) *(developer.mozilla.org)*
- [Respect autocorrect="off" for Windows touch keyboard in TSF · Issue #1057 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1057) *(github.com)*
- [HTMLElement: autocorrect property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/autocorrect) *(developer.mozilla.org)*
- [Add autocorrect content attribute to HTMLElement · Issue #3595 · whatwg/html](https://github.com/whatwg/html/issues/3595) *(github.com)*
- [Support autocorrect attribute · Issue #1155 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1155) *(github.com)*
- [1927977 - Ship autocorrect attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) *(bugzilla.mozilla.org)*
- [Add the autocorrect attribute by whsieh · Pull Request #5841 · whatwg/html](https://github.com/whatwg/html/pull/5841) *(github.com)*
- [Define the autocorrect attribute as standard · Issue #35593 · mdn/content](https://github.com/mdn/content/issues/35593) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 10 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/6264645053710336" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"html.spec.whatwg.org/multipage/interaction.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" API` — *Core feature API query* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"autocorrect" HTML attribute ("input" OR "textarea" OR "contenteditable") tutorial guide` — *Find practical guides, developer tutorials, and articles explaining how to disable or manage autocorrect across editable HTML elements.* (8 returned)
  - `"autocorrect" in (HTMLInputElement.prototype OR document.createElement) IDL attribute` — *Locate real-world JavaScript code snippets and feature detection patterns testing for the exposed IDL autocorrect attribute.* (8 returned)
  - `"autocorrect" attribute ("Intent to Ship" OR "Chrome Platform Status" OR "WebKit" OR "Firefox") IDL` — *Track browser vendor support signals, implementation timelines, and shipping announcements for standardizing the autocorrect IDL attribute.* (8 returned)
  - `"autocorrect" global attribute ("feature detection" OR "standardized" OR WHATWG) discussion` — *Discover developer discussions, issues, and sentiment regarding the historical lack of IDL reflection and the push to make autocorrect a standardized global attribute.* (6 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 274 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6264645053710336)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6264645053710336)
- [Specification](https://html.spec.whatwg.org/multipage/interaction.html#autocorrection)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40871769)
