# Host and screenshot restrictions for chrome.debugger API

> **Report Week:** 2026-W46 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

### Update (November 4, 2026): Feature rollback  Based on customer feedback, the enforcement of an all-or-nothing enterprise policy for the \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) can cause issues in certain environments.   While we design a more flexible approach, we have decided to roll back this change. For details on how to apply the rollback, see our addendum to this \[Chrome Developer blog post\](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions#guidance\_for\_enterprise\_administrators).  ### Feature description (September 23, 2026)  The \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) lets you send \[Chrome DevTools Protocol\](https://chromedevtools.github.io/devtools-protocol/) commands to a specified \`target\`, for example, a tab, an iframe, or a service worker. When connecting (attaching) to a target, the API can now enforce permissions on managed browsers by validating enterprise host and screenshot policies.  On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (\`chrome.debugger.attach()\`):  - For hosts, the \[ExtensionSettings\](https://chromeenterprise.google/policies/#ExtensionSettings) enterprise policy can be configured to block hosts for an extension, returning the error \`Host access is restricted by policy\`. - For screenshots, the \[DisableScreenshots\](https://chromeenterprise.google/policies/#DisableScreenshots) enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error \`Screenshot capture is restricted by policy\`.  Developers can handle attach rejections gracefully or use higher-level APIs like \[\`chrome.scripting\`\](https://developer.chrome.com/docs/extensions/reference/api/scripting) and \[\`chrome.declarativeNetRequest\`\](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) that support granular origin permissions in restricted enterprise environments.

## Ecosystem Status

