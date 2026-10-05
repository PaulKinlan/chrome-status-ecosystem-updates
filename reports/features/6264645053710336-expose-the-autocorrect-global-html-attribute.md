# Expose the 'autocorrect' global html attribute

> **Report Week:** 2026-W41 | **Milestone:** Chrome 152 | **Category:** Enabled by default

## Overview

The HTML autocorrect attribute allows web authors to control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts. The feature makes the 'autocorrect' attribute to be exposed to web authors.

### Motivation

The 'autocorrect' HTML attribute has been implemented long ago, but since it's not defined in any exported IDL, websites fail to detected it as supported.

## Ecosystem Status

- **Momentum:** High (395 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive
- **Executive Take:** Chrome 152 officially exposes the global 'autocorrect' HTML attribute and reflects it via IDL on HTMLElement.prototype, closing a long-standing standards gap. While browsers have supported the markup attribute informally for years, standardized reflection on HTMLElement allows reliable feature detection in JavaScript without brittle workarounds. With Safari and Firefox already aligned, the feature achieves cross-browser interoperability and reaches Baseline status.

### Recommendations
- Actionable Advice: Web teams can safely use autocorrect="off" as progressive enhancement across inputs, textareas, and contenteditable elements immediately. To dynamically toggle or inspect support in client-side code, verify 'autocorrect' in HTMLElement.prototype before applying programmatic behaviors.
- Shipping enabled by default in Chrome 152. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Expose the 'autocorrect' global html attribute](https://chromestatus.com/feature/6264645053710336) *(chromestatus.com · 2026-05-06T00:00:00)*
  > Chrome Platform Status
- [\[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16574.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Chromestatus Fri, 22 May 2026 00:33:49 -0700 Contact emails [e...
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16575.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Expose the 'autocorrect' global html attribute Daniel Bratell Fri, 22 May 2026 01:00:27 -0700 LGTM1 /...
- [How to Disable Autocorrect in HTML (Beginner's Guide)](https://www.mohammedcode.com/en/disable-autocorrect-in-html) *(mohammedcode.com · 2026-09-12T19:25:12)*
  > How to Disable Autocorrect in HTML (Beginner&#039;s Guide) محمد كود | دروس ومقالات في JavaScript و CSS وتصميم الويب autocorrect HTML attribute: A Beginner&#8217;s Guide to Controlling Auto-Correction in Forms 👏 0 إعلان HTML forms You type the promo ...
- [HTML spellcheck Attribute](https://www.w3schools.com/tags/att_spellcheck.asp) *(w3schools.com)*
  > HTML spellcheck Attribute Menu Search field &times; See More NEW W3Schools app iOS & Android App Sign In Sign Up --> user-anonymous --> --> &#x2605; +1 --> My W3Schools --> user-authenticated --> Spaces Upgrade Paid Courses Academy Practice --> user-...
- [HTML Global spellcheck Attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML input autocomplete Attribute](https://www.w3schools.com/tags/att_input_autocomplete.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML autocomplete Attribute](https://www.w3schools.com/TAgs/att_autocomplete.asp) *(w3schools.com)*
  > Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java, XML and more.
- [HTML Input Attributes](https://www.w3schools.com/html/html_form_attributes.asp) *(w3schools.com)*
  > Tip: <strong>Use the global title attribute to describe the pattern to help the user</strong>.
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > <strong>This feature exposes the autocorrect global HTML attribute and reflects it on HTMLElement</strong>.
- [Re: \[blink-dev\] Intent to Ship: Expose the 'autocorrect' global html attribute](http://www.mail-archive.com/blink-dev@chromium.org/msg16577.html) *(mail-archive.com)*
  > *Initial public proposal* /No information provided/ *TAG review* /No information provided/ *TAG review status* Not applicable *Goals for experimentation* None *Risks* *Interoperability and Compatibility* The feature is supported in Firefox and Safari...
- [Chrome 152 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-152-beta) *(developer.chrome.com · 2026-07-30T00:00:00)*
  > The HTML autocorrect attribute <strong>lets web authors control whether autocorrection should be applied to user input in editable elements including &lt;input&gt;, &lt;textarea&gt;, and contenteditable hosts</strong>.
- [Microsoft Edge 152 web platform release notes (Aug. 27, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com · 2026-08-27T00:00:00)*
  > The autocorrect global HTML attribute <strong>controls whether to automatically correct spelling or punctuation errors for user input in &lt;input&gt; and &lt;textarea&gt; elements, and in elements with the contenteditable attribute</strong>.
- [HTML autocorrect Global Attribute - CSS Portal](https://www.cssportal.com/html-global-attributes/autocorrect.php) *(cssportal.com)*
  > <strong>The textarea for note allows the device to suggest and automatically correct spelling errors</strong>. The input for username disables autocorrection, which is important for usernames that may contain unusual characters or capitalization.
- [Disable Autocomplete, Autocapitalize, and Autocorrect](https://davidwalsh.name/disable-autocorrect) *(davidwalsh.name · 2014-02-12T06:43:47)*
  > &lt;input autocomplete=&quot;off&quot; autocorrect=&quot;off&quot; autocapitalize=&quot;off&quot; spellcheck=&quot;false&quot; /&gt; <strong>&lt;textarea autocomplete=&quot;off&quot; autocorrect=&quot;off&quot; autocapitalize=&quot;off&quot; spellche...
- [HTML - How can i disable auto text correction in my TEXTAREA? - Stack Overflow](https://stackoverflow.com/questions/3496658/html-how-can-i-disable-auto-text-correction-in-my-textarea) *(stackoverflow.com)*
  > This is an HTML5 attribute so can&#x27;t be handled in a CSS file. It needs to be part of the textarea markup itself. :-) 2010-08-16T20:07:00.137Z+00:00 ... If you&#x27;re using a &lt;textarea&gt; element and want to disable native autocorrect, the c...
- [Turn off HTML Input Auto Fixups for Mobile Devices - Rick Strahl's Weblog](https://weblog.west-wind.com/posts/2015/jun/15/turn-off-html-input-auto-fixups-for-mobile-devices) *(weblog.west-wind.com · 2015-06-15T00:00:00)*
  > ... <strong>&lt;input type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your user name&quot; value=&quot;&quot; autocapitalize=&quot;off&quot; autocomplete=&quot;off&quot; s...
- [HTML autocorrect for text input is not working](https://stackoverflow.com/questions/47985384/html-autocorrect-for-text-input-is-not-working) *(stackoverflow.com)*
  > This is a non-standard attribute supported by Safari that is <strong>used to control whether autocorrection should be enabled when the user is entering/editing the text value of the &lt;input&gt;</strong>
- [\[dev-platform\] Intent to prototype: autocorrect HTML attribute](https://www.mail-archive.com/dev-platform@mozilla.org/msg01270.html) *(mail-archive.com)*
  > Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1725806 Specification: https://html.spec.whatwg.org/#autocorrection Standards Body: WHATWG Platform coverage: All. Android and macOS have backend implementations. Preference: dom.forms.autocorrect Dev...
- ["autocorrect" \| Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/?search=autocorrect) *(caniuse.com)*
  > <strong>&quot;Can I use&quot; provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers</strong>.

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub](https://gist.github.com/gajus/fd6a08b43d2a80a96c2b) *(gist.github.com)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub Skip to content --> Search Gists Search Gists Sign in Sign up You signed in with another tab or window. Reload to refresh your s...
- [lint(a11y/no-aria-hidden-on-focusable): \`inert\`, \`disabled\` and \`type="hidden"\` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize](https://github.com/ubugeeei-prod/vize/issues/7977) *(github.com · 2026-10-05T04:00:32)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > lint(a11y/no-aria-hidden-on-focusable): `inert`, `disabled` and `type="hidden"` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign...
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com · 2024-12-02T19:58:08)* *(Cites: `https://html.spec.whatwg.org/multipage/interaction.html#autocorrection`)*
  > Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You sign...

## 📚 Platform Documentation & Specifications

- [Drag and Drop using WHATWG implementation. https://html.spec.whatwg.org/multipage/interaction.html#dnd · GitHub](https://gist.github.com/gajus/fd6a08b43d2a80a96c2b) *(gist.github.com)*
- [lint(a11y/no-aria-hidden-on-focusable): \`inert\`, \`disabled\` and \`type="hidden"\` elements are reported as focusable · Issue #7977 · ubugeeei-prod/vize](https://github.com/ubugeeei-prod/vize/issues/7977) *(github.com)*
- [Should non-modal top layer elements that come after modal dialogs also escape inertness? · Issue #10811 · whatwg/html](https://github.com/whatwg/html/issues/10811) *(github.com)*
- [autocorrect HTML global attribute - HTML \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocorrect) *(developer.mozilla.org)*
- [Add the autocorrect attribute by whsieh · Pull Request #5841 · whatwg/html](https://github.com/whatwg/html/pull/5841) *(github.com)*
- [HTMLElement: autocorrect property - Web APIs \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/autocorrect) *(developer.mozilla.org)*
- [translated-content-de/files/de/web/api/htmlelement/autocorrect/index.md at main · mdn/translated-content-de](https://github.com/mdn/translated-content-de/blob/main/files/de/web/api/htmlelement/autocorrect/index.md) *(github.com)*
- [content/files/en-us/web/api/htmlelement/autocorrect/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/htmlelement/autocorrect/index.md?plain=1) *(github.com)*
- [Add autocorrect content attribute to HTMLElement · Issue #3595 · whatwg/html](https://github.com/whatwg/html/issues/3595) *(github.com)*
- [Support autocorrect attribute · Issue #1155 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1155) *(github.com)*
- [1927977 - Ship autocorrect attribute](https://bugzilla.mozilla.org/show_bug.cgi?id=1927977) *(bugzilla.mozilla.org)*
- [autocorrect · Issue #1562 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1562) *(github.com)*
- [autocorrect · Issue #282 · web-platform-dx/developer-signals](https://github.com/web-platform-dx/developer-signals/issues/282) *(github.com)*
- [Add autocapitalize attribute by rlanday · Pull Request #3273 · whatwg/html](https://github.com/whatwg/html/pull/3273) *(github.com)*
- [Autocomplete value for username OR user email address · Issue #4445 · whatwg/html](https://github.com/whatwg/html/issues/4445) *(github.com)*
- [Define the autocorrect attribute as standard · Issue #35593 · mdn/content](https://github.com/mdn/content/issues/35593) *(github.com)*
- [spellcheck HTML global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck) *(developer.mozilla.org)*
- [headingoffset HTML global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/headingoffset) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 48 result(s) found across 11 planned queries — **36 verified relevant**
  - `"chromestatus.com/feature/6264645053710336" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"html.spec.whatwg.org/multipage/interaction.html" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" API` — *Core feature API query* (3 returned)
  - `"Expose the 'autocorrect' global html attribute" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Expose the 'autocorrect' global html attribute" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `html "autocorrect" attribute guide OR tutorial "contenteditable" OR "textarea"` — *Find developer guides and tutorials explaining how to use the autocorrect attribute across editable form elements and contenteditable containers.* (8 returned)
  - `"autocorrect" in HTMLInputElement.prototype OR "autocorrect" in HTMLElement.prototype` — *Locate practical JavaScript snippets and feature detection techniques using the exposed IDL attribute on element prototypes.* (8 returned)
  - `"autocorrect" global attribute (Chrome OR Firefox OR WebKit) "intent to ship" OR "intent to prototype"` — *Discover browser engine tracking threads, standards announcements, and official platform implementation signals.* (8 returned)
  - `site:github.com/whatwg/html "autocorrect" IDL attribute discussion OR issue` — *Uncover standards discussions, web author feedback, and specification rationale for exposing autocorrect in the HTML IDL.* (4 returned)
  - `"HTMLElement.autocorrect" OR "autocorrect" standard attribute web development browser support` — *Evaluate ecosystem adoption sentiment, cross-browser compatibility concerns, and modern web developer consensus.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 275 item(s) inspected

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
