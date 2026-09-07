# Update text selection on mouseup before dispatching click event

> **Report Week:** 2026-W37 | **Milestone:** Chrome 150 | **Category:** In developer trial (Behind a flag)

## Overview

Currently Chromium applies the default action of a mouseup event (e.g. collapsing or committing a drag-selection in a text input) after the click event has already been dispatched. This violates developer expectations: a click handler that reads selection state sees stale data from before the mouseup default action ran.
This change moves the mouseup default-action step to run before the click event is dispatched, so that selection (and any other mouseup side effects) is already settled when click handlers execute.

### Motivation

In Chromium, the mouseup default action (e.g. committing a drag-selection) fires after the click event. As a result, click handlers that read window.getSelection() or input.selectionStart/End see stale selection state and must work around this with setTimeout or a separate selectionchange listener.

## Ecosystem Status

- **Momentum:** High (450 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Positive / High Interest
- **Executive Take:** Update text selection on mouseup before dispatching click event is currently In developer trial (Behind a flag) in Chrome 150. Verified ecosystem momentum is High with Chromium-Led standards alignment and positive / high interest developer pulse.

### Recommendations
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFJLHIWUxx_9Rs20yOJXt7yK5FrkalUspF9BzmZPiVl8M9sR7iZYeIx1IbUUQ1T-WvG7YQXpWQvUfHf0Jc28gLycQuDHhRUTXCzTvUfiJNW_9FywTjU-75vMlV9z4MAFqieoJm8Rdi9qfu_y8c=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [chromestatuslite.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEnnaw86nk2mE4PoQS_nCw7-CyCHN2o-aeChJhtUwuQGIlaOOh03yA_AQ26CNUvElaCsTpHBfFP1aQpKiLevTpidh7_ucldvA3Wv0DqcVkAy83gt7ixUGwuCjmSiEUR6Q==) *(vertexaisearch.cloud.google.com)*
  > Chrome Release 150 Chrome Release Summary Chrome version: 154 153 152 151 150 149 148 147 +147 146 145 144 143 142 141 140 139 138 137 136 135 134 133 132 131 130 129 128 127 126 125 124 123 122 121 120 119 118 117 116 115 114 113 112 111 110 109 108...
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGNWzr26qD4d30cl8eJj9nJKnVAxPBzfQxGuI-IKmp4v5fFrxCSN9dKLclGMKZg0Fo_JKoNX1LoV8wrEJco8IKPzEzCyFZmqQZpqSZXH2rj3YKrdFf_h1i0tT0lDUTSk9II) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFopORV_5vU87cglgQ7ePWI62znDViq_sasLvE0QPe2nr_dcSOnA9tFPSlz3pFgRjbXukyHl8V4alg5waB5IbaaJS9hWNl3d7FB1o8zIoHSmtzsteaEyL62BlkFUI_Dbo4yOMW_4Vhku-q_-5k=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [appspot.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH9EIqckYdYCEhcILOt6rrLEcqs5W1AVkvY0xOQrS9SR25qrtiOZN0A5PGBTqmheWrmnFImOZEUA3Klcru_VXbD_NM_lQ79m3Wtcb3GR_ltAAN4AmOmpYwgC4GuwdqRrD28o70qmxfCiVt7z7Q=) *(vertexaisearch.cloud.google.com)*
  > Chrome Platform Status
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHLho5mTbFNpCndYFSOGgjvKaVs7q6zkx9PmPqyFTe9fZ3VuduERHoRP7W1MueLFxPtvI101xkrpldxciYkTWlaGgjBy_RdAdGRCZiL5jwDkr5c0UaDMrGmw_UYkCvOL651lyLEOPyW54nzZW-4SEzSFA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFbLvQUqztf9Ko_OTQ626E16s9wUpucb81u6rubmOpOOpuRh8_qQVTt8primhSv6w_gt8TX3IOlLpK6CGhtdSLddzakdaO2cZS5Fmgw0onKxcItKsYl47DHO1acP4s5x2PK_YtEo0qqxKtfZkqOIRvj7Q==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEddlJqWqMwt5C6VO0h_wES2NInoWkooisZZTnBGURflOVBz4ZwRSQFH9PlHY4AdUPKHdX3eE8sdUkk1DNHRkei8tZfP799fS8m6P3eft11iZe9rqyxAJyUX1MvGbkapMSoSx03O8yrodhV-3i3KLShPw==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [mozaic.fm](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGQ0wqTmXk837E9ZwWID55fDFm6UJUAXHpglnW5NqqGrMWOTb88DjENB2B1ZD9ElHYYf-Fdn_1D3Sh7eCFupgB86eiDSe-lMPew5QrCaTIQZV2Cs6pkmwWZgPZbSYXd9u_jJ3bjHo1s2ccli5bfdbZcA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEOWb9rv7vATGUJvkQZjNQa_mE8_tDBMNwJuHGOWj9JKsaM9od5Bf6eJrMsArCJkkttycs0BcKedegRyjmOMX1j8GCoe3IkwATl3k7Jpn6fCzKaGQpc3rVSTtg=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGGhHPK_1N5wib4-XXzUOb1ib0kOOlq88xzB9IWl9okDgV5O6WRyTKY2qdfpqdtWhB5M3WtIWWBzD9zbbdXoOf8oYIrzYl4v3iAyTNRmgCblGvtzWHFqI18Kp_Ry2f4Yd5j5x1Q) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  **"Update text selection on mouseup before dispatching click event"** addresses a long-standing event-ordering and state inconsistency in Chromium:  * **The Problem:** Previously, Chromium deferred the execution of `mouseu
- [Re: [blink-dev] Web-Facing Change PSA: Update text selection on mouseup before dispatching click event](http://www.mail-archive.com/blink-dev@chromium.org/msg16613.html) *(mail-archive.com)*
  > Yes *Tracking bug* https://issues.chromium.org/issues/40686462 *Estimated milestones* Shipping on desktop 152 DevTrial on desktop 150 Shipping on Android 152 DevTrial on Android 150 Shipping on WebView 152 *Link to entry on the Chrome Platform Status...
- [window.getSelection() on mouseup returns previous selection](https://stackoverflow.com/questions/26434222/window-getselection-on-mouseup-returns-previous-selection) *(stackoverflow.com)*
  > function getSelectionAfter2Seconds() { return new Promise(resolve =&gt; { setTimeout(() =&gt; { resolve(window.getSelection().toString()); }, 2000); }); } async function asyncCall() { console.log(&#x27;calling&#x27;); const result = await getSelectio...
- [window.getSelection() for contenteditable div *on click*](https://stackoverflow.com/questions/32170315/window-getselection-for-contenteditable-div-on-click) *(stackoverflow.com · 2016-11-07T00:00:00)*
  > I know the actual getSelection() works, because if I wrap window.getSelection().toString() in a setTimeout of 5 seconds, after 5 seconds, I get the selected text!
- [Wrong selectionStart/SelectionEnd after FIRST click on selected text in text input [41157876] - Chromium](https://issues.chromium.org/issues/41157876) *(issues.chromium.org)*
  > A possible temporary workaround is to <strong>delay reading of selectionStart/selectionEnd values</strong>: setTimeout(function () { console.log(myinput.selectionStart, &#x27; - &#x27;, myinput.selectionStart); }, 0); On IE11, on the other hand, a ve...
- [plugins/selection/plugin.js - CKSource - CKEditor](https://docs-old.ckeditor.com/ckeditor_api/symbols/src/plugins_selection_plugin.js.html) *(docs-old.ckeditor.com)*
  > 44 45 checkSelectionChangeTimeoutPending = true; 46 47 if ( checkSelectionChangeTimer ) 48 return; 49 50 checkSelectionChangeTimeoutExec.call( this ); 51 52 checkSelectionChangeTimer = CKEDITOR.tools.setTimeout( checkSelectionChangeTimeoutExec, 200, ...
- [Selection and Range](https://javascript.info/selection-range) *(javascript.info · 2023-07-16T00:00:00)*
  > So, <strong>by setting selectionStart and selectionEnd to the same value, we move the cursor</strong>. ... &lt;textarea id=&quot;area&quot; style=&quot;width:80%;height:60px&quot;&gt; Focus on me, the cursor will be at position 10.
- [javascript - Why getSelection() always returns nothing?](https://stackoverflow.com/questions/34846026/why-getselection-always-returns-nothing) *(stackoverflow.com)*
  > They generally use the mousedown event to get the selection, then replacing the selection with something like &lt;b&gt;selected text&lt;/b&gt; etc. and then <strong>use mouseup to reset the focus back to the text, and mark the selection again</strong...
- [input field properties selectionStart / selectionEnd updated with delay](https://stackoverflow.com/questions/65490184/input-field-properties-selectionstart-selectionend-updated-with-delay) *(stackoverflow.com · 2020-12-29T00:00:00)*
  > Two EventListener (click and select) log input fields properties selectionStart and selectionEnd. Select a range (with double click or mouse selection) inside the input field, the EventListener for
- [jquery - Selected text event trigger in Javascript - Stack Overflow](https://stackoverflow.com/questions/3545018/selected-text-event-trigger-in-javascript) *(stackoverflow.com)*
  > Copyconst p = document.getElementById(&#x27;interactiveText&#x27;); p.addEventListener(&#x27;mouseup&#x27;, (e) =&gt; { const selection = window.getSelection().toString(); if (selection === &#x27;&#x27;) { console.log(&#x27;click&#x27;); } else { con...
- [Trigger text selection while mouse is down ( window.getSelection() is empty until mouseup )](https://stackoverflow.com/questions/46475125/trigger-text-selection-while-mouse-is-down-window-getselection-is-empty-unti) *(stackoverflow.com)*
  > $(function() { app_init(); }); function app_init() { container = $(&#x27;div&#x27;); selection = false; word = false; start = false; end = false; if(window.getSelection) { selection = window.getSelection(); selection.empty(); } else { alert(&#x27;Ple...
- [How should Selection selectfinish/selectend event be implemented?](https://stackoverflow.com/questions/49059855/how-should-selection-selectfinish-selectend-event-be-implemented) *(stackoverflow.com)*
  > <strong>document.addEventListener(&#x27;mouseup&#x27;, e =&gt; { var s = document.getSelection(); if (!s.isCollapsed) { // do sth with selection } });</strong>
- [Get Selected Text And Cursor Position With JavaScript To Show Popup Dialog - Andreas Wik](https://awik.io/get-selected-text-and-cursor-position-javascript-to-show-popup-dialog) *(awik.io · 2024-07-08T21:00:55)*
  > const article = document.getElementById(&quot;article&quot;); // On mouseup article.addEventListener(&#x27;mouseup&#x27;, handlerFunction, false); // Mouse up event handler function function handlerFunction(event) { // ... get selected text } Inside ...
- [Select Events (selectstart, selection change)](https://www.datacadamia.com/web/dom/event/select) *(datacadamia.com · 2024-08-30T10:08:53)*
  > &lt;textarea cols=50 rows=5&gt; Select this text, one letter at a time and see that the element is fired on mouseup &lt;/textarea&gt; &lt;p&gt;Select this text in a p element and see that the &lt;mark&gt;select&lt;/mark&gt; event is not fired&lt;/p&g...
- [Leveraging the getSelection() Method](https://reintech.io/blog/leveraging-the-getselection-method-for-javascript-contract-developers) *(reintech.io)*
  > function getSelectedText() { const selection = window.getSelection(); // Check if anything is selected if (selection.rangeCount === 0) { return null; } // Get the selected text as a string const selectedText = selection.toString(); if (selectedText.l...
- [Mouse events](https://javascript.info/mouse-events-basics) *(javascript.info)*
  > In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order <strong>mousedown → mouseup → click</strong>.
- [Intent to Ship: Send Mouse Events to Disabled Form Controls](https://groups.google.com/a/chromium.org/g/blink-dev/c/KHXNJINUrj0) *(groups.google.com)*
  > to smaug, Rick Byers, PhistucK, Chris Harrelson, Dave Tapuska, blink-dev · If I&#x27;m reading this thread right, we intent is to match Firefox and additionally dispatch mousedown and mouseup.
- [[blink-dev] Ready for Developer Testing: Update text selection on mouseup before dispatching click event](http://www.mail-archive.com/blink-dev@chromium.org/msg16542.html) *(mail-archive.com)*
  > This change moves the mouseup default-action step to <strong>run before the click event is dispatched</strong>, so that selection (and any other mouseup side effects) is already settled when click handlers execute. Blink component Blink&gt;Input Web ...
- [[blink-dev] Web-Facing Change PSA: Update text selection on mouseup before dispatching click event](http://www.mail-archive.com/blink-dev@chromium.org/msg16608.html) *(mail-archive.com)*
  > This change moves the mouseup default-action step to <strong>run before the click event is dispatched</strong>, so that selection (and any other mouseup side effects) is already settled when click handlers execute. Blink component Blink&gt;Input Web ...
- [Intent to Implement: Send mouse back/forward buttons to javascript](https://groups.google.com/a/chromium.org/g/blink-dev/c/3DjSQKQzKz8) *(groups.google.com)*
  > Send mouse events (mousedown, auxclick, mouseup) for back and forward buttons on mice with 5 or more buttons · Some web applications would like to take advantage of the additional buttons on mice overriding the default user agent activity for these b...
- [Intent to Ship: Send mouse back/forward buttons to javascript](https://groups.google.com/a/chromium.org/g/blink-dev/c/MrKpBV26ik4/m/D_zmoAJrAQAJ) *(groups.google.com)*
  > Send mouse events (pointerdown, mousedown, auxclick, pointerup, mouseup) for back and forward buttons on mice with 5 or more buttons.. Link to “Intent to Implement” blink-dev discussion
- [Chrome Developer Tools - monitorEvents - Brian Grinstead](https://briangrinstead.com/blog/chrome-developer-tools-monitorevents) *(briangrinstead.com)*
  > mouse: &quot;mousedown&quot;, &quot;mouseup&quot;, &quot;click&quot;, &quot;dblclick&quot;, &quot;mousemove&quot;, &quot;mouseover&quot;, &quot;mouseout&quot;, &quot;mousewheel&quot; key: &quot;keydown&quot;, &quot;keyup&quot;, &quot;keypress&quot;, ...
- [Right-click should fire mouseup event after contextmenu [40425377] - Chromium](https://issues.chromium.org/issues/40425377) *(issues.chromium.org)*
  > Note that in #3, we shouldn&#x27;t dispatch a synthetic mouseup if the mouse is still down. ... https://crbug.com/chromium/373125 has the added complexity of the touch IDs etc. To me it seems less brittle / hacky if we could somehow have chromium for...
- [Click, mousedown, mouseup and others event not firing ...](https://issues.chromium.org/issues/40251844) *(issues.chromium.org)*
  > Sign in
- [Right click context menu eats mouseup events when ...](https://issues.chromium.org/issues/40935507) *(issues.chromium.org)*
  > Sign in
- [Right-click context menu shouldn't show before mouseup. [41029299] - Chromium](https://issues.chromium.org/issues/41029299) *(issues.chromium.org)*
  > Chrome Version : 4.0.223.11 (Official Build 29902) OS version : 10.5.8 Behavior in Safari 3.x/4.x (if applicable): Same issue. Behavior in Firefox 3.x (if applicable): Fine. Behavior in Chrome for Windows: Fine. The right-click context menu shows rig...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Re: [blink-dev] Web-Facing Change PSA: Update text selection on mouseup before dispatching click event](http://www.mail-archive.com/blink-dev@chromium.org/msg16613.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5298387739082752`)*
  > Yes *Tracking bug* https://issues.chromium.org/issues/40686462 *Estimated milestones* Shipping on desktop 152 DevTrial on desktop 150 Shipping on Android 152 DevTrial on Android 150 Shipping on WebView 152 *Link to entry on the Chrome Platf...

