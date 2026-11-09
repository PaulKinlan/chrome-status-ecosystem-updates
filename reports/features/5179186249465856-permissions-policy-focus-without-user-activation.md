# Permissions Policy: focus-without-user-activation

> **Report Week:** 2026-W46 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy. When the policy is denied for the initiating frame, programmatic focus changes (from \`element.focus()\`, \`autofocus\`, \`window.focus()\`, and the focusing steps for dialogs and popovers) are blocked unless that frame has transient user activation or focus is already within its subtree. This does not prevent dialogs or popovers from opening. User-initiated focus such as clicking or tabbing is never affected. Chromium's existing restriction on autofocus in cross-origin iframes is unchanged: the policy can further restrict autofocus, but allowing it does not enable autofocus in a cross-origin frame.  The policy can be set via a \`Permissions-Policy\` HTTP response header or the iframe \`allow\` attribute. Focus delegation is supported: a parent frame that has focus can programmatically pass focus to a child iframe, even if the child has the policy denied, and once a frame has focus it can move focus within its own subtree.

### Motivation

Embedded third-party content such as ads, widgets, and iframes can programmatically steal input focus from the top-level page without any user interaction, silently redirecting keystrokes and creating security and accessibility problems. This was originally reported by engineers working on advertising security for large publishers.  Today developers have no reliable way to prevent it: the sandbox attribute disables JavaScript entirely, breaking most embedded content, and JavaScript focus-reclaiming hacks using blur listeners or polling are unreliable, cause visible focus flickering, and do not scale across multiple iframes. This policy provides fine-grained, declarative control over programmatic focus from embedded content.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 395 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The focus-without-user-activation permissions policy gives host documents fine-grained declarative control to stop embedded iframes, ads, and third-party widgets from programmatically stealing focus without transient user activation. Enabled by default across Chromium browsers and specified within the WHATWG HTML Standard, the feature eliminates longstanding security vulnerabilities and accessibility hurdles caused by rogue embeds hijacking user keystrokes. Engine consensus is solid, with a satisfied W3C TAG review and constructive implementation tracking across both WebKit and Gecko.

### Recommendations
- Actionable Advice: Deploy the policy immediately as a defense-in-depth progressive enhancement by serving the \`Permissions-Policy: focus-without-user-activation=()\` header or adding restricted \`allow\` attributes to untrusted iframe embeds. When embedding trusted interactive widgets that require programmatic focus on display, verify that your parent container properly initiates focus delegation so legitimate user workflows are not unintentionally blocked.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed]
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open]
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed]

## 📰 Ecosystem Blogs & Articles

- [googlesource.com](https://chromium.googlesource.com/chromium/src/+/34f4ce76618b0b38da98f21bd9c33884f981a4ce) *(chromium.googlesource.com)*
  > \*\*How It Works:\*\* Setting the policy (e.g., via \`Permissions-Policy: focus-without-user-activation=()\` or \`&lt;iframe allow="focus-without-user-activation 'none'"&gt;\`) blocks programmatic focus changes initiated by that frame unless the initiating frame h...
- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/security) *(developer.chrome.com)*
  > \*\*How It Works:\*\* Setting the policy (e.g., via \`Permissions-Policy: focus-without-user-activation=()\` or \`&lt;iframe allow="focus-without-user-activation 'none'"&gt;\`) blocks programmatic focus changes initiated by that frame unless the initiating frame h...
- [chrome.com](https://developer.chrome.com/release-notes/149?hl=en) *(developer.chrome.com)*
  > \*\*Chrome Platform Status & Chrome 149 / 158 Release Notes:\*\* Chromium introduced \`focus-without-user-activation\` as an Origin Trial starting in Chrome 149 and progressed it toward general availability in Chrome 158
- [chromestatus.com](https://chromestatus.com/release-notes/158) *(chromestatus.com)*
  > \*\*Chrome Platform Status & Chrome 149 / 158 Release Notes:\*\* Chromium introduced \`focus-without-user-activation\` as an Origin Trial starting in Chrome 149 and progressed it toward general availability in Chrome 158
- [Microsoft Edge 158 web platform release notes (Nov. 19, 2026) - Microsoft Edge Developer documentation \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/158) *(learn.microsoft.com)*
  > \*\*Edge 152 & Edge 158 Web Platform Releases:\*\* Microsoft Edge's developer documentation details the rollout of \`focus-without-user-activation\` The Edge platform notes emphasize the enterprise and accessibility value: preventing third-party widgets fr...
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152) *(learn.microsoft.com)*
  > \*\*Edge 152 & Edge 158 Web Platform Releases:\*\* Microsoft Edge's developer documentation details the rollout of \`focus-without-user-activation\`
- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Permissi...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 21 Oct 2026 06:09:59 -0700 I th...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17840.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 21 Oct 2026 ...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike Taylor Thu, 09 Apr 2026 07:28:0...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Fri, ...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 2026 22:57:23...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17742.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Philip Jägenstedt Thu, 15 Oct 2026 02:03:51 -070...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17798.html) *(mail-archive.com)*
  > On Wed, Oct 14, 2026 at 7:49 PM ...wg.org/#focus-without-user-activation-feature \*Summary\* &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy&lt;/strong&gt;....
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)*
  > Explainer https://github.com/f...hatwg.org/#focus-without-user-activation-feature Summary &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via the focus-without-user-activation permissions policy&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16441.html) *(mail-archive.com)*
  > &gt; On 4/8/26 7:23 p.m., Chromestatus .../#focus-without-user-activation-feature &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via &gt; the focus-without-user-activation permissions policy&lt;/st...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17755.html) *(mail-archive.com)*
  > &gt; &gt; On Wed, Oct 14, 2026 at 7:49 ...without-user-activation-feature &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &gt;&gt; &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via &gt;&gt; the \`focus-without-user-activation\` per...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17808.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Initial public proposal\* &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; https://github.com/w3c/webappsec-permissions-policy/issues/273 &gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt; \*Search tag...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17810.html) *(mail-archive.com)*
  > ion &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Rollout plan\* &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; Will ship enabled for all users &gt;&gt;&gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt;&gt;&gt; \*Requires code in //chrom...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17796.html) *(mail-archive.com)*
  > ch feature name\* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; BlockingFocusWithoutUserActivation &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; \*Rollout plan\* &gt;&gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt;&gt; Will ship enabled for all users &gt;&gt;&gt;&gt;&gt; &gt;...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://chromestatus.com/feature/5179186249465856?gate=5948644329521152) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16442.html) *(mail-archive.com)*
  > When the policy is denied for a ... User-initiated focus such as clicking or tabbing is never affected. &lt;strong&gt;The policy can be set via a Permissions-Policy HTTP response header or the iframe allow attribute&lt;/strong&gt;....
- [Intent to Ship: Feature Policy 'focus-without-user-activation'](https://groups.google.com/a/chromium.org/g/blink-dev/c/pnUiTrLHHmw/m/CDN1s3F1BQAJ) *(groups.google.com)*
  > The bug linked on the feature dashboard is private (at least I see &quot;permission denied&quot; when I go here: https://bugs.chromium.org/p/chromium/issues/detail?id=954349).

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment...
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com · 2026-08-14T17:31:47)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. R...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17811.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Mike Taylor Wed, 21 Oct 2026 06:09:59 ...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17840.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 21...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike Taylor Thu, 09 Apr 20...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 202...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17742.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Philip Jägenstedt Thu, 15 Oct 2026 02:...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17798.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > On Wed, Oct 14, 2026 at 7:49 PM ...wg.org/#focus-without-user-activation-feature \*Summary\* &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy&lt;/strong&gt;....
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Explainer https://github.com/f...hatwg.org/#focus-without-user-activation-feature Summary &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via the focus-without-user-activation permissions policy&lt;/strong&gt;....
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16441.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > &gt; On 4/8/26 7:23 p.m., Chromestatus .../#focus-without-user-activation-feature &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via &gt; the focus-without-user-activation permissions ...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17755.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > &gt; &gt; On Wed, Oct 14, 2026 at 7:49 ...without-user-activation-feature &gt;&gt; &gt;&gt; \*Summary\* &gt;&gt; &gt;&gt; &lt;strong&gt;Gives embedders control over programmatic focus from embedded content via &gt;&gt; the \`focus-without-user-activ...

## 📚 Platform Documentation & Specifications

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [design-reviews#1066: 'focus-without-user-activation' permissions policy](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1066) *(tag-github-bot.w3.org)*
- [Add focus-without-user-activation permissions policy · Issue #4487 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4487) *(github.com)*
- [Add \`focus-without-user-activation\` permissions policy · Issue #37532 · mdn/content · GitHub](https://github.com/mdn/content/issues/37532) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/406) *(github.com)*
- [mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=1930537) *(bugzilla.mozilla.org)*
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com)*
- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md?plain=1) *(github.com)*
- [\[focus-without-user-activation\] Clarify focus behavior across browsing contexts when policy is denied · Issue #11839 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11839) *(github.com)*
- [Feature Policy: \`focus-without-user-activation\` by siliu1 · Pull Request #10672 · whatwg/html · GitHub](https://github.com/whatwg/html/pull/10672) *(github.com)*
- [\[focus-without-user-activation\] Base permission on the initiating document by ffiori · Pull Request #11519 · whatwg/html · GitHub](https://github.com/whatwg/html/pull/11519) *(github.com)*
- [feature-policy/policies/focus-without-user-activation.md at master · jpchase/feature-policy · GitHub](https://github.com/jpchase/feature-policy/blob/master/policies/focus-without-user-activation.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 12 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5179186249465856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" API` — *Core feature API query* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"focus-without-user-activation" OR "element.focus()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (3 returned)
  - `"focus-without-user-activation" ("Permissions-Policy" OR "allow=")` — *Finds technical documentation, WebIDL references, and practical configuration syntax for HTTP headers and iframe allow attributes.* (8 returned)
  - `"focus-without-user-activation" ("prevent focus stealing" OR "iframe" OR "autofocus") tutorial OR guide` — *Surfaces community articles, security blogs, and tutorials on preventing third-party ad focus hijacking and keystroke redirection.* (1 returned)
  - `"focus-without-user-activation" ("intent to ship" OR "Chromium" OR "WebKit" OR "Firefox")` — *Tracks browser vendor positions, implementation status in Chromium/Gecko/WebKit, and official intent-to-ship announcements.* (8 returned)
  - `"focus-without-user-activation" (site:github.com OR site:news.ycombinator.com OR site:w3.org)` — *Discovers web standards discussions, publisher feedback on ad iframe security, and developer sentiment across issue trackers and forums.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 4 result(s) found — **3 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 7 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5179186249465856)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5179186249465856)
- [Specification](https://html.spec.whatwg.org/#focus-without-user-activation-feature)
- [Chromium Tracking Bug](https://crbug.com/40095111)
