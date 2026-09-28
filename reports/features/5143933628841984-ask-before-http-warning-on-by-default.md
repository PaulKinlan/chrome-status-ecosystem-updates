# Ask-before-HTTP warning on by default

> **Report Week:** 2026-W40 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Chrome now prompts users by default when they access an insecure (HTTP) connection. IT admins can control this default behavior via \[HttpsOnlyMode\](https://chromeenterprise.google/policies/#HttpsOnlyMode) policy.

## Ecosystem Status

- **Momentum:** Moderate (60 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** With Chrome 154, Google enabled 'Ask-before-HTTP' (HTTPS-First mode) by default on desktop, requiring explicit user confirmation before loading public unencrypted HTTP pages. This transition caps off years of incremental nudges toward a secure web, effectively treating plain HTTP as an exceptional, high-risk legacy protocol. While this is a browser-level security and UX policy rather than a standardized web API, it establishes a de facto standard across Chromium-based browsers.

### Recommendations
- Actionable Advice: Engineering and DevOps teams should immediately audit all public hostnames, redirect chains, marketing assets, and QR codes to ensure full HTTPS coverage and automated certificate renewal. Enterprise administrators should configure the \`HttpsOnlyMode\` and \`HttpAllowlist\` group policies if unmigrated legacy internal services require continued plaintext HTTP access.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > This means that <strong>Chrome now asks for the user&#x27;s permission before the first access to any public site without HTTPS</strong>. Public sites are defined as sites that: ... exclude direct navigation to RFC 1918 addresses (192.168.0.1, 10.0.0...
- [Google Releases Chrome 154 Stable: Standardizes iframe Auto-Resize and HTTP Connection Prompts — BigGo Finance](https://finance.biggo.com/news/c5f02f74-e6b8-4a67-bd4e-b2c4a7c36f09) *(finance.biggo.com · 2026-09-25T07:06:18)*
  > Key changes include a CSS feature that automatically resizes iframes to match embedded content height, and the default enablement of &quot;Ask before HTTP,&quot; which <strong>prompts users before connecting to unencrypted HTTP sites</strong>.
- [Chromium Docs - Adapting your website for Chrome’s “Ask-before-HTTP” warning](https://chromium.googlesource.com/chromium/src/+/main/docs/security/ask-before-http/ask-before-http-adoption-guide.md) *(chromium.googlesource.com)*
  > If you have a website that is served over HTTP (either directly or for any possible redirect steps a user may go through before reaching your site), <strong>this document tries to answer common questions and provide guidance on how to adapt your webs...
- [Google Chrome to warn users before opening insecure HTTP sites](https://www.bleepingcomputer.com/news/google/google-chrome-to-warn-users-before-opening-insecure-http-sites) *(bleepingcomputer.com · 2025-10-30T08:37:00)*
  > Google announced today that the Chrome web browser will load all public websites via secure HTTPS connections by default and ask for permission before connecting to public, insecure HTTP websites, beginning with Chrome 154 in <strong>October 2026</st...
- [Google Chrome to enable HTTPS by default in October 2026 - gHacks Tech News](https://www.ghacks.net/2025/10/30/google-chrome-to-enable-https-by-default-in-october-2026) *(ghacks.net · 2025-10-30T12:47:03)*
  > ... <strong>When the option is enabled, and you come across a website that doesn&#x27;t support HTTPS, Chrome will warn you that the page may be insecure</strong> (as seen in the image), and you can choose to exit to safety or proceed at your own ris...
- [Why You Need to Switch to HTTPS Before Chrome Does It for You](https://www.mgid.com/blog/google-and-https-heres-why-you-should-switch-your-site-to-https-immediately) *(mgid.com · 2026-01-15T00:00:00)*
  > <strong>With the release of Chrome 154 in October 2026</strong>, the browser will enable HTTPS-first mode by default, showing a warning and requiring user confirmation before loading any public HTTP page.

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 42 result(s) found across 10 planned queries — **6 verified relevant**
  - `"chromestatus.com/feature/5143933628841984" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"Ask-before-HTTP warning on by default" API` — *Core feature API query* (0 returned)
  - `"Ask-before-HTTP warning on by default" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromeenterprise.google" OR "ask-before-http" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Ask-before-HTTP warning on by default" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Ask-before-HTTP warning on by default" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `Chrome "HTTPS-First Mode" OR "ask-before-HTTP" default warning announcement` — *Find announcements and coverage detailing Chrome's rollout of default interstitial warnings for insecure HTTP connections.* (8 returned)
  - `"HttpsOnlyMode" Chrome enterprise policy configure OR disable guide` — *Locate IT administrator tutorials explaining how to manage, configure, or opt out of the HTTP interstitial warning via enterprise policies.* (4 returned)
  - `"HttpsOnlyMode" Chrome policy registry OR plist configuration examples` — *Retrieve syntax, registry keys, and managed configuration snippets (JSON/plist) for deploying HttpsOnlyMode.* (0 returned)
  - `"HTTPS-First Mode" OR "ask-before-HTTP" Chrome site:reddit.com OR site:news.ycombinator.com` — *Gauge web developer and sysadmin sentiment and discussions regarding broken workflows and user friction caused by HTTP warnings.* (5 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 8 tweet(s)*
- **Dev.to Community Blogs:** 2 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 5 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 729 item(s) inspected

### Content Inspected

- **Specification:** ○ Not available
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 4 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5143933628841984)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5143933628841984)
