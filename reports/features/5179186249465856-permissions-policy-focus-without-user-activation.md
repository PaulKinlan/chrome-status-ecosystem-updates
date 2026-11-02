# Permissions Policy: focus-without-user-activation

> **Report Week:** 2026-W45 | **Milestone:** Chrome 158 | **Category:** Enabled by default

## Overview

Gives embedders control over programmatic focus from embedded content via the \`focus-without-user-activation\` permissions policy. When the policy is denied for the initiating frame, programmatic focus changes (from \`element.focus()\`, \`autofocus\`, \`window.focus()\`, and the focusing steps for dialogs and popovers) are blocked unless that frame has transient user activation or focus is already within its subtree. This does not prevent dialogs or popovers from opening. User-initiated focus such as clicking or tabbing is never affected. Chromium's existing restriction on autofocus in cross-origin iframes is unchanged: the policy can further restrict autofocus, but allowing it does not enable autofocus in a cross-origin frame.  The policy can be set via a \`Permissions-Policy\` HTTP response header or the iframe \`allow\` attribute. Focus delegation is supported: a parent frame that has focus can programmatically pass focus to a child iframe, even if the child has the policy denied, and once a frame has focus it can move focus within its own subtree.

### Motivation

Embedded third-party content such as ads, widgets, and iframes can programmatically steal input focus from the top-level page without any user interaction, silently redirecting keystrokes and creating security and accessibility problems. This was originally reported by engineers working on advertising security for large publishers.  Today developers have no reliable way to prevent it: the sandbox attribute disables JavaScript entirely, breaking most embedded content, and JavaScript focus-reclaiming hacks using blur listeners or polling are unreliable, cause visible focus flickering, and do not scale across multiple iframes. This policy provides fine-grained, declarative control over programmatic focus from embedded content.

## Ecosystem Status

- **Momentum:** Emerging (no earlier number to compare with yet; footprint 365 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Positive
- **Executive Take:** The \`focus-without-user-activation\` Permissions Policy establishes a declarative mechanism to prevent embedded frames from hijacking input focus without user interaction. Enabled by default in Chromium and standardized within WHATWG HTML, it resolves longstanding security and accessibility vulnerabilities caused by malicious or aggressive third-party ad iframes. The broader web standards consensus is favorable, with formal backing from W3C TAG and positive tracking across browser engines \[ca25361ca63c107e\].

### Recommendations
- Actionable Advice: Publishers embedding untrusted third-party widgets or programmatic ads should adopt \`Permissions-Policy: focus-without-user-activation=()\` via HTTP headers or restrict it via iframe \`allow\` attributes today \[ca25361ca63c107e\]. Because unsupported browsers safely ignore unrecognized policy directives, it can be deployed immediately as progressive defensive hardening.
- Shipping enabled by default in Chrome 158. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @aprotyas: "Given our supportive position, there's now a bug tracking the WebKit implementation for \`focus-without-user-activation\`: https://bugs.webkit.org/show\_..."
- Standards Activity (Mozilla): Latest discussion from @ffiori: "cc @smaug---- @zcorpan..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [\`focus-without-user-activation\` feature policy](https://github.com/WebKit/standards-positions/issues/406) [closed]
- **Mozilla:** [\`focus-without-user-activation\` feature policy](https://github.com/mozilla/standards-positions/issues/1080) [open]
- **W3C TAG:** ['focus-without-user-activation' permissions policy](https://github.com/w3ctag/design-reviews/issues/1066) [closed]

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://developer.chrome.com/docs/modern-web-guidance/guides/security/security) *(developer.chrome.com)*
  > \*\*How It Works:\*\* Embedders can disable this behavior using HTTP headers (\`Permissions-Policy: focus-without-user-activation=()\`) or the iframe attribute (\`allow="focus-without-user-activation 'none'"\` or leaving it out when defaulted) \*\*Modern Web G...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://chromestatus.com/feature/5179186249465856?gate=5948644329521152) *(chromestatus.com)*
  > \*\*Chrome 148 / 149 Beta & Origin Trials:\*\* Chromium introduced this feature through an Origin Trial running from Chrome 149 through Chrome 152 across Desktop, Android, and WebView platforms under the tracking flag \`BlockingFocusWithoutUserActivation\`
- [chrome.com](https://developer.chrome.com/blog/chrome-149-beta) *(developer.chrome.com)*
  > \*\*Chrome 148 / 149 Beta & Origin Trials:\*\* Chromium introduced this feature through an Origin Trial running from Chrome 149 through Chrome 152 across Desktop, Android, and WebView platforms under the tracking flag \`BlockingFocusWithoutUserActivation\`
- [microsoft.com](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150) *(learn.microsoft.com)*
  > \*\*Microsoft Edge 150 Platform Release Notes:\*\* Microsoft Edge announced developer availability and support for the origin trial
- [chromium.org](https://issues.chromium.org/issues/40053940) *(issues.chromium.org)*
  > \*\*W3C TAG Review (#1066) & Mozilla:\*\* The W3C Technical Architecture Group (TAG) and Mozilla developers reviewed the feature positively, specifically noting its utility in combating notorious malvertising exploits (such as historical \*eGobbler\* campa...
- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment: Permissi...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17810.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Yoav Weiss (@Shopify) Wed, 21 Oct 2026 04:05:04 ...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike Taylor Thu, 09 Apr 2026 07:28:0...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 2026 22:57:23...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus Wed, 08 Apr 2026 16:33:18 -0700...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17701.html) *(mail-archive.com)*
  > A short origin trial feedback update: Microsoft Teams has rolled out the \`focus-without-user-activation\` policy in public preview and reported positive results with the current Chromium implementation. The policy &lt;strong&gt;gives the host appropriate co...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17793.html) *(mail-archive.com)*
  > &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, &gt;&gt;&gt;&gt; Mac, Linux, ChromeOS, Android, and Android WebView)?\* &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; Yes &gt;&gt;&gt;&gt; &gt;&gt;&gt;&gt; \*Is ...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17755.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; \*Will this feature be supported on all six Blink platforms (Windows, Mac, &gt;&gt; Linux, ChromeOS, Android, and Android WebView)?\* &gt;&gt; &gt;&gt; Yes &gt;&gt; &gt;&gt; \*Is this feature fully tested by web-platform-tests &gt;&gt;...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17796.html) *(mail-archive.com)*
  > When the &gt;&gt;&gt;&gt;&gt; policy &gt;&gt;&gt;&gt;&gt; is ... such as clicking &gt;&gt;&gt;&gt;&gt; or &gt;&gt;&gt;&gt;&gt; tabbing is never affected. &lt;strong&gt;The policy can be set via a &gt;&gt;&gt;&gt;&gt; \`Permissions-Policy\` &gt;&gt;&gt;&gt;&g...
- [Permissions Policy: focus-without-user-activation - Chrome Platform Status](https://img120-dot-cr-status.appspot.com/feature/5179186249465856) *(img120-dot-cr-status.appspot.com · 2026-10-21T18:28:55)*
  > Sign in with GoogleSign in with Google. Opens in new tab
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17798.html) *(mail-archive.com)*
  > On Wed, Oct 14, 2026 at 7:49 PM ... https://html.spec.whatwg.org/#focus-without-user-activation-feature \*Summary\* &lt;strong&gt;Gives embedders control over programmatic focus from embedded content&lt;/strong&gt; via the \`focus-without-user-activation\` permissio...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16441.html) *(mail-archive.com)*
  > &gt; On 4/8/26 7:23 p.m., Chromestatus ... https://html.spec.whatwg.org/#focus-without-user-activation-feature &gt; &gt; \*Summary\* &gt; &lt;strong&gt;Gives embedders control over programmatic focus from embedded content&lt;/strong&gt; via &gt; the focus-without-...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Intent to Experiment: Permissions Policy: focus-without-user-activation](https://groups.google.com/a/chromium.org/g/blink-dev/c/GLmp1IrJ4Ig) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5179186249465856`)*
  > Intent to Experiment: Permissions Policy: focus-without-user-activation Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Experiment...