- **Momentum:** Emerging (+20 points since 2026-10-12; footprint 120 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** The host and screenshot restriction policy enforcement for the chrome.debugger API introduced in Chrome 155 faced immediate disruption across enterprise environments and automation platforms like UiPath. Due to significant negative customer feedback regarding its all-or-nothing enforcement model, Google quickly rolled back the change while designing a more flexible approach.

### Recommendations
- Actionable Advice: Development teams relying on enterprise-managed extensions or debugging APIs should review the official Chrome Developer blog addendum for rollback guidance and prepare for a more granular policy enforcement model in future releases.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Chrome 155のchrome.debuggerポリシー適用強化、ロールバックへ https://t.co/Hnxb4SWRhH" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Chrome 155のchrome.debuggerポリシー適用強化、ロールバックへ https://t.co/Hnxb4SWRhH](https://twitter.com/codezine/status/2119618491376636259) — *by @codezine, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Google rollt die strengen Unternehmensregeln für chrome.debugger zurück. Bei Chrome 155 bis zu älteren 158-Builds kommt ](https://twitter.com/mySebbe/status/2119474256807596075) — *by @mySebbe, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Google、Chrome 155 の chrome.debugger API に対するポリシー制限を撤回 https://t.co/pLoKQRLdED](https://twitter.com/Helen_Tech/status/2118292915441270803) — *by @Helen\_Tech, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155  \|  Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русс...
- [Chrome Extension Development Company \| EXTPOWER](https://extpower.dev/blog/chrome-155-debugger-enterprise-extension-policy) *(extpower.dev)*
  > Chrome Extension Development Company \| EXTPOWER
- [uipath.com](https://forum.uipath.com/t/uipath-browser-automation-fails-after-chrome-155-or-edge-155-update-when-screenshot-or-extension-host-blocking-policies-are-enabled/5786761?tl=ko) *(forum.uipath.com)*
  > \*\*UiPath Knowledge Base & Incident Advisories:\*\* \*“UiPath browser automation fails after Chrome 155 or Edge 155”\* & \*“Group Policies that affect the UiPath Extension for Chrome”\* Automation and RPA vendors were heavily impacted
- [uipath.com](https://docs.uipath.com/studio/standalone/latest/user-guide/chrome-group-policies) *(docs.uipath.com)*
  > \*\*UiPath Knowledge Base & Incident Advisories:\*\* \*“UiPath browser automation fails after Chrome 155 or Edge 155”\* & \*“Group Policies that affect the UiPath Extension for Chrome”\* UiPath reported widespread failures in browser automations relying on t...
- [uipath.com](https://forum.uipath.com/t/uipath-browser-automation-fails-after-chrome-155-or-edge-155-update-when-screenshot-or-extension-host-blocking-policies-are-enabled/5786761?tl=fr) *(forum.uipath.com)*
  > UiPath reported widespread failures in browser automations relying on the Chromium API input method and \`Inject Js Script\` actions when organizations had \`DisableScreenshots\` set to \`true\` or configured \`runtime\_blocked\_hosts\`
- [chrome.debugger  \|  API  \|  Chrome for Developers](https://developer.chrome.google.cn/docs/extensions/reference/api/debugger) *(developer.chrome.google.cn)*
  > Host restrictions: If enterprise policy ExtensionSettings configures blocked hosts (runtime\_blocked\_hosts) for an extension, chrome.debugger.attach() is blocked on all targets with the error &quot;Host access is restricted by policy.&quot; (even if i...
- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155  \|  Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions?hl=en) *(developer.chrome.com · 2026-09-07T21:16:38)*
  > // Promise-based (Manifest V3) try { await chrome.debugger.attach({ tabId }, &quot;1.3&quot;); } catch (error) { if (error.message.includes(&quot;Host access is restricted by policy&quot;)) { console.warn(&quot;Debugger attach blocked: Extension has ...
- [DisableScreenshots: Disable taking screenshots \| Chrome Enterprise](https://chromeenterprise.google/policies/disable-screenshots) *(chromeenterprise.google)*
  > &lt;strong&gt;Setting the policy to Enabled disallows screenshots taken with keyboard shortcuts or extension APIs&lt;/strong&gt;. Setting the policy to Disabled or not set allows screenshots. As of Google Chrome version 154, enabling this policy also prevents ex...
- [Microsoft Edge Browser Policy Documentation DisableScreenshots \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/disablescreenshots) *(learn.microsoft.com · 2026-09-11T00:00:00)*
  > As of Microsoft Edge version 154, enabling this policy also prevents extensions from attaching the debugger via &#x27;chrome.debugger.attach()&#x27;.

## 📚 Platform Documentation & Specifications

- [Claude in Chrome: all debugger tools fail with "Host access is restricted by policy" in Comet 155 (Chrome 156 unaffected) · Issue #103981 · anthropics/claude-code · GitHub](https://github.com/anthropics/claude-code/issues/103981) *(github.com)*
- [bug(browser-relay): Chromium 155 rejects every chrome.debugger.attach ("Host access is restricted by policy"); relay only reports a generic timeout · Issue #16748 · can1357/oh-my-pi · GitHub](https://github.com/can1357/oh-my-pi/issues/16748) *(github.com)*
- [Chrome/Edge 155: non-empty runtime\_blocked\_hosts now blocks chrome.debugger on every site · Issue #3 · drpwchen/kimi-webbridge-lockdown · GitHub](https://github.com/drpwchen/kimi-webbridge-lockdown/issues/3) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 53 result(s) found across 10 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5072259281715200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" API` — *Core feature API query* (2 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.debugger" OR "chrome.debugger.attach()" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"chrome.debugger.attach" ("Host access is restricted by policy" OR "Screenshot capture is restricted by policy")` — *Finds real-world JavaScript code examples demonstrating error handling and promise rejections for enterprise policy blocks during debugger attachment.* (8 returned)
  - `"chrome.debugger" ("DisableScreenshots" OR "ExtensionSettings") restrictions guide OR tutorial` — *Finds developer guides and tutorials detailing enterprise policy interactions with the Chrome Extension Debugger API.* (2 returned)
  - `"chrome.debugger" enterprise policy restrictions rollback OR feedback site:developer.chrome.com OR site:chromium.org` — *Discovers official announcements, rollback advisories, and enterprise administrator guidance regarding debugger policy enforcements.* (6 returned)
  - `"chrome.debugger" ("Host access is restricted by policy" OR "Screenshot capture is restricted") site:issues.chromium.org OR site:groups.google.com/a/chromium.org` — *Surfaces Chromium issue tracker tickets, developer forum threads, and sentiment regarding breaking changes caused by enterprise debugger restrictions.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 9 result(s) found — **5 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 9 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 7 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5072259281715200)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5072259281715200)
- [Chromium Tracking Bug](https://g-issues.chromium.org/issues/533240995)
