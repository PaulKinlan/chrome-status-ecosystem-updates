# Additional Windowing Controls

> **Report Week:** 2026-W39 | **Milestone:** Chrome 155 | **Category:** Enabled by default

## Overview

Enables web applications with the window-management permission to maximize(), minimize(), and restore() their windows, and to prevent resizing through setResizable(). Additionally, new CSS media features display-state and resizable enable scripts and content to adapt to the respective window states and resizability. These features improve the usability of VDI remote application windows in Web clients, especially when it comes to titlebar window controls. The new functionality enhances existing Window Management API features: https://chromestatus.com/feature/5252960583942144

### Motivation

Virtual Desktop Infrastructure (VDI) web clients have limited abilities to integrate remote application windows with the local desktop environment, which creates suboptimal experiences for their users. Currently, they can only present full disjoint remote desktop environments (e.g. in a local fullscreen window), or present individual remote applications in separate local windows with titlebar window controls that are inoperative, redundant, and confusing for users.

## Ecosystem Status

- **Momentum:** High (340 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Additional Windowing Controls is currently Enabled by default in Chrome 155. Verified ecosystem momentum is High with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 155. Developers can begin adopting in production with progressive feature detection.
- Standards Activity (WebKit): Latest discussion from @sonkkeli: "Hey, I'm jumping in here as I'm continuing on Ivan's work.  There were some updates made on the proposed APIs and the current proposals are at least a..."
- Standards Activity (Mozilla): Latest discussion from @michaelwasserman: "Client application window controls may indeed be limited by the OS, Window Manager, protocols, utilities, and modalities. The API surface offers coher..."
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.
- Verified community discussion on Twitter / X: "Zwin, our open source XR windowing system, is now available ..." (0 points, 0 comments).

## Standards Positions

- **WebKit:** [Additional Windowing Controls](https://github.com/WebKit/standards-positions/issues/96) [open]
- **Mozilla:** [Additional Windowing Controls](https://github.com/mozilla/standards-positions/issues/712) [open]
- **W3C TAG:** [WG New Spec: Additional Windowing Controls](https://github.com/w3ctag/design-reviews/issues/1246) [open]

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [Zwin, our open source XR windowing system, is now available ...](https://twitter.com/muo_jp/status/1615143225135890432) — *by @muo_jp, 0 likes/RTs, 0 replies*

## 📰 Ecosystem Blogs & Articles

- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris Harrelson...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)*
  > [blink-dev] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9, 2026 at ...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email&#160;protected] , [email&#160...
- [Window-placement popup? \| Vivaldi Forum](https://forum.vivaldi.net/topic/120737/window-placement-popup) *(forum.vivaldi.net · 2026-09-02T18:23:29)*
  > Window-placement popup? | Vivaldi Forum Search Register Login Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in read-only mode . Please download a browser that suppo...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)*
  > Re: [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 11:03 PM Ch...
- [\[Proposal\] Additional Windowing Controls](https://discourse.wicg.io/t/proposal-additional-windowing-controls/6044) *(discourse.wicg.io)*
  > [Proposal] Additional Windowing Controls A partial archive of discourse.wicg.io as of Saturday February 24, 2024. [Proposal] Additional Windowing Controls ivansandrk 2022-11-23 Full explainer available here Introduction This proposal introduces addit...
- [Additional Windowing Controls](https://chromestatus.com/feature/5201832664629248) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Window Controls (OpenWindows User's Guide)](https://docs.oracle.com/cd/E19455-01/806-2901/6jc3a4m17/index.html) *(docs.oracle.com)*
  > The following examples illustrate the use of window controls on a group of selected windows or icons. To select multiple windows, either click SELECT on one window and ADJUST on additional windows (or icons), or position the pointer on the workspace ...
- [Windowing overview for WinUI and Windows App SDK - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/ui/windowing-overview) *(learn.microsoft.com)*
  > If you use WinUI XAML as your app&#x27;s UI framework, both the Window and the AppWindow APIs are available to you. Starting in Windows App SDK 1.4, you can use the Window.AppWindow property to get an AppWindow object from an existing XAML window. Wi...
- [Windows Controls and patterns - Windows app development - Windows apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls) *(learn.microsoft.com · 2026-05-28T00:00:00)*
  > Install it to try controls in real time and link directly from individual control pages. Get the WinUI 3 Gallery from the Microsoft Store. Get the source code from GitHub. The Windows Community Toolkit is a collection of helpers, extensions, and addi...
- [Chrome 152 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/152) *(developer.chrome.com · 2026-08-25T00:00:00)*
  > Tracking bug #492246715 | ChromeStatus.com entry | Spec · <strong>The window-drag CSS property lets web content designate regions of an installed desktop web app UI that behave as draggable window title bar areas</strong>.
- [Chrome 154 beta \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/chrome-154-beta) *(developer.chrome.com · 2026-09-02T00:00:00)*
  > DefaultWindowManagementSetting configures the default state of window management for all apps.
- [CSS usage metrics &gt; all properties &gt; stack rank](https://chromestatus.com/metrics/css/popularity) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Manage several displays with the Window Management API \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/web-apis/window-management) *(developer.chrome.com · 2020-09-14T00:00:00)*
  > The Chrome team has designed and implemented the Window Management API using the core principles defined in Controlling Access to Powerful Web Platform Features, including user control, transparency, and ergonomics.
- [Intent to Ship: Window Controls Overlay for Installed Desktop Web Apps](https://groups.google.com/a/chromium.org/g/blink-dev/c/guI1QCPJTAA) *(groups.google.com)*
  > The major risk is that giving sites ... allows developers to spoof content in what was previously a trusted, UA-controlled region. To minimize the risk of spoofing, the app will open by default in “standalone” mode with a full width title bar, and th...
- [Window management \| web.dev](https://web.dev/learn/pwa/windows) *(web.dev)*
  > We want to hear from you! We are looking for web developers to participate in user research, product testing, discussion groups and more. Apply now to join our WebDev Insights Community. ... <strong>A PWA outside of the browser manages its own window...
- [Navigation management into installed PWAs \| Capabilities \| Chrome for Developers](https://developer.chrome.com/docs/capabilities/pwa-navigation-management) *(developer.chrome.com · 2025-08-19T00:00:00)*
  > Developer controls: <strong>Includes web APIs that let developers instruct the browser on how to handle specific tasks</strong>. The interplay of these elements determines whether the PWA opens in a standalone window or a browser tab.
- [JUCE: juce::ResizableWindow Class Reference](https://docs.juce.com/master/classResizableWindow.html) *(docs.juce.com)*
  > By default resizing isn&#x27;t enabled - <strong>use the setResizable() method to enable it and to choose the style of resizing to use</strong>.
- [Blazor Window Size - Telerik UI for Blazor](https://www.telerik.com/blazor-ui/documentation/components/window/size) *(telerik.com)*
  > <strong>Maximize, Minimize and Restore the Window programmatically</strong> ... &lt;TelerikWindow @bind-State=&quot;@WindowState&quot; Height=&quot;200px&quot; Width=&quot;400px&quot; Resizable=&quot;false&quot; Visible=&quot;true&quot;&gt; &lt;Windo...
- [Window.setResizable (gtk.Window.Window.setResizable)](https://api.gtkd.org/gtk.Window.Window.setResizable.html) *(api.gtkd.org)*
  > <strong>Sets whether the user can resize a window</strong>. Windows are user resizable by default · TRUE if the user can resize this window
- [swing - Java how to make JFrames maximised but not resizable - Stack Overflow](https://stackoverflow.com/questions/14882417/java-how-to-make-jframes-maximised-but-not-resizable) *(stackoverflow.com)*
  > public static void main(String[] args) { Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize(); JFrame frame = new JFrame(&quot;Jedia&quot;); frame.setExtendedState(JFrame.MAXIMIZED_BOTH); frame.setSize(screenSize); frame.setResizable(fa...
- [Window.ResizeMode Property (System.Windows) \| Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.windows.window.resizemode?view=windowsdesktop-7.0) *(learn.microsoft.com · 2021-10-07T00:00:00)*
  > <strong>The user can only minimize the window and restore it from the taskbar</strong>. The Minimize and Maximize boxes are both shown, but only the Minimize box is enabled. CanResize. The user has the full ability to resize the window, using the Min...
- [Intent to Prototype: Borderless Mode for Installed Desktop Web Apps](https://groups.google.com/a/chromium.org/g/blink-dev/c/0WFHeazngK8) *(groups.google.com)*
  > When borderless mode is enabled for installed desktop web apps, the app&#x27;s client area is extended to cover the entire window - including the title bar area and windowing control buttons (close, maximize/restore, minimize). The web app developer ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data · GitHub Skip to content Navigation Menu Sign in Appearance settings Search / Sign in Sign up Appearance settings You signed in with another tab or window...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17444.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > Re: [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Additional Windowing Controls Mike Taylor Mon, 14 Sep 2026 09:42:49 -0700 LGTM3 On 9/14/26 12:05 p.m., Chris...
- [\[blink-dev\] Re: Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17441.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > [blink-dev] Re: Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Re: Intent to Ship: Additional Windowing Controls Vladimir Levin Mon, 14 Sep 2026 08:57:02 -0700 LGTM1 On Wednesday, September 9...
- [\[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17394.html) *(mail-archive.com)* *(Cites: `https://chromestatus.com/feature/5201832664629248`)*
  > [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) [blink-dev] Intent to Ship: Additional Windowing Controls Chromestatus Tue, 08 Sep 2026 23:04:36 -0700 Contact emails [email&#160;protected] , [...
- [Window-placement popup? \| Vivaldi Forum](https://forum.vivaldi.net/topic/120737/window-placement-popup) *(forum.vivaldi.net · 2026-09-02T18:23:29)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > Window-placement popup? | Vivaldi Forum Search Register Login Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in read-only mode . Please download a browser ...
- [Re: \[blink-dev\] Intent to Ship: Additional Windowing Controls](http://www.mail-archive.com/blink-dev@chromium.org/msg17442.html) *(mail-archive.com)* *(Cites: `https://www.w3.org/TR/window-management/#api-window-minimize-method`)*
  > Re: [blink-dev] Intent to Ship: Additional Windowing Controls Skip to site navigation (Press enter) Re: [blink-dev] Intent to Ship: Additional Windowing Controls Chris Harrelson Mon, 14 Sep 2026 09:14:30 -0700 LGTM2 On Tue, Sep 8, 2026 at 1...

## 📚 Platform Documentation & Specifications

- [Updates for Chrome 155 beta by Elchi3 · Pull Request #30575 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30575) *(github.com)*
- [Additional Windowing Controls · Issue #96 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/96) *(github.com)*
- [GitHub - explainers-by-googlers/additional-windowing-controls: Repository hosting the feature explainer · GitHub](https://github.com/explainers-by-googlers/additional-windowing-controls) *(github.com)*
- [\[mediaqueries-5\] Add 'display-state' and 'resizable' media feature · Issue #14428 · w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/14428) *(github.com)*
- [Window: setResizable() method - Web APIs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/setResizable) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 57 result(s) found across 13 planned queries — **28 verified relevant**
  - `"chromestatus.com/feature/5201832664629248" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (4 returned)
  - `"github.com/w3c/window-management/blob/main/EXPLAINER_additional_windowing_controls.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (3 returned)
  - `"www.w3.org/TR/window-management" -site:www.w3.org` *(Reverse Citation)* — *Inbound citations linking to Specification* (4 returned)
  - `"Additional Windowing Controls" API` — *Core feature API query* (4 returned)
  - `"Additional Windowing Controls" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"chromestatus.com" OR "window-management" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Additional Windowing Controls" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Additional Windowing Controls" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (7 returned)
  - `"Additional Windowing Controls" OR "Window Management API" ("window.minimize" OR "window.maximize") tutorial OR guide` — *Finds developer-oriented tutorials and practical guides explaining how to control window states and handle window management permissions.* (0 returned)
  - `("window.setResizable" OR "window.maximize()" OR "window.minimize()") ("@media (display-state" OR "@media (resizable")` — *Targets real-world JavaScript and CSS syntax examples implementing the new window control methods and media queries.* (8 returned)
  - `"Additional Windowing Controls" (VDI OR Citrix OR "remote desktop") (Chrome OR Chromium) status` — *Searches for announcements, enterprise VDI adoption cases, and Chromium rollout updates for windowing controls.* (8 returned)
  - `"Additional Windowing Controls" site:github.com/mozilla/standards-positions OR site:github.com/WebKit/standards-positions OR site:groups.google.com/a/chromium.org` — *Identifies web standards positions and browser vendor discussions across Chromium, Mozilla, and WebKit forums.* (8 returned)
  - `"display-state: maximized" OR "display-state: minimized" OR "display-state: normal" CSS` — *Discovers developer implementations, snippets, and documentation for adapting UI layouts using the display-state CSS media feature.* (0 returned)
- **Google Search Grounding (gemini-3.8-flash):** 0 result(s) found — **0 verified relevant**
- **Twitter / X API v2:** *found 0 tweet(s)*
- **Dev.to Community Blogs:** 0 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 3 result(s) found — **3 verified relevant**
- **Engine Bug Trackers:** 0 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 8 result(s) found — **0 verified relevant**
- **Web Platform Tests (wpt.fyi):** 5 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 12 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5201832664629248)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5201832664629248)
- [Specification](https://www.w3.org/TR/window-management/#api-window-minimize-method)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/40192345)
