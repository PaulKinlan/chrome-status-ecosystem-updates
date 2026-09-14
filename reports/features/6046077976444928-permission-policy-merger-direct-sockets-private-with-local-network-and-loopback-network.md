# Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"

> **Report Week:** 2026-W38 | **Milestone:** Chrome 151 | **Category:** Enabled by default

## Overview

Isolated Web App manifests now require specific "local-network" and/or "loopback-network" permission policies to enable Direct Sockets connections to local or loopback network addresses, respectively. This change replaces the existing "direct-sockets-private" permission policy. This provides developers with more granular control over network access and enhances application security by making network requirements more transparent within the manifest.

### Motivation

This change introduces essential user consent before granting potentially sensitive network access to IWAs, aligning with the principle of least privilege. The granular manifest policies ensure that apps only request the specific network access they need.

## Ecosystem Status

- **Momentum:** High (100 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Shipping enabled by default in Chrome 151, this update replaces the legacy 'direct-sockets-private' Permissions Policy token in Isolated Web Apps (IWAs) with standardized, granular 'local-network' and 'loopback-network' policies. This aligns the Direct Sockets API with broader Local Network Access (LNA/PNA) architectural specifications, enforcing least-privilege scoping between local intranet devices and loopback/localhost endpoints. However, because neither the Direct Sockets API nor the underlying Isolated Web Apps platform are supported outside Chromium, the feature remains entirely proprietary to Chrome and ChromeOS.

### Recommendations
- Actionable Advice: Teams maintaining Isolated Web Apps using Direct Sockets must immediately update their web app manifest to replace 'direct-sockets-private' with 'local-network' and/or 'loopback-network' to prevent socket connections from rejecting with InvalidAccessError. Standard web applications targeting cross-browser audiences should avoid this mechanism and rely on WebSockets, WebTransport, or server proxies instead.
- Shipping enabled by default in Chrome 151. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## 📰 Ecosystem Blogs & Articles

- [Direct Sockets API](https://pr-preview.s3.amazonaws.com/WICG/direct-sockets/62/5945849...GrapeGreen:cd58d19.html) *(pr-preview.s3.amazonaws.com)*
  > Direct Sockets API Direct Sockets API Unofficial Draft 20 March 2023 More details about this document Latest published version: https://www.w3.org/direct-sockets/ Latest editor's draft: https://wicg.github.io/direct-sockets/ History: Commit history E...
- [Direct Sockets \| Isolated Web Apps (IWA) \| Chrome for Developers](https://developer.chrome.com/docs/iwa/direct-sockets) *(developer.chrome.com · 2025-12-17T00:00:00)*
  > Direct Sockets | Isolated Web Apps (IWA) | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी ব...
- [html - Connecting to TCP Socket from browser using javascript - Stack Overflow](https://stackoverflow.com/questions/12407778/connecting-to-tcp-socket-from-browser-using-javascript) *(stackoverflow.com)*
  > The solution you are really looking for is web sockets. However, the chromium project has developed some new technologies that are direct TCP connections TCP chromium
- [Unrestricted Browser Networking: Raw TCP Sockets, Modern TLS, and CORS-Free HTTP](https://developer.puter.com/blog/unrestricted-browser-networking-raw-tcp-sockets-modern-tls-and-cors-free-http) *(developer.puter.com · 2025-06-05T00:00:00)*
  > Unrestricted Browser Networking: Raw TCP Sockets, Modern TLS, and CORS-Free HTTP Ship a Full-Stack App with One Prompt Copy this prompt into your AI coding agent, or open it in one below. Give this to your AI Create a to-do list app using Puter.js Tr...
- [How to Use Sockets in JavaScript\\HTML? - Stack Overflow](https://stackoverflow.com/questions/1736382/how-to-use-sockets-in-javascript-html/1736398) *(stackoverflow.com)*
  > Gimite&#x27;s web-socket-js is one free example of such. However you are subject to the same limitations as Flash Sockets then, namely that your server has to be able to spit out a cross-domain policy on request to the socket port, and you will often...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [direct-sockets/docs/explainer.md at main · WICG/direct-sockets](https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/direct-sockets/#permissions-policy-pna`)*
  > direct-sockets/docs/explainer.md at main · WICG/direct-sockets · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window. Reload to refresh you...
- [Direct Sockets API](https://pr-preview.s3.amazonaws.com/WICG/direct-sockets/62/5945849...GrapeGreen:cd58d19.html) *(pr-preview.s3.amazonaws.com)* *(Cites: `https://wicg.github.io/direct-sockets/#permissions-policy-pna`)*
  > Direct Sockets API Direct Sockets API Unofficial Draft 20 March 2023 More details about this document Latest published version: https://www.w3.org/direct-sockets/ Latest editor's draft: https://wicg.github.io/direct-sockets/ History: Commit...

## 📚 Platform Documentation & Specifications

- [direct-sockets/docs/explainer.md at main · WICG/direct-sockets](https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md?plain=1) *(github.com)*
- [direct-sockets/docs/explainer.md at main · WICG/direct-sockets](https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md) *(github.com)*
- [GitHub - guest271314/direct-sockets-http-ws-server: HTTP and WebSocket server run from Chrome browser using Direct Sockets TCPServerSocket · GitHub](https://github.com/guest271314/direct-sockets-http-ws-server) *(github.com)*
- [Permissions-Policy: loopback-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [Permissions-Policy: local-network-access directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 10 result(s) found across 7 planned queries — **8 verified relevant**
  - `"chromestatus.com/feature/6046077976444928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/direct-sockets" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (2 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" API` — *Core feature API query* (0 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (0 returned)
  - `"direct-sockets-private" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (0 returned)
  - `"Permission Policy Merger: "direct-sockets-private" with "local-network" and "loopback-network"" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *HTTP 400*
- **Dev.to Community Blogs:** 1 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 0 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 3 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 5 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6046077976444928)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6046077976444928)
- [Specification](https://wicg.github.io/direct-sockets/#permissions-policy-pna)
