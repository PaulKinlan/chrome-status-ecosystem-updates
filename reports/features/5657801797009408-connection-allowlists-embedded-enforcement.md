# Connection Allowlists - Embedded Enforcement

> **Report Week:** 2026-W43 | **Milestone:** Chrome 157 | **Category:** Origin trial

## Overview

Connection Allowlists (https://chromestatus.com/feature/5175745573945344) is a feature designed to provide explicit control over external endpoints by restricting connections initiated via the Fetch API or other web platform APIs from a document or worker. This aspect of the feature extends Connection Allowlists to support embedded enforcement on iFrames and nested documents/workers. This allows the parent document to enforce restrictions on embedded content where they can choose to opt in or not load.  More details on the proposal can be found here: https://github.com/WICG/connection-allowlists

### Motivation

This change allows a path for embedded content with local sources such as srcdoc or data: URLS to have Connection Allowlist support. It also allows a parent document to set/enforce restrictions on nested content such as iframes or workers to ensure that they are at least as strict as the policies they in place. This helps ensure that embedded content cannot escape the restrictions that are in place and bypass the features purpose.

## Ecosystem Status

- **Momentum:** Moderate (footprint 330 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Connection Allowlists - Embedded Enforcement extends the emerging native browser 'egress firewall' to nested contexts, ensuring iframes and workers cannot circumvent parent network restrictions or act as data exfiltration vectors. Incubated within the WICG by Google and Microsoft Edge engineers, the core specification aims to replace the ergonomic pitfalls of CSP connect-src, with the embedded enforcement mechanism advancing into Chrome Origin Trials. While cross-browser engine consensus is generally favorable towards cleaner exfiltration primitives, production cross-engine availability remains in development.

### Recommendations
- Actionable Advice: Teams managing sensitive data or untrusted embedded widgets should evaluate the explainer and experiment with the connectionAllowlist iframe primitives in Chrome Origin Trials or under developer flags. However, production architectures must continue enforcing CSP connect-src alongside iframe sandbox policies as standard defense-in-depth until multi-engine implementation lands.
- In active Origin Trial in Chrome 157. Validate API ergonomics in staging/pilot environments before general availability.
- Standards Activity (WebKit): Latest discussion from @mikewest: "A brief update on timing: we're now planning an initial Origin Trial starting in Chrome 147 (https://groups.google.com/a/chromium.org/g/blink-dev/c/lR..."
- Standards Activity (Mozilla): Latest discussion from @evilpie: "Suggested position: positive  #1431..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Standards Positions

- **WebKit:** [Connection Allowlists](https://github.com/WebKit/standards-positions/issues/583) [open]
- **Mozilla:** [Connection Allowlists](https://github.com/mozilla/standards-positions/issues/1322) [closed]

## 📰 Ecosystem Blogs & Articles

- [report-uri.com](https://blog.report-uri.com/connection-allowlist-an-egress-firewall-for-the-browser) *(blog.report-uri.com)*
  > \*\*Connection Allowlists\*\* is a web platform security mechanism designed to act as a native “egress firewall” in the browser \*\*Key Takeaway:\*\* Examines how Connection Allowlist fixes critical design gaps in Content Security Policy (CSP) \`connect-src\`
- [Connection allowlists: Secure your web application's network access \| daily.dev](https://daily.dev/posts/connection-allowlists-secure-your-web-application-s-network-access-3kjg4t73n) *(daily.dev)*
  > from a document or worker This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls
- [Connection Allowlist: a network firewall, built into the browser](https://scotthelme.co.uk/connection-allowlist-a-network-firewall-built-into-the-browser) *(scotthelme.co.uk)*
  > from a document or worker \*\*Report URI Blog (Scott Helme):\*\* \[\*“Connection Allowlist: an egress firewall for the browser”\*\](https://report-uri.com/blog/connection-allowlist-browser-egress-firewall/)
- [appspot.com](https://img544-dot-cr-status.appspot.com/feature/5657801797009408) *(img544-dot-cr-status.appspot.com)*
  > from a document or worker, \*\*Embedded Enforcement\*\* extends this boundary to nested contexts (\`&lt;iframe&gt;\`s, nested documents, and workers) The browser enforces these restrictions on child frames: the embedded content must either opt into a compatible ...
- [Connection allowlists: Secure your web application's network access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/connection-allowlist-announcement) *(developer.chrome.com)*
  > This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls \*\*Chrome for Developers Blog:\*\* \[\*“Connection allowlists: Secure your web application's network access”\*\](https://dev...
- [timjohns.com](https://timjohns.com/blog/connection-allowlists) *(timjohns.com)*
  > This prevents third-party widgets, compromised ad frames, or sandboxed execution environments from bypassing parent network controls \*\*Tim Johns’ Dev Blog:\*\* \[\*“Blog: Connection Allowlists”\*\](https://timjohns.dev/)
- [Connection-Allowlist header, deny-by-default egress](https://centralcsp.com/en/docs/web-security/policies/connection-allowlist) *(centralcsp.com)*
  > \*\*Summary:\*\* Details the feature origin and Chrome origin trial timeline (running through Chrome 156–159) \*\*CentralCSP:\*\* \[\*“Connection-Allowlist header, syntax and browser support”\*\](https://centralcsp.com/)
- [chrome.com](https://developer.chrome.com/blog/fedcm-connection-allowlist) *(developer.chrome.com)*
  > \*\*Chrome for Developers (FedCM Guidance):\*\* \[\*“FedCM: Allow network requests to your Identity Provider with Connection Allowlist”\*\](https://developer.chrome.com/) \*\*Key Takeaway:\*\* Details how cross-origin credential-federated requests interact with ...
- [chrome.com](https://developer.chrome.com/blog/connection-allowlists-origin-trial) *(developer.chrome.com)*
  > The reaction from developer communities welcomes Connection Allowlist because it decouples egress networking from code execution
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)*
  > &gt; LGTM2 &gt; &gt; On Fri, Jun 26, 2026 ... Connection Allowlists is &lt;strong&gt;a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web platform APIs ...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Alex Russell Mon, 21 Sep 2026 11:40:27 -0700 This ...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Chromestatus Tue, 03 Mar 2026 16:16:12 -0800 Contact emails \[email&#160;protected\] , \[email&#160;pro...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement 'Brandon Maslen' via blink-dev Wed, 17 Jun 2026 10:53:14 -07...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via blink-dev Wed, 16 Sep 2026 16:50:...
- [\[dev-platform\] Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01898.html) *(mail-archive.com)*
  > \[dev-platform\] Intent to prototype: Connection Allowlists Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype: Connection Allowlists 'Tom Schuster' via \[email&#160;protected\] Fri, 18 Sep 2026 04:35:27 -0700 Summary: The Connectio...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17684.html) *(mail-archive.com)*
  > &gt;&gt; &gt;&gt; Connection Allowlists constrain exactly that, but only for the context &gt;&gt; that delivers the header. An embedder cannot hold what it embeds to a &gt;&gt; comparable restriction, so embedded content becomes the bypass. &gt;&gt; ...
- [Connection Allowlist: a network firewall, built into the browser \| daily.dev](https://daily.dev/posts/connection-allowlist-a-network-firewall-built-into-the-browser-rzzuzped8) *(daily.dev · 2026-07-08T16:13:28)*
  > Developers configuring network containment policies can track spec defaults like these via daily.dev. Which Chrome versions support the Connection Allowlist origin trial? The origin trial runs from Chrome 148 through Chrome 151, after which Chrome wi...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17685.html) *(mail-archive.com)*
  > &gt;&gt;&gt; &gt;&gt;&gt; \*Is this feature fully tested by web-platform-tests?\* &gt;&gt;&gt; &gt;&gt;&gt; Yes &gt;&gt;&gt; &gt;&gt;&gt; \*Flag name on about://flags\* &gt;&gt;&gt; &gt;&gt;&gt; Experimental Web Platform features &gt;&gt;&gt; (about://fl...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17697.html) *(mail-archive.com)*
  > \*Intent to Experiment: Connection ... or worker may &gt;&gt;&gt;&gt;&gt; connect to. &lt;strong&gt;This extension lets a parent document require an allowlist of &gt;&gt;&gt;&gt;&gt; the content it embeds, via a connectionallowlist attribute on the iframe&lt;/...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16890.html) *(mail-archive.com)*
  > As OT progressed, support was added for remaining known network endpoints including webRTC, WebTransport, WebSocket and others. Connection allowlists &lt;strong&gt;support documents, dedicated workers, shared workers and service workers&lt;/strong&gt;.
- [\[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16875.html) *(mail-archive.com)*
  > Please list open issues (eg links to known github issues in the project for the feature specification) whose resolution may introduce web compat/interop risk (eg, changing to naming or structure of the API in a non-backward-compatible way). https://g...
- [\[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16946.html) *(mail-archive.com)*
  > &gt; https://github.com/WICG/connection-allowlists/issues Note that issues &gt; marked as enhancement, like &gt; https://github.com/WICG/connection-allowlists/issues/1, &gt; https://github.com/WICG/connection-allowlists/issues/28 are not included &gt...
- [Re: \[blink-dev\] Re: Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16949.html) *(mail-archive.com)*
  > &gt;&gt; https://github.com/WICG/connection-allowlists/issues Note that issues &gt;&gt; marked as enhancement, like &gt;&gt; https://github.com/WICG/connection-allowlists/issues/1, &gt;&gt; https://github.com/WICG/connection-allowlists/issues/28 are ...
- [\[dev-platform\] Re: Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01899.html) *(mail-archive.com)*
  > &gt; &gt; Platform Coverage: All &gt; &gt; Preference: security.connection\_allowlists.enabled &gt; &gt; DevTools Bug: None (The header would automatically show up) &gt; &gt; Extensions Bug: n/a &gt; &gt; Use Counter: tbd (Bug 2073432 &gt; &lt;https:/...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com · 2026-10-12T08:23:19)* *(Cites: `https://chromestatus.com/feature/5657801797009408`)*
  > Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or w...
- [Re: \[blink-dev\] Intent to Ship: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg16912.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > &gt; LGTM2 &gt; &gt; On Fri, Jun 26, 2026 ... Connection Allowlists is &lt;strong&gt;a feature designed to provide explicit control &gt;&gt; over external endpoints by restricting connections initiated via the Fetch &gt;&gt; API or other web plat...
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in ...
- [Incubation: Connection Allowlists · Issue #1173 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1173) *(github.com · 2025-11-25T11:45:59)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > Incubation: Connection Allowlists · Issue #1173 · w3ctag/design-reviews · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to re...
- [\[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17505.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Experiment: Connection Allowlists Embedded Enforcement Alex Russell Mon, 21 Sep 2026 11:40:27 -...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists](http://www.mail-archive.com/blink-dev@chromium.org/msg15986.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Chromestatus Tue, 03 Mar 2026 16:16:12 -0800 Contact emails \[email&#160;protected\] , \[emai...
- [\[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg16801.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Prototype: Connection Allowlists Embedded Enforcement 'Brandon Maslen' via blink-dev Wed, 17 Jun 2026 10...
- [\[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement](http://www.mail-archive.com/blink-dev@chromium.org/msg17485.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Connection Allowlists Embedded Enforcement 'Giovanni Del Valle' via blink-dev Wed, 16 Sep 2...
- [\[dev-platform\] Intent to prototype: Connection Allowlists](http://www.mail-archive.com/dev-platform@mozilla.org/msg01898.html) *(mail-archive.com)* *(Cites: `https://wicg.github.io/connection-allowlists/#issue-d96e905e`)*
  > \[dev-platform\] Intent to prototype: Connection Allowlists Skip to site navigation (Press enter) \[dev-platform\] Intent to prototype: Connection Allowlists 'Tom Schuster' via \[email&#160;protected\] Fri, 18 Sep 2026 04:35:27 -0700 Summary: The...

## 📚 Platform Documentation & Specifications

- [github.com](https://github.com/wicg/connection-allowlists/issues/36) *(github.com)*
- [Connection Allowlists · Issue #1424 · web-platform-tests/interop](https://github.com/web-platform-tests/interop/issues/1424) *(github.com)*
- [github.com](https://github.com/WICG/connection-allowlists) *(github.com)*
- [Connection Allowlists – Embedded Enforcement · Issue #44 · getsentry/browser-updates-radar](https://github.com/getsentry/browser-updates-radar/issues/44) *(github.com)*
- [Clone CA and required-CA when cloning policy container by noamr · Pull Request #41 · WICG/connection-allowlists](https://github.com/WICG/connection-allowlists/pull/41) *(github.com)*
- [Incubation: Connection Allowlists · Issue #1173 · w3ctag/design-reviews](https://github.com/w3ctag/design-reviews/issues/1173) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 51 result(s) found across 13 planned queries — **23 verified relevant**
  - `"chromestatus.com/feature/5657801797009408" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/connection-allowlists/blob/main/iframe-embedded-enforcement-explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (0 returned)
  - `"wicg.github.io/connection-allowlists" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" API` — *Core feature API query* (4 returned)
  - `"Connection Allowlists - Embedded Enforcement" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "github.com" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Connection Allowlists - Embedded Enforcement" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (1 returned)
  - `"Connection Allowlists" ("embedded enforcement" OR iframe) (guide OR tutorial OR overview)` — *Finds technical overviews, developer guides, and conceptual explanations of Connection Allowlists applied to nested iframes.* (6 returned)
  - `"Connection-Allowlist" ("srcdoc" OR iframe OR worker) header` — *Surfaces exact HTTP response header syntax, markup attributes, and policy directives for embedded contexts.* (8 returned)
  - `"Connection Allowlists" ("Intent to Prototype" OR "Intent to Ship" OR "Blink-dev")` — *Tracks Chromium release plans, Blink intent threads, and implementation milestones for the embedded enforcement feature.* (8 returned)
  - `site:github.com/WICG/connection-allowlists ("embedded enforcement" OR iframe OR srcdoc)` — *Locates open spec discussions, edge cases, and design issues in the official WICG repository.* (0 returned)
  - `("standards-positions" OR "standards position") "Connection Allowlists" (WebKit OR Mozilla)` — *Identifies cross-browser sentiment and formal standards positions from Mozilla and Apple WebKit teams.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 13 result(s) found — **12 verified relevant**
- **Twitter / X API v2:** *found 1 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **2 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 7 result(s) found — **0 verified relevant**
- **web-features mapping:** *not in a web-features group*
- **Web Platform Tests (wpt.fyi):** *not in a web-features group*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 6 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5657801797009408)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5657801797009408)
- [Specification](https://wicg.github.io/connection-allowlists/#issue-d96e905e)
