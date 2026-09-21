# Expose the 'autocorrect' global html attribute

> **Report Week:** 2026-W39 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

### Motivation

The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

## Ecosystem Status

- **Momentum:** High (275 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Expose the 'autocorrect' global html attribute is currently Enabled by default in Chrome 152. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "VonC sur Twitter : "@jbnizet did you try a 'git config --global help.autocorrect 1'?"" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [VonC sur Twitter : "@jbnizet did you try a 'git config --global help.autocorrect 1'?"](https://twitter.com/vonc_/status/359313429992972288) — *by @vonc_, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Auto Correct Fails (@AutoCorrectFaiI) / ...](https://twitter.com/autocorrectfaii) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Auto-Correct (@autocorrect) / Posts / X](https://twitter.com/autocorrect) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [autocorrect2.0 (@autocorrect2\_0) ...](https://twitter.com/autocorrect2_0) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Twitter](https://twitter.com/autocorrectke?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [X - The Everything App / X](https://twitter.com/hashtag/autocorrect?lang=en) — *0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [SPECIALK 🗯 on Twitter: "Autocorrect can SUGMEE"](https://twitter.com/kburton_25/status/481608787921342464) — *by @kburton_25, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 May 2026 01:00:27 -0700 LGTM1 /...
- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Chromestatus Fri, 22 May 2026 00:33:49 -0700 Contact emails [e...
- [HTML spellcheck Attribute](https://www.w3schools.com/tags/att_spellcheck.asp) *(w3schools.com)*
  > HTML spellcheck Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy Spaces P...
- [HTML input autocomplete Attribute](https://www.w3schools.com/tags/att_input_autocomplete.asp) *(w3schools.com)*
  > HTML by Alphabet HTML by Category HTML Browser Support HTML Attributes HTML Global Attributes HTML Events HTML Colors HTML Canvas HTML Audio/Video HTML Character Sets HTML Doctypes HTML URL Encode HTML Language Codes HTML Country Codes HTTP Messages ...
- [HTML Global spellcheck Attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp) *(w3schools.com)*
  > W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
- [HTML autocomplete Attribute](https://www.w3schools.com/TAgs/att_autocomplete.asp) *(w3schools.com)*
  > HTML by Alphabet HTML by Category HTML Browser Support HTML Attributes HTML Global Attributes HTML Events HTML Colors HTML Canvas HTML Audio/Video HTML Character Sets HTML Doctypes HTML URL Encode HTML Language Codes HTML Country Codes HTTP Messages ...
- [HTML Global attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) *(w3schools.com)*
  > <strong>The global attributes are attributes that can be used with all HTML elements</strong>.
- [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp) *(w3schools.com)*
  > HTML attributes provide additional information about HTML elements.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>This feature exposes the autocorrect global HTML attribute and reflects it on HTMLElement</strong>.
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16576.html) *(mail-archive.com)*
  > &gt; https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect &gt; &gt; *Gecko*: Shipped/Shipping ( &gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) &gt; https://www.firefox.com/en-US/firefox/136.0/releaseno...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The HTML autocorrect attribute <strong>lets web authors control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The autocorrect global HTML attribute <strong>controls whether to automatically correct spelling or punctuation errors for user input in &lt;input&gt; and &lt;textarea&gt; elements, and in elements with the contenteditable attribute</strong>.
- [autocorrect · HTMLElement · JS · osbo.com](https://osbo.com/js/htmlelement/autocorrect) *(osbo.com)*
  > The autocorrect of HTMLElement for JS <strong>returns the autocorrection behavior of the element</strong>. Note that for autocapitalize-and-autocorrect inheriting elements that inherit their state from a form element, this will return the autocorrect...
- [Chrome 152 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/152) *(chromestatus.com)*
  > <strong>The feature makes the &#x27;autocorrect&#x27; attribute to be exposed to web authors</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6264645053710336`)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 May 2026 01:00:27 -07...
- [Page Life Cycle Support · Issue #1538 · WebPlatformForEmbedded/WPEWebKit](https://github.com/WebPlatformForEmbedded/WPEWebKit/issues/1538) *(github.com · 2025-07-16T14:23:17)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Page Life Cycle Support · Issue #1538 · WebPlatformForEmbedded/WPEWebKit · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to r...
- [browsers disagree on focus fixup rule one · Issue #704 · whatwg/html](https://github.com/whatwg/html/issues/704) *(github.com · 2016-02-18T03:13:52)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > browsers disagree on focus fixup rule one · Issue #704 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refre...
- [Remove concept of expressly inert? · Issue #7564 · whatwg/html](https://github.com/whatwg/html/issues/7564) *(github.com · 2022-02-01T22:10:09)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Remove concept of expressly inert? · Issue #7564 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com · 2024-12-02T19:58:08)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...

## 📚 Platform Documentation & Specifications

- [Page Life Cycle Support · Issue #1538 · WebPlatformForEmbedded/WPEWebKit](https://github.com/WebPlatformForEmbedded/WPEWebKit/issues/1538) *(github.com)*
- [browsers disagree on focus fixup rule one · Issue #704 · whatwg/html](https://github.com/whatwg/html/issues/704) *(github.com)*
- [Remove concept of expressly inert? · Issue #7564 · whatwg/html](https://github.com/whatwg/html/issues/7564) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [magento-pwa/CHANGELOG.md at 2.3-develop · luke-denton-aligent/magento-pwa](https://github.com/luke-denton-aligent/magento-pwa/blob/2.3-develop/CHANGELOG.md) *(github.com)*
- [HTMLElement: autocorrect property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/autocorrect) *(developer.mozilla.org)*
- [autocorrect HTML global attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) *(developer.mozilla.org)*
- [translated-content-de/files/de/web/api/htmlelement/autocorrect/index.md at main · mdn/translated-content-de](https://github.com/mdn/translated-content-de/blob/main/files/de/web/api/htmlelement/autocorrect/index.md) *(github.com)*
- [content/files/en-us/web/api/htmlelement/autocorrect/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/htmlelement/autocorrect/index.md?plain=1) *(github.com)*
- [Add autocorrect content attribute to HTMLElement · Issue #3595 · whatwg/html](https://github.com/whatwg/html/issues/3595) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 38 result(s) found across 10 planned queries — **26 verified relevant**
  - `"chromestatus.com/feature/6264645053710336" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/interaction.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Expose the 'autocorrect' global html attribute" API` — *Core feature API query* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"autocorrect" attribute html ("input" OR "textarea" OR "contenteditable") guide OR tutorial` — *Searches for developer guides, blog tutorials, and practical walk-throughs on using the HTML autocorrect attribute across editable input elements.* (0 returned)
  - `"autocorrect" in document.createElement('input') OR ("autocorrect" in HTMLElement.prototype) feature detection` — *Finds technical code snippets and patterns demonstrating how developers detect support for the newly standardized autocorrect IDL attribute in JavaScript.* (8 returned)
  - `"autocorrect" ("global attribute" OR "IDL") ("intent to ship" OR "Chrome Platform Status" OR "WebKit")` — *Tracks browser vendor announcements, release notes, and standardization status for exposing autocorrect as a global IDL attribute.* (3 returned)
  - `site:github.com/whatwg/html/issues "autocorrect" ("IDL" OR "global attribute")` — *Surfaces standards-body discussions, spec drafting debates, and developer feedback around standardizing and exposing the autocorrect IDL attribute.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
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
