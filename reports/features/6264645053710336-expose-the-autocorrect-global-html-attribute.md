# Expose the 'autocorrect' global html attribute

> **Report Week:** 2026-W38 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

### Motivation

The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

## Ecosystem Status

- **Momentum:** High (405 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Exposing the 'autocorrect' global HTML IDL attribute in Chrome 152 represents Chromium catching up to the WHATWG HTML specification and closing a longstanding interoperability gap. While browsers previously recognized the HTML content attribute, the lack of an exposed IDL property on \`HTMLElement\` broke standard DOM feature detection and programmatic property reflection. With Chrome 152, all major browser engines (WebKit, Gecko, and Blink) now exhibit unified consensus and complete reflection for the standard.

### Recommendations
- Actionable Advice: Continue declaring \`autocorrect="off"\` directly in HTML for declarative input handling, and safely use \`'autocorrect' in HTMLElement.prototype\` for runtime capability testing. Web application frameworks and virtual DOM libraries can now safely rely on property reflection (\`element.autocorrect\`) alongside traditional attribute manipulation.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 May 2026 01:00:27 -0700 LGTM1 /...
- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Chromestatus Fri, 22 May 2026 00:33:49 -0700 Contact emails [e...
- [HTML spellcheck Attribute](https://www.w3schools.com/tags/att_spellcheck.asp) *(w3schools.com)*
  > HTML spellcheck Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy Spaces P...
- [HTML Global spellcheck Attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp) *(w3schools.com)*
  > HTML Global spellcheck Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy S...
- [HTML input autocomplete Attribute](https://www.w3schools.com/tags/att_input_autocomplete.asp) *(w3schools.com)*
  > HTML input autocomplete Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android Start the adventure Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Get Certified Upgrade Academy ...
- [HTML autocomplete Attribute](https://www.w3schools.com/TAgs/att_autocomplete.asp) *(w3schools.com)*
  > HTML by Alphabet HTML by Category HTML Browser Support HTML Attributes HTML Global Attributes HTML Events HTML Colors HTML Canvas HTML Audio/Video HTML Character Sets HTML Doctypes HTML URL Encode HTML Language Codes HTML Country Codes HTTP Messages ...
- [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp) *(w3schools.com)*
  > HTML attributes provide additional information about HTML elements.
- [HTML Global attributes](https://www.w3schools.com/tags/ref_standardattributes.asp) *(w3schools.com)*
  > <strong>The global attributes are attributes that can be used with all HTML elements</strong>.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>This feature exposes the autocorrect global HTML attribute and reflects it on HTMLElement</strong>.
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16576.html) *(mail-archive.com)*
  > &gt; https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocorrect &gt; &gt; *Gecko*: Shipped/Shipping ( &gt; https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) &gt; https://www.firefox.com/en-US/firefox/136.0/releaseno...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The HTML autocorrect attribute <strong>lets web authors control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > The autocorrect global HTML attribute <strong>controls whether to automatically correct spelling or punctuation errors for user input in &lt;input&gt; and &lt;textarea&gt; elements, and in elements with the contenteditable attribute</strong>.
- [HTML autocorrect for text input is not working](https://stackoverflow.com/questions/47985384/html-autocorrect-for-text-input-is-not-working) *(stackoverflow.com)*
  > <strong>Try using spellcheck=&quot;true&quot; html attribute instead of autocorrect=&quot;on&quot;</strong>
- [Automatic Spelling Correction](https://www.chromium.org/developers/design-documents/automaticspellingcorrection) *(chromium.org)*
  > Invariably, this would select the word immediately after typing and entering space, or other word breaking character (such as $, @, &amp; etc for WebKit). Once the subrange to replace has been determined, a new method in the editor client (editorclie...
- [spell check - Google Chrome AutoCorrect? - Super User](https://superuser.com/questions/360454/google-chrome-autocorrect) *(superuser.com · 2011-11-22T00:00:00)*
  > <strong>Currently there is no built-in support for autocorrect in Google Chrome</strong>. There is an open issue on the Chromium source code, issue 7624 to be precise, that wants to add support for autocorrect.
- [r/chrome on Reddit: confused : does chrome have "autocorrect" for writing ?](https://www.reddit.com/r/chrome/comments/1cfsxb3/confused_does_chrome_have_autocorrect_for_writing) *(reddit.com · 2024-04-29T07:16:19)*
  > Feel free to comment on this chromium support thread so that they&#x27;ll see that it does in fact matter to a lot of us ... Word shortcuts/autocomplete dont work on firefox?!!

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/6264645053710336`)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 May 2026 01:00:27 -07...
- [A modal dialog should not make inert top layer elements above itself · Issue #11195 · whatwg/html](https://github.com/whatwg/html/issues/11195) *(github.com · 2025-04-07T16:03:41)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > A modal dialog should not make inert top layer elements above itself · Issue #11195 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another t...
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com · 2024-12-02T19:58:08)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...

