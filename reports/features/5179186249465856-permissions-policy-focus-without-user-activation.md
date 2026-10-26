# Permissions Policy: focus-without-user-activation

> **Report Week:** 2026-W44 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy. When the policy is denied for the initiating frame, programmatic focus changes (from \`element.focus()\`, \`autofocus\`, \`window.focus()\`, and the focusing steps for dialogs and popovers) are blocked unless that frame has transient user activation or focus is already within its subtree. This does not prevent dialogs or popovers from opening. User-initiated focus such as clicking or tabbing is never affected. Chromium's existing restriction on autofocus in cross-origin iframes is unchanged: the policy can further restrict autofocus, but allowing it does not enable autofocus in a cross-origin frame.  The policy can be set via a \`Permissions-Policy\` HTTP response header or the iframe \`allow\` attribute. Focus delegation is supported: a parent frame that has focus can programmatically pass focus to a child iframe, even if the child has the policy denied, and once a frame has focus it can move focus within its own subtree.

### Motivation

Embedded third-party content such as ads, widgets, and iframes can programmatically steal input focus from the top-level page without any user interaction, silently redirecting keystrokes and creating security and accessibility problems. This was originally reported by engineers working on advertising security for large publishers.  Today developers have no reliable way to prevent it: the sandbox attribute disables JavaScript entirely, breaking most embedded content, and JavaScript focus-reclaiming hacks using blur listeners or polling are unreliable, cause visible focus flickering, and do not scale across multiple iframes. This policy provides fine-grained, declarative control over programmatic focus from embedded content.

## Ecosystem Status

- **Momentum:** Moderate (footprint 355 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`focus-without-user-activation\` permissions policy delivers declarative embedder control to stop nested iframes, ad units, and third-party widgets from silently hijacking user focus and keystrokes. Refined via WHATWG HTML specifications and endorsed following a satisfied W3C TAG design review, the feature has reached general availability in Chromium with active co-development from Microsoft. Broad ecosystem consensus backs the feature, particularly after clarifying focus delegation and intra-subtree focus management once a frame legitimately acquires focus.

### Recommendations
- Actionable Advice: Teams embedding untrusted or third-party content should progressively adopt \`focus-without-user-activation 'none'\` or \`'self'\` via HTTP response headers and iframe \`allow\` attributes today. Widget authors should ensure their components rely on explicit transient user activation or parent focus delegation rather than executing unprompted programmatic focus calls.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed]
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open]
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/release-notes/149) *(developer.chrome.com)*
  > \*\*Status Tracking:\*\* Initially introduced behind the \`BlockingFocusWithoutUserActivation\` flag and run through Chrome Origin Trials starting in \*\*Chrome 149\*\*, targeted for full shipping in \*\*Chrome 158\*\*
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Status Tracking:\*\* Initially introduced behind the \`BlockingFocusWithoutUserActivation\` flag and run through Chrome Origin Trials starting in \*\*Chrome 149\*\*, targeted for full shipping in \*\*Chrome 158\*\*
- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/34f4ce76618b0b38da98f21bd9c33884f981a4ce) *(chromium.googlesource.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/151) *(learn.microsoft.com)*
  > \*\*Edge 151 – 153 Updates:\*\* Microsoft Edge detailed the feature in their web platform developer notes, reflecting active contributions by Microsoft engineers to the Chromium implementation and the WHATWG standard
- [appspot.com](https://cr-status.appspot.com/feature/5179186249465856?gate=6506907767537664) *(cr-status.appspot.com)*
  > \*\*Enterprise Adoption:\*\* Discussions on Chromium review threads and tracker issues noted early real-world adoption by large-scale host apps like \*\*Microsoft Teams\*\* to isolate embedded apps and tabs from stealing focus away from main communications
- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Permissi...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 21 Oct 2026 06:09:59 -0700 I th...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 2026 22:57:23...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Fri, ...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus Wed, 08 Apr 2026 16:33:18 -0700...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)*
  > \*Explainer\* https://github.com... https://html.spec.whatwg.org/#focus-without-user-activation-feature \*Summary\* &lt;strong&gt;Gives embedders control over programmatic focus from embedded content&lt;/strong&gt; via the focus-without-user-activation permissions p...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://chromestatus.com/feature/5179186249465856?gate=5948644329521152) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17742.html) *(mail-archive.com)*
  > &gt; &gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt; &gt; Yes &gt; &gt; \*Is this feature fully tested by web-platform-tests &gt; &lt;https://chromium.googlesour...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17755.html) *(mail-archive.com)*
  > When the policy is &gt;&gt; denied for ... User-initiated focus such as clicking or &gt;&gt; tabbing is never affected. &lt;strong&gt;The policy can be set via a \`Permissions-Policy\` &gt;&gt; HTTP response header or the iframe \`allow\` attribute&lt;/strong&gt;......
- [Intent to Ship: Feature Policy 'focus-without-user-activation'](https://groups.google.com/a/chromium.org/g/blink-dev/c/pnUiTrLHHmw/m/CDN1s3F1BQAJ) *(groups.google.com)*
  > \* The Chrome Platform Status still links to a hidden bug.
- [Implement and Ship Feature Policy for Programmatic Focus \[40095111\] - Chromium](https://issues.chromium.org/issues/40095111) *(issues.chromium.org)*
  > &lt;strong&gt;Add a #blocking-focus-without-user-activation flag to chrome://flags&lt;/strong&gt; so developers can enable the focus-without-user-activation permissions policy enforcement without enabling all experimental web platform features via #enable-experi...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://img120-dot-cr-status.appspot.com/feature/5179186249465856) *(img120-dot-cr-status.appspot.com · 2026-10-21T18:28:55)*
  > Sign in with GoogleSign in with Google. Opens in new tab

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 21 Oct 2026 06:09:59 ...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 202...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus Wed, 08 Apr 2026 16:3...

## 📚 Platform Documentation & Specifications

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com)*
- [Add focus-without-user-activation permissions policy · Issue #4487 · web-platform-dx/web-features](https://github.com/web-platform-dx/web-features/issues/4487) *(github.com)*
- [github.com](https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/153.md) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/11839) *(github.com)*
- [github.com](https://github.com/w3ctag/design-reviews/issues/1066) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/406) *(github.com)*
- [github.com](https://github.com/mozilla/standards-positions/issues/1080) *(github.com)*
- [\[focus-without-user-activation\] Base permission on the initiating document by ffiori · Pull Request #11519 · whatwg/html](https://github.com/whatwg/html/pull/11519) *(github.com)*
- [\[focus-without-user-activation\] Restricted frames should not be authorized by the target frame's user activation · Issue #12470 · whatwg/html](https://github.com/whatwg/html/issues/12470) *(github.com)*
- [Should \`focus-without-user-activation\` be able to allow cross-origin autofocus? · Issue #13105 · whatwg/html](https://github.com/whatwg/html/issues/13105) *(github.com)*
- [Feature Policy: \`focus-without-user-activation\` by siliu1 · Pull Request #10672 · whatwg/html](https://github.com/whatwg/html/pull/10672) *(github.com)*
- [feature-policy/policies/focus-without-user-activation.md at master · jpchase/feature-policy](https://github.com/jpchase/feature-policy/blob/master/policies/focus-without-user-activation.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 63 result(s) found across 12 planned queries — **20 verified relevant**
  - `"chromestatus.com/feature/5179186249465856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" API` — *Core feature API query* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"focus-without-user-activation" OR "element.focus()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Permissions-Policy" "focus-without-user-activation" iframe allow` — *Discovers code snippets, HTTP headers, and iframe attribute syntax implementing the focus-without-user-activation policy.* (8 returned)
  - `"focus-without-user-activation" (tutorial OR guide OR "how to") iframe focus` — *Finds developer tutorials and articles explaining how to prevent iframe focus stealing using modern Permissions Policy directives.* (8 returned)
  - `"focus-without-user-activation" ("Intent to Ship" OR "Chrome Platform Status" OR "WebKit" OR "Firefox")` — *Tracks browser vendor positions, implementation progress, and Intent to Ship announcements across browser engines.* (8 returned)
  - `"focus-without-user-activation" ("ad" OR "keystroke" OR "security" OR "autofocus") (site:github.com OR site:news.ycombinator.com)` — *Surfaces community and publisher discussions regarding ad security, iframe keystroke hijacking, and accessibility impacts.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **14 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 6 result(s) found — **6 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5179186249465856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5179186249465856)
- [Specification](https://html.spec.whatwg.org/#focus-without-user-activation-feature)
- [Chromium Tracking Bug](https://crbug.com/40095111)