## 📚 Platform Documentation & Specifications

- [1026997 - InputContext selectionchange event fires too late if going from selected text to unselected](https://bugzilla.mozilla.org/show_bug.cgi?id=1026997) *(bugzilla.mozilla.org)*
- [Element: mouseup event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event) *(developer.mozilla.org)*
- [Why does `preventDefault()` in `pointer` events break `mouse` events? · Issue #917 · whatwg/dom](https://github.com/whatwg/dom/issues/917) *(github.com)*
- [How to spec user interaction for select · Issue #10762 · whatwg/html](https://github.com/whatwg/html/issues/10762) *(github.com)*
- [Pointerup and mouseup events stop firing when the click was started on top of another element on Chromium based browsers. · Issue #433 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/433) *(github.com)*
- [Clarify `mousedown` event target if the preceding `pointerdown` event listener removes the target · Issue #492 · w3c/pointerevents](https://github.com/w3c/pointerevents/issues/492) *(github.com)*
- [TextUpdateEvent: selectionEnd property](https://developer.mozilla.org/en-US/docs/Web/API/TextUpdateEvent/selectionEnd) *(developer.mozilla.org)*
- [TextUpdateEvent: selectionStart property](https://developer.mozilla.org/en-US/docs/Web/API/TextUpdateEvent/selectionStart) *(developer.mozilla.org)*
- [TextUpdateEvent: TextUpdateEvent() constructor](https://developer.mozilla.org/en-US/docs/Web/API/TextUpdateEvent/TextUpdateEvent) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 31 result(s) found across 5 planned queries — **31 verified relevant**
  - `"chromestatus.com/feature/5298387739082752" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"selectionStart" OR "getSelection" "click" "mouseup" "setTimeout" stale selection` — *Finds developer blog posts, troubleshooting threads, and tutorials addressing the common workaround of using setTimeout to read text selection in click handlers.* (8 returned)
  - `addEventListener("click") ("window.getSelection()" OR "selectionStart") "mouseup"` — *Surfaces real-world JavaScript code snippets and examples where developers inspect text selection states inside click and mouseup event listeners.* (8 returned)
  - `"mouseup" default action "click" event selection Chromium OR "blink-dev" OR "Intent to"` — *Locates Chrome/Chromium announcements, 'Intent to Ship' threads, and browser platform tracking regarding the reordering of mouseup default action before click dispatch.* (8 returned)
  - `"click" "mouseup" default action order text selection (site:github.com/whatwg OR site:github.com/w3c OR site:issues.chromium.org)` — *Finds spec standardization debates, browser interop tickets, and Chromium bug reports discussing mouse event dispatch ordering and selection state synchronization.* (8 returned)
- **Google Search Grounding (gemini-3.7-flash):** 11 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 item(s) inspected
- **Engine Bug Trackers:** 0 item(s) inspected
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 0 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5298387739082752)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5298387739082752)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40686462)
