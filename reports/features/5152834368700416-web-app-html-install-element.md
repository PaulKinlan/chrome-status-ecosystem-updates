# Web app HTML install element

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Triggers a request for the browser to install a web app, given a manifest URL and optional manifest ID. The <install> element enables cross-origin web app installation without JavaScript and provides a better developer experience than handling beforeinstallprompt events. Enterprises can control this in two ways - (1) Enterprise policy, WebAppInstallByUserEnabled, can disable user web app installs broadly, including installs initiated via navigator.install() and <install>. Or (2) Permissions Policy, web-app-installation, can allow or disallow use of this feature on origins the enterprise controls (for example, internal sites/iframes).

### Motivation

The web is currently unable to install web apps. The capability must be baked into the platform to allow for websites to distribute content without relying on proprietary protocols or invoking platform specific stores. 

A web install element democratizes application distribution and allows developers to broaden the reach of their content.

## Ecosystem Status

- **Momentum:** High (2092 points)
- **Standards Alignment:** Contested / Concerns Raised
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Web app HTML install element is currently Enabled by default in Chrome 154. Ecosystem momentum is High with Contested / Concerns Raised standards alignment and mixed / skeptical developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with appropriate feature detection.
- Non-Chromium browser vendors have raised architectural, security, or privacy considerations in standards position trackers.
- No direct polyfill detected yet; progressive enhancement fallback required for non-supporting browsers.
- Active developer discussion on Hacker News: "Install web apps with the new HTML install element" (32 points, 14 comments).

## Standards Positions

- **WebKit:** [Web Install API](https://github.com/WebKit/standards-positions/issues/463) [closed]
- **Mozilla:** [Web Install capability](https://github.com/mozilla/standards-positions/issues/1179) [open]

## Community Discussions

- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48360474) (32 pts, 14 comments)
- [Install web apps with the new HTML install element](https://news.ycombinator.com/item?id=48125969) (3 pts, 0 comments)
- [Show HN: Replacing HTML/CSS/JS with Rust](https://news.ycombinator.com/item?id=49256765) (3 pts, 5 comments)
- [Show HN: Marimo – an open-source reactive notebook for Python](https://news.ycombinator.com/item?id=38971966) (448 pts, 106 comments)
- [Show HN: I wrote a "web OS" based on the Apple Lisa's UI, with 1-bit graphics](https://news.ycombinator.com/item?id=44482965) (516 pts, 142 comments)

## Articles & Documentation

- [Web app HTML install element Documentation](https://docs.google.com/document/d/1rGvLhD4SR8Y9M1wVmqgyesPNkbZGU7HOqlttjEFJ5Vo/edit?tab=t.tmx19oox759l#heading=h.j3tt49hqiuck)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152834368700416)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152834368700416)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/454827186)
