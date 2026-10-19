# Host and screenshot restrictions for chrome.debugger API

> **Report Week:** 2026-W43 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

The \[\`chrome.debugger\` extension API\](https://developer.chrome.com/docs/extensions/reference/api/debugger) lets you send \[Chrome DevTools Prototcol\](https://chromedevtools.github.io/devtools-protocol/) commands to a specified \`target\`, for example, a tab, an iframe, or a service worker. When connecting (attaching) to a target, the API can now enforce permissions on managed browsers by validating enterprise host and screenshot policies.    On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (browser.debugger.attach()):  - For hosts, the \[ExtensionSettings\](https://chromeenterprise.google/policies/#ExtensionSettings) enterprise policy can be configured to block hosts for an extension, returning the error \`Host access is restricted by policy\`. - For screenshots, the enterprise policy \[DisableScreenshots\](https://chromeenterprise.google/policies/#DisableScreenshots) enterprise policy disables screenshot capture or Data Loss Prevention (DLP) rules apply, returning the error \`Screenshot capture is restricted by policy\`.  Developers can handle attach rejections gracefully or use higher-level APIs like \[\`chrome.scripting\`\](https://developer.chrome.com/docs/extensions/reference/api/scripting) and \[\`chrome.declarativeNetRequest\`\](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) that support granular origin permissions in restricted enterprise environments.

## Ecosystem Status

- **Momentum:** Emerging (footprint 100 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Introduced in Chrome 155, this feature enforces an upfront, all-or-nothing security validation on chrome.debugger.attach() whenever enterprise policies configure runtime blocked hosts or screenshot and data loss prevention restrictions. Because the Chrome DevTools Protocol operates below the browser's origin sandbox, Google chose total attach rejection over unpredictable runtime CDP failures, closing a long-standing enterprise data-exfiltration loophole. As a Chromium-specific extension enterprise policy mechanism, it operates outside W3C web standards and has no direct multi-engine standardization track.

### Recommendations
- Actionable Advice: Extension developers must update their chrome.debugger.attach() logic to handle promise rejections and display actionable messaging for host and screenshot policy errors. Where feasible, teams building automation or content-modification tools should migrate to origin-scoped WebExtension APIs like chrome.scripting and chrome.declarativeNetRequest, which respect granular enterprise permissions rather than failing completely.
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions) *(developer.chrome.com)*
  > Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русс...
- [extpower.dev](https://extpower.dev/blog/chrome-155-extension-automation-stopped-working) *(extpower.dev)*
  > \*\*Publisher:\*\* Developer blogs (EXTPOWER, C# Corner) \*\*Overview:\*\* Community articles focused on troubleshooting enterprise browser automation tools, QA test suites, AI web agents, and robotic process automation (RPA) extensions that began failing in...
- [c-sharpcorner.com](https://www.c-sharpcorner.com/article/chrome-155-chrome-debugger-changes-what-extension-developers-need-to-know) *(c-sharpcorner.com)*
  > \*\*Publisher:\*\* Developer blogs (EXTPOWER, C# Corner)
- [chrome.debugger \| API \| Chrome for Developers](https://developer.chrome.google.cn/docs/extensions/reference/api/debugger) *(developer.chrome.google.cn)*
  > On enterprise devices, some policies can restrict extensions from attaching the debugger using an all-or-nothing model at attach time (chrome.debugger.attach()): Host restrictions: &lt;strong&gt;If enterprise policy ExtensionSettings configures blocked hos...
- [Chrome 155 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/155) *(chromestatus.com · 2026-10-06T00:00:00)*
  > For hosts, &lt;strong&gt;the ExtensionSettings enterprise policy can be configured to block hosts for an extension&lt;/strong&gt;, returning the error Host access is restricted by policy.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?brand=GCEW) *(chromeenterprise.google · 2026-08-12T00:00:00)*
  > For hosts, &lt;strong&gt;the ExtensionSettings enterprise policy can be configured to block hosts for an extension&lt;/strong&gt;, returning the error Host access is restricted by policy.
- [Chrome 155 的 chrome.debugger 被政策擋住？先查兩種錯誤 - ZeroOne](https://laplusda.com/posts/chrome-155-debugger-enterprise-policy) *(laplusda.com · 2026-09-17T00:00:00)*
  > 直接答案是：先讀 attach() rejection 的完整訊息。若是 Host access is restricted by policy.，查 runtime\_blocked\_hosts；若是 Screenshot capture is restricted by policy.，查 DisableScreenshots 或 DLP。這兩類限制是在 attach 時一次性判定，不是替某個 origin 加進 allowlist 就能繞過。
- [Microsoft Edge Browser Policy Documentation DisableScreenshots \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/disablescreenshots) *(learn.microsoft.com · 2026-09-11T00:00:00)*
  > As of Microsoft Edge version 154, enabling this policy also prevents extensions from attaching the debugger via &#x27;chrome.debugger.attach()&#x27;.
- [Stricter enterprise policy enforcement for chrome.debugger in Chrome 155 \| Chrome for Developers](https://developer.chrome.com/blog/debugger-enterprise-policy-restrictions?hl=en) *(developer.chrome.com · 2026-09-07T21:16:38)*
  > &lt;strong&gt;Always handle attach rejections in your extension code to give clear feedback to enterprise users&lt;/strong&gt;:

## 📚 Platform Documentation & Specifications

- [GitHub - DaveTseng2019/kimi-webbridge-lockdown: Lock Kimi WebBridge (or any debugger-based AI browser-control extension) out of your bank, broker and mailbox — guided, reversible ExtensionSettings policy (Edge+Chrome, Windows/macOS)](https://github.com/DaveTseng2019/kimi-webbridge-lockdown) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 52 result(s) found across 10 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/5072259281715200" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" API` — *Core feature API query* (0 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chrome.debugger" OR "chrome.scripting" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Host and screenshot restrictions for chrome.debugger API" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"chrome.debugger" attach enterprise policy "Host access is restricted by policy"` — *Finds specific WebIDL/API error codes, syntax, and handling for enterprise debugger restrictions.* (5 returned)
  - `"chrome.debugger" "DisableScreenshots" ExtensionSettings enterprise tutorial` — *Searches for developer guides and tutorials explaining how to handle screenshot and host policy rejections.* (7 returned)
  - `chrome extensions enterprise policy debugger attach error handling developer sentiment` — *Discovers developer discussions and ecosystem sentiment regarding the new enterprise restriction model.* (8 returned)
  - `chrome.debugger vs chrome.scripting enterprise policy restrictions migration` — *Looks for announcements and adoption guides recommending alternative APIs like chrome.scripting in enterprise environments.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 5 result(s) found — **3 verified relevant**
- **Twitter / X API v2:** *found 6 tweet(s)*
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