- [Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17810.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Yoav Weiss (@Shopify) Wed, 21 Oct 2026...
- [Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](https://www.mail-archive.com/blink-dev@chromium.org/msg16301.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Mike Taylor Thu, 09 Apr 20...
- [\[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg17736.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Ship: Permissions Policy: focus-without-user-activation 'Fernando Fiori' via blink-dev Wed, 14 Oct 202...
- [\[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation](http://www.mail-archive.com/blink-dev@chromium.org/msg16291.html) *(mail-archive.com)* *(Cites: `https://github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md`)*
  > \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Permissions Policy: focus-without-user-activation Chromestatus Wed, 08 Apr 2026 16:3...

## 📚 Platform Documentation & Specifications

- [webappsec-permissions-policy/policies/focus-without-user-activation.md at main · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/blob/main/policies/focus-without-user-activation.md) *(github.com)*
- [\[focus-without-user-activation\] Clarify focus behavior across browsing contexts when policy is denied · Issue #11839 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/11839) *(github.com)*
- [github.com](https://github.com/mdn/content/issues/37532) *(github.com)*
- [github.com](https://github.com/mdn/browser-compat-data/issues/30985) *(github.com)*
- [github.com](https://github.com/whatwg/html/issues/12067) *(github.com)*
- [github.com](https://github.com/WebKit/standards-positions/issues/406) *(github.com)*
- [Add focus-without-user-activation permissions policy · Issue #4487 · web-platform-dx/web-features · GitHub](https://github.com/web-platform-dx/web-features/issues/4487) *(github.com)*
- [Permissions Policy: focus-without-user-activation · Issue #1324 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1324) *(github.com)*
- [\[focus-without-user-activation\] Base permission on the initiating document by ffiori · Pull Request #11519 · whatwg/html · GitHub](https://github.com/whatwg/html/pull/11519) *(github.com)*
- [design-reviews#1066: 'focus-without-user-activation' permissions policy](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1066) *(tag-github-bot.w3.org)*
- [Feature Policy: \`focus-without-user-activation\` by siliu1 · Pull Request #10672 · whatwg/html · GitHub](https://github.com/whatwg/html/pull/10672) *(github.com)*
- [\[focus-without-user-activation\] Update explainer by ffiori · Pull Request #584 · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/pull/584) *(github.com)*
- [\[focus-without-user-activation\] Add pseudo algorithm and examples by ffiori · Pull Request #574 · w3c/webappsec-permissions-policy · GitHub](https://github.com/w3c/webappsec-permissions-policy/pull/574) *(github.com)*
- [Should \`focus-without-user-activation\` be able to allow cross-origin autofocus? · Issue #13105 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/13105) *(github.com)*
- [\[focus-without-user-activation\] Restricted frames should not be authorized by the target frame's user activation · Issue #12470 · whatwg/html · GitHub](https://github.com/whatwg/html/issues/12470) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 56 result(s) found across 13 planned queries — **24 verified relevant**
  - `"chromestatus.com/feature/5179186249465856" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/ffiori/webappsec-permissions-policy/blob/focus-without-user-activation-explainer/policies/focus-without-user-activation.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (5 returned)
  - `"html.spec.whatwg.org" -site:html.spec.whatwg.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" API` — *Core feature API query* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"focus-without-user-activation" OR "element.focus()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Permissions Policy: focus-without-user-activation" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"focus-without-user-activation" (iframe allow OR "Permissions-Policy")` — *Searches for practical implementation syntax, HTTP header configurations, and iframe allow attribute examples.* (8 returned)
  - `"focus-without-user-activation" ("prevent iframe focus" OR "stealing focus" OR "ad security") (tutorial OR guide OR blog)` — *Finds developer guides and tutorials addressing how to stop embedded widgets and third-party ads from hijacking user input focus.* (0 returned)
  - `"focus-without-user-activation" ("intent to ship" OR "Chrome Platform Status" OR "standards-positions")` — *Tracks browser engine adoption milestones, Intent to Ship announcements, and standards position discussions across Chromium, Mozilla, and WebKit.* (8 returned)
  - `"focus-without-user-activation" (site:github.com/whatwg OR site:github.com/w3c OR site:news.ycombinator.com)` — *Surfaces community feedback, publisher complaints regarding ad focus hijacking, and standards debate in working group repositories.* (8 returned)
  - `"focus-without-user-activation" ("autofocus" OR "popover" OR "dialog") Permissions-Policy` — *Identifies deep-dive articles exploring how the policy interacts with modern UI elements like HTML dialogs, popovers, and cross-origin autofocus restrictions.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 4 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*
- **Sources cited by the AI synthesis:** 3 result(s) found — **1 verified relevant**

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