## 📚 Platform Documentation & Specifications

- [A modal dialog should not make inert top layer elements above itself · Issue #11195 · whatwg/html](https://github.com/whatwg/html/issues/11195) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [edge-developer/microsoft-edge/web-platform/release-notes/152.md at main · MicrosoftDocs/edge-developer](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/152.md) *(github.com)*
- [magento-pwa/CHANGELOG.md at 2.3-develop · luke-denton-aligent/magento-pwa](https://github.com/luke-denton-aligent/magento-pwa/blob/2.3-develop/CHANGELOG.md) *(github.com)*
- [HTMLElement: autocorrect property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/autocorrect) *(developer.mozilla.org)*
- [autocorrect HTML global attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) *(developer.mozilla.org)*
- [translated-content-de/files/de/web/api/htmlelement/autocorrect/index.md at main · mdn/translated-content-de](https://github.com/mdn/translated-content-de/blob/main/files/de/web/api/htmlelement/autocorrect/index.md) *(github.com)*
- [content/files/en-us/web/api/htmlelement/autocorrect/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/htmlelement/autocorrect/index.md?plain=1) *(github.com)*
- [Issues with autoCorrect attribute set as property · Issue #5436 · facebook/react](https://github.com/facebook/react/issues/5436) *(github.com)*
- [Support autocorrect attribute · Issue #1155 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1155) *(github.com)*
- [1927977 - Ship autocorrect attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) *(bugzilla.mozilla.org)*
- [1185284 - Firefox for Android does not honor autocorrect and spellcheck attributes](https://bugzilla.mozilla.org/show_bug.cgi?id=1185284) *(bugzilla.mozilla.org)*
- [Add autocapitalize attribute by rlanday · Pull Request #3273 · whatwg/html](https://github.com/whatwg/html/pull/3273) *(github.com)*
- [Add autocorrect content attribute to HTMLElement · Issue #3595 · whatwg/html](https://github.com/whatwg/html/issues/3595) *(github.com)*
- [Clarify IDL reflection for \`closedby\` attribute · Issue #10945 · whatwg/html](https://github.com/whatwg/html/issues/10945) *(github.com)*
- [Formalize content attribute reflection · Issue #3238 · whatwg/html](https://github.com/whatwg/html/issues/3238) *(github.com)*
- [popover\*targetElement IDL attributes can be misleading · Issue #8894 · whatwg/html](https://github.com/whatwg/html/issues/8894) *(github.com)*
- ["The tabIndex IDL attribute must reflect the val..." · Issue #113 · whatwg/html](https://github.com/whatwg/html/issues/113) *(github.com)*
- ["When the textarea element's textContent IDL attribute changes" · Issue #2750 · whatwg/html](https://github.com/whatwg/html/issues/2750) *(github.com)*
- [Clarify "focusable" in the context of tabIndex IDL attribute · Issue #4464 · whatwg/html](https://github.com/whatwg/html/issues/4464) *(github.com)*
- [spellcheck HTML global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck) *(developer.mozilla.org)*
- [headingoffset HTML global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 47 result(s) found across 10 planned queries — **37 verified relevant**
  - `"chromestatus.com/feature/6264645053710336" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"html.spec.whatwg.org/multipage/interaction.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Expose the 'autocorrect' global html attribute" API` — *Core feature API query* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"autocorrect" in document.createElement("input") OR "HTMLElement.prototype.autocorrect" example` — *Finds real-world JavaScript code snippets demonstrating feature detection and IDL reflection for the autocorrect attribute.* (8 returned)
  - `"autocorrect" attribute input textarea contenteditable ("turn off" OR "disable") guide OR tutorial` — *Discovers developer tutorials and practical guides on how to configure and disable autocorrection on various editable web elements.* (0 returned)
  - `"autocorrect" global attribute (Chromium OR WebKit OR Firefox) ("Intent to Ship" OR "support")` — *Surfaces browser implementation announcements, platform status updates, and standardization milestones across major browser engines.* (8 returned)
  - `site:github.com/whatwg/html OR site:issues.chromium.org "autocorrect" IDL attribute` — *Identifies web standards debates, bug tracker conversations, and spec resolution threads regarding exposing autocorrect in the IDL.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 273 item(s) inspected

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
