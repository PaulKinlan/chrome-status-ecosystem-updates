# Local Network Access restrictions for Background Fetch

> **Report Week:** 2026-W41 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Background Fetch requests now require that the service worker's origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers.  This aligns Chromium's implementation with the intent of the Background Fetch spec, which states that such requests go through the Fetch spec and have the same security policies applied to them including, in this case, LNA checks. This prevents sites from bypassing LNA checks by using \[Background Fetch spec\](https://wicg.github.io/background-fetch/) instead of regular \[Fetch\](https://fetch.spec.whatwg.org/).  For enterprises, you can use existing LNA enterprise policies in the same way you previously would have for regular Fetch API requests from service workers: - \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) - \[LocalNetworkAccessAllowedForUrls\](https://chromeenterprise.google/policies/#LocalNetworkAccessAllowedForUrls) - \[LoopbackNetworkAllowedForUrls\](https://chromeenterprise.google/policies/#LoopbackNetworkAllowedForUrls) - \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled) - \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides)).

### Motivation

This fixes a security issue where Background Fetch unintentionally bypasses security policies such as Local Network Access checks.

## Ecosystem Status

- **Momentum:** High (610 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** Shipped enabled by default in Chrome 154, this restriction closes a security loophole by requiring service workers using Background Fetch to obtain Local Network Access (LNA) permissions before contacting local or loopback servers. The change aligns Chromium's implementation with the Fetch and Background Fetch specifications, following Chromium's decision to harden the API after an earlier deprecation attempt failed to reach consensus. Because Background Fetch itself has not been implemented outside Chromium, this policy tightening remains exclusive to the Blink ecosystem.

### Recommendations
- Actionable Advice: Audit service workers utilizing Background Fetch to ensure any legitimate requests to private or loopback IP ranges request proper LNA permissions beforehand. Enterprise environments managing internal network endpoints should configure policies such as \`LocalNetworkAccessAllowedForUrls\` or \`LoopbackNetworkAllowedForUrls\` to avoid service worker network breakages.
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with progressive feature detection.
- Non-Chromium browser engines (WebKit/Gecko) have not formally signaled support. Wrap calls in conditional feature checks.
- Community package available: \[react-native-fetch-api\](https://www.npmjs.com/package/react-native-fetch-api) (v3.0.0) for progressive enhancement.
- Verified community discussion on Twitter / X: "@ZunnuMetaX @vangrid\_io That local access angle is powerful. Vangrid turns something simple like being near the right pl" (0 points, 0 comments).

## Community Discussions & Social Pulse

- 🐦 **Twitter / X:** [@ZunnuMetaX @vangrid\_io That local access angle is powerful. Vangrid turns something simple like being near the right pl](https://twitter.com/aquilaneratr/status/2107044495997247998) — *by @aquilaneratr, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [@BSCNews @VitalikButerin Vitalik’s experiment is a smart move balancing AI utility and privacy! Using local models first](https://twitter.com/AlphaFeedX/status/2107042270528549166) — *by @AlphaFeedX, 0 likes/RTs, 0 replies*
- 🐦 **Twitter / X:** [Access Networks (@AccessNetworks) on X](https://twitter.com/accessnetworks?lang=en) — *0 likes/RTs, 0 replies*

## Packages & Polyfills

- [is-network-error](https://www.npmjs.com/package/is-network-error) `v1.3.2` — Check if a value is a Fetch network error
- [react-native-fetch-api](https://www.npmjs.com/package/react-native-fetch-api) `v3.0.0` — A fetch API polyfill for React Native with text streaming support.

## 📰 Ecosystem Blogs & Articles

- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFResdByOXe7KQLDE0npgiTopbVkUZ8pUvjSyjg-4vWVAYwyAMgRpSWmxm9ZtzQTeAYlqhebko_AOYsRH1afHacStOCXytlvcAlXfE15wI-SZ99OvAcRKFchlxY8xmL84kwi_gzTCM=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 beta | Blog | Chrome for Developers Skip to main content / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – ...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFEHVppHxP_nVHpVGsdWmOTWItJoMiSF0tYVnG-vRRNakDWXlfMxyQhVRK0dylJEt1Yrs30A5W3e2wNb6eS-PFED89_wxlgzTO-9Q4n_Ee9sHeZikb5nRXOLIyvmufnMoWPZWU=) *(vertexaisearch.cloud.google.com)*
  > Chrome 154 | Release notes | Chrome for Developers Chuyển ngay đến nội dung chính / English Deutsch Español – América Latina Français Indonesia Italiano Nederlands Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা...
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHWihuV09kptJjtrj7XPwTXQeFXCSms0q2j3vnRfB3tUu6TXlZVDE_TKmQa774dybx0zaBILvYj_iKgy56FsPfNjVJ6iwYPNKiErrTBw_sWJfENdhzNyDMBMrt5tU0zZyDuZJVOtS36r5d_xr0=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [google.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEKPC7_9n9zaiXEr4KdcLzTSHcbrOlA82sUB2lHq9GUNvo3Yx3CnYFsE6f4Y0LHqQUbVEsayssIjhpFIqYjTNdos0mjKQv9BwHjzmlCwRQfgk2djfn38j8DKXAhfNyd-YEUViH6hWa-cDyK_ejlYNDMaxBYch8diVjxuMRBtRljvS6_05huaqPzwYBY0YbuGvVLBrDaRCvUG7GIbhhx4wAUIs14jg0DI6Rdei0VOA==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [chromestatus.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFqWzEWBlYba_sK8hZbWtJ_GQp1yqmueryIfCiXRODLvCTX2KW42PWi3pUnDlWZ2JdyaEFwzVVKzGWnD4XHNywpEhnAEbMVZo9eXTxPOB_1kZVNM-dvEFikWEG6uDtSKTAlTmfBn4dq) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [uillinois.edu](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZNs19cddb8CHTa905UbljFoRNG7l0V6G_-hEzJR5olts2KXsBTPtiUC3g1Hy8vOYeyWK5AqczkPHVBoOcvRxeS7W8finQCtpkWmOZrmsnWGJaHkBXsKvqxkAsn4BIYBlU053I_uUC8AfelDPv85pl-MBpKSQ7prVwPkRmj-2Ia8g7O94cMatA60fCGdFLVcHx_yB6ERL5qlOceiXCliM9Z8ud-1zhPxzPpWLL9A==) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [reddit.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQELm9XqWrhpfd87TXWVoVd4H94VOah0qTRNW6By5n-Q7lIoISVjRzP5oUWuVc-7mrSyYmSKsaUxAz-z6TUycDq1tskntnsfvAMP7U8qLp9EqLGRLcJ64IkTc57SIX3iMvTaj-C3FdPyfB8DYfxtEj_zV5XraH1ejCl-kHIAcpMFsOapUbet6zPNMrQrMUTQMXKq1Fa4) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [chrome.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQESwxF8hotNraSFkthhtl1WASSN5ASuapcIE-2YlIPGZHnzMQA0GmN-9_w_DSvbTPFSQngHFjLhnrCgPDXrCu7QrIZEv4Y8xfo7KVf3-sIfcQG45Ekd3Cs5KrjVdK6OQhBnlnbRJqqDX_AcaXb9b96KGGtQA91mi6nEuRCTr73r) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [patchmypc.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHI0zCXbDtH_AINoZeQPF85SfKfow_SLNbkCogNWd_MSQjVrtg9dgXn137-aqRToyvlswWKrrp70l40cow7ouhy7DJu9E9Tz2vr5YgRI6ZR56mwRcypZcd-5vohimiH18_Cv7cdwdrYIyx4vfZtWRF5yfP5xlMU3SRbtGBsQlyDNkNLksqgiUJZh45gtnYTeVM=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [jamf.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEIXCsU7v39MQVBeXHJtRc9HgqXQEBV1-zHmKnKZfsJVsFXqjWP37pvIE6TKIM29zj7RPYkfDl7koHsDZPENmVcUAPiBBzTu-SfM1OxKDt6huYMr9Qc7uCX2HKud2YNIlMYUnGGfyU6rpU8s1owg7QO-OqMVDk2mRIUAaXVehIkYILBd-xvZVHnWdw2tDaJPBa5Bh4wacbI4mpPB4M=) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [chromeenterprise.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGbuGLVpLhom5oOnIT9l20R--P_7H2pqonVAnkXmEwJoyH_riJlitqOjWzRtSj5oVIkn2rjaCPTKusrzP_rcUXskXr4prhlubMTGydQXJbbuwe68Aj1LNm5i2SmhsCK7-vkpVNeDpvNDsxA1BV9hRZjJ0sPeNmX_Wjb1eNdE5aOAO2CP24w) *(vertexaisearch.cloud.google.com)*
  > ### Summary of the Feature  The **"Local Network Access (LNA) restrictions for Background Fetch"** feature plugs a security gap where web applications could potentially bypass Local Network Access restrictions by delegating requests to the Background
- [\[blink-dev\] Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17180.html) *(mail-archive.com)*
  > This prevents sites from bypassing LNA checks by using Background Fetch instead of regular Fetch. For enterprises, you can use existing Local Network Access enterprise policies in the same way you previously would have for regular Fetch API requests ...
- [\[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17193.html) *(mail-archive.com)*
  > This prevents &gt; sites from bypassing LNA checks by using Background Fetch instead of &gt; regular Fetch. For enterprises, you can use existing Local Network Access &gt; enterprise policies in the same way you previously would have for regular &gt;...
- [Re: \[blink-dev\] Re: Intent to Ship: Local Network Access restrictions for Background Fetch](http://www.mail-archive.com/blink-dev@chromium.org/msg17224.html) *(mail-archive.com)*
  > This prevents &gt;&gt; sites from bypassing LNA checks by using Background Fetch instead of &gt;&gt; regular Fetch. For enterprises, you can use existing Local Network Access &gt;&gt; enterprise policies in the same way you previously would have for ...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Users can enable the new permission prompt by <strong>setting chrome://flags#local-network-access-check to &quot;Enabled (Blocking)&quot;.</strong> This supports triggering the Local Network Access permission prompt for requests initiated using the J...
- ["requests to the local network are not allowed" (2026): Your Ultimate Guide to Unlocking Localhost & Fixing Cross-Origin Woes](https://codegive.com/blog/requests_to_the_local_network_are_not_allowed.php) *(codegive.com)*
  > An Electron app that attempts to load file:// content and then access localhost via standard fetch would face the same browser restrictions unless Node integration is carefully used or a local server serves the content.
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > This applies to fetch(), XMLHttpRequest, subresource loads, and — critically — iframe embeds (Chrome for Developers — Local Network Access).
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu · 2026-02-28T00:00:00)*
  > Chrome&#x27;s Local Network Access restrictions aim to mitigate these risks by <strong>enforcing permission prompts for websites that attempt to interact with local network resources</strong>.
- [Fix Codex CLI “Network Access Restricted” in 2 Commands (2026) - SmartScope](https://smartscope.blog/en/generative-ai/chatgpt/codex-network-restrictions-solution) *(smartscope.blog · 2026-07-20T00:00:00)*
  > <strong>Network access lets the agent fetch packages, call APIs, and transmit data</strong>.
- [iOS Dev Course: Background Modes (Fetch) \| by Maksim Vialykh \| Medium](https://medium.com/@vialyx/ios-dev-course-background-modes-fetch-70c18f9f58d5) *(medium.com · 2018-11-25T18:49:07)*
  > Read more on Apple Developer. Here you can read about all background modes. We’l talk about bg fetch in that article. The app regularly downloads and processes small amounts of content from the network.
- [javascript - Access to fetch at from origin 'http://localhost:3000' has been blocked by CORS policy - Stack Overflow](https://stackoverflow.com/questions/61238680/access-to-fetch-at-from-origin-http-localhost3000-has-been-blocked-by-cors) *(stackoverflow.com)*
  > I thought localhost was now granted an exception from CORS restrictions on modern browsers including Chrome. You are pulling in your HTML directly from a web server and not from a local source file are you? ... Hi, how can i do the same in next js? s...
- [How to Access Your Local Network Remotely (2026 Guide)](https://localxpose.io/blog/access-local-network-remotely) *(localxpose.io · 2026-04-29T00:00:00)*
  > How to Access Your Local Network Remotely (2026 Guide) 2026-04-29T00:00:00.000Z /blog/og/access-local-network-remotely.jpg Learn how to access your local network remotely without port forwarding or VPNs. Step-by-step guide using secure tunneling for ...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)*
  > We have previously run a Dev Trial and a 50% Finch experiment on Canary/Dev/Beta which helped alert potentially affected developers and find some bugs early before shipping. Based in part on questions from affected developers we have put together an ...
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > You want to attempt to request the permission by making an initial local network request from your main application window, and then your workers can make use of that permission (including from the background). Dedicated Workers are strictly owned by...
- [Progressive Web App (PWA) Development Ultimate Guide - Riseup Labs](https://riseuplabs.com/pwa-development-ultimate-guide) *(riseuplabs.com · 2025-12-10T05:24:22)*
  > A service worker is a JavaScript file that acts as a network proxy, intercepting and controlling network requests made by a PWA. It can cache resources, serve assets from cache, handle background tasks, and provide the ability to work offline. ... Ru...
- [Navigating Safari/iOS PWA Limitations and Bugs: Essential Tips and Tricks - Technologies](https://vinova.sg/navigating-safari-ios-pwa-limitations) *(vinova.sg · 2025-08-15T04:55:15)*
  > Can your PWA reliably sync data or perform tasks while running in the background on an iPhone or iPad? For developers targeting the US market, it’s crucial to understand that <strong>iOS heavily restricts background activity for PWAs</strong>.
- [PWA iOS Limitations and Safari Support \[2026\]](https://www.magicbell.com/blog/pwa-ios-limitations-safari-support-complete-guide) *(magicbell.com · 2026-03-20T00:00:00)*
  > <strong>No background location, no background sync, and 7-day cache expiry make this impractical</strong>. Build native for the mobile app, PWA for the admin portal. For more implementation tips, see Essential PWA Strategies for Enhanced iOS Performa...
- [Current Progressive Web App Limitations To iOS Users - Tigren](https://www.tigren.com/blog/progressive-web-app-limitations) *(tigren.com · 2025-08-05T10:19:21)*
  > Critics have noted that Apple’s engagement with web standards bodies like the W3C and WHATWG is less active compared to other tech giants. This lack of engagement can result in slower adoption rates, as Safari might not be aligned with the latest ind...
- [Local network access restrictions - Chrome Platform Status](https://chromestatus.com/feature/5152728072060928) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > This aligns Chromium&#x27;s implementation ... ... <strong>Background Fetch requests require that the service worker&#x27;s origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers</strong>....
- [local network permission issue - Google Chrome Community](https://support.google.com/chrome/thread/414807583/local-network-permission-issue?hl=en) *(support.google.com · 2026-03-05T00:00:00)*
  > Skip to main content · Google Chrome Help · Sign in · Google Help · Help Center · Community · Google Chrome · Terms of Service · Submit feedback · Send feedback on
- [How to Adapt to Local Network Access Introduced in Chrome 142? - Stack Overflow](https://stackoverflow.com/questions/79819723/how-to-adapt-to-local-network-access-introduced-in-chrome-142) *(stackoverflow.com)*
  > ... Show activity on this post. The Chrome team recommends you <strong>use the fetch() method with the &#x27;targetAddressSpace&quot; option flag</strong> in order to get a ressources located on a private domaine, from a public domaine.
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > Either email addresses are anonymous ... to blink-dev, Hubert Chao, Joe DeBlasio, David Adrian ... <strong>Chrome 141 restricts the ability for sites to make requests to the user&#x27;s local network, gated behind a permission prompt</strong>....
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com · 2026-03-08T00:00:00)*
  > The local network request is blocked and the fetch call rejects with a network error. Your app should catch this failure and display a meaningful message explaining that local network access is required. Users can later change the permission through ...
- [Loopback Address - What is it & How Does it Work? \| Hostwinds](https://www.hostwinds.com/blog/loopback-address) *(hostwinds.com · 2024-08-16T00:00:00)*
  > 127.0.0.1, commonly known as “localhost,” is a loopback IP address that <strong>allows a computer or server to talk to itself without using an external network</strong>
- [127.0.0.1 and Localhost Explained \| DNScale](https://dnscale.eu/learning/localhost-127-0-0-1-explained) *(dnscale.eu · 2026-06-03T00:00:00)*
  > <strong>If an application opens a connection to 127.0.0.1, the network stack loops the connection back locally</strong>. ... No external DNS provider is involved. localhost is the human-readable name for loopback.
- [Understanding Localhost: 127.0.0.1, Loopback, and Dev Environment Secrets](https://blogs.businesscompassllc.com/2025/10/understanding-localhost-127001-loopback.html) *(blogs.businesscompassllc.com · 2025-10-22T12:30:00)*
  > <strong>This IP address is reserved specifically for loopback purposes and is recognized by all operating systems</strong>. When a program tries to connect to 127.0.0.1, it’s redirected to the local machine without any network traffic leaving the dev...
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > Background Fetch requests now <strong>require that the service worker&#x27;s origin has the necessary Local Network Access (LNA) permission to send requests to local or loopback servers</strong>.
- [Background Fetch API](https://chromestatus.com/feature/5712608971718656) *(chromestatus.com)*
  > We cannot provide a description for this page right now
- [CORS enforcement for Background Fetch - Chrome Platform Status](https://chromestatus.com/feature/6210300985606144) *(chromestatus.com · 2026-08-06T00:00:00)*
  > We cannot provide a description for this page right now
- [Local network access restrictions for WebSockets](https://chromestatus.com/feature/5197681148428288) *(chromestatus.com · 2025-09-03T00:00:00)*
  > We cannot provide a description for this page right now
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons). This work supersedes a prior effort called Priva...
- [Local Network Access](https://wicg.github.io/local-network-access) *(wicg.github.io · 2026-08-07T00:00:00)*
  > <strong>This instructs the browser to allow the fetch to bypass mixed-content checks even though the scheme is non-secure and potentially obtain a connection to the target server</strong>.
- [Private Network Access](https://wicg.github.io/private-network-access) *(wicg.github.io · 2024-09-26T00:00:00)*
  > <strong>This instructs the browser to allow the fetch even though the scheme is non-secure and obtain a connection to the target server</strong>. The new fetch() API is backward-compatible. Note that this feature cannot be abused to bypass mixed cont...
- [New Chrome Setting Which Blocks Local Network Access for Web Apps – TechNotes](https://www.technotes.me/2026/02/new-chrome-setting-which-blocks-local-network-access-for-web-apps) *(technotes.me · 2026-02-09T00:00:00)*
  > Chromium-based browsers (Chrome, Microsoft Edge, Brave, Vivaldi, Opera) have introduced a Local Network Access permission model that can block or prompt when a website tries to reach local IPs (private ranges like 192.168.x.x, 10.x.x.x, 172.16-31.x.x...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com · 2019-09-30T00:00:00)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > spec: background-fetch; urlPrefix: https://<strong>wicg.github.io/background-fetch</strong>/   type:interface; text: BackgroundFetchManager ·   type:dfn; text:background fetch · &lt;/pre&gt;  · &lt;pre class=link-defaults&gt; spec:html; typ...
- [Background Fetch · Issue #107 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/107) *(github.com · 2018-10-26T10:05:44)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Specification Title: Background Fetch · Specification or proposal URL: https://<strong>wicg.github.io/background-fetch</strong>/ Caniuse.com URL (optional): Bugzilla URL (optional): Mozillians who can provide input (optional): @asutherland ...
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > slug: Web/API/Background_Fetch_API · page-type: web-api-overview · status:   - experimental · browser-compat:   - api.BackgroundFetchManager ·   - api.BackgroundFetchRegistration ·   - api.BackgroundFetchRecord · spec-urls: https://<strong>...
- [Background Fetch API throws for extension protocol · Issue #12370 · mdn/content](https://github.com/mdn/content/issues/12370) *(github.com · 2022-01-23T16:00:21)* *(Cites: `https://wicg.github.io/background-fetch`)*
  > Neither the README.md https://github.com/WICG/background-fetch#readme, specification https://<strong>wicg.github.io/background-fetch</strong>/, nor MDN documentation explains that background fetch will throw for browser extension protocol (...

## 📚 Platform Documentation & Specifications

- [periodic-background-sync/index.bs at main · WICG/periodic-background-sync](https://github.com/WICG/periodic-background-sync/blob/main/index.bs) *(github.com)*
- [Background Fetch · Issue #107 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/107) *(github.com)*
- [content/files/en-us/web/api/background\_fetch\_api/index.md at main · mdn/content](https://github.com/mdn/content/blob/main/files/en-us/web/api/background_fetch_api/index.md?plain=1) *(github.com)*
- [Background Fetch API throws for extension protocol · Issue #12370 · mdn/content](https://github.com/mdn/content/issues/12370) *(github.com)*
- [webcomponents/proposals/css-modules-v1-explainer.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/css-modules-v1-explainer.md) *(github.com)*
- [GitHub - WICG/webpackage: Web packaging format · GitHub](https://github.com/WICG/webpackage) *(github.com)*
- [Tools \| Web Platform Incubator \| Community Groups \| Discover W3C groups \| W3C](https://www.w3.org/groups/cg/wicg/tools) *(w3.org)*
- [webcomponents/proposals/html-module-spec-changes.md at gh-pages · WICG/webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/html-module-spec-changes.md) *(github.com)*
- [Offline and background operation - Progressive web apps \| MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) *(developer.mozilla.org)*
- [Background check fetches loopback and private-network story URLs · Issue #4 · fooblahblah/hn-paywall-filter](https://github.com/fooblahblah/hn-paywall-filter/issues/4) *(github.com)*
- [87717 - Conn: Offline: localhost/127.0.0.1 not accessible](https://bugzilla.mozilla.org/show_bug.cgi?id=87717) *(bugzilla.mozilla.org)*
- [local-network-access/explainer.md at main · WICG/local-network-access](https://github.com/WICG/local-network-access/blob/main/explainer.md) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 62 result(s) found across 11 planned queries — **46 verified relevant**
  - `"chromestatus.com/feature/6225598451154944" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (0 returned)
  - `"wicg.github.io/background-fetch" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Local Network Access restrictions for Background Fetch" API` — *Core feature API query* (3 returned)
  - `"Local Network Access restrictions for Background Fetch" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"wicg.github" OR "fetch.spec" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local Network Access restrictions for Background Fetch" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"Local Network Access" "Background Fetch" (permission OR policy OR Chrome)` — *Discover technical blog posts, documentation, and enterprise guides on configuring LNA permissions for Background Fetch.* (8 returned)
  - `"backgroundFetch.fetch" ("local-network-access" OR localhost OR "127.0.0.1" OR loopback)` — *Find JavaScript and Service Worker code snippets demonstrating Background Fetch requests targeting local network endpoints.* (8 returned)
  - `site:chromestatus.com OR site:chromium.googlesource.com "Local Network Access" "Background Fetch"` — *Track Chromium intent-to-ship notices, commit history, and release status for Background Fetch LNA enforcement.* (8 returned)
  - `"Local Network Access" "Background Fetch" (bypass OR security OR "Private Network Access")` — *Locate web security discussions, vulnerability writeups, and developer feedback regarding the patch of the LNA bypass in Background Fetch.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **11 verified relevant**
- **Twitter / X API v2:** *found 9 tweet(s)*
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 0 result(s) found — **0 verified relevant**
- **Standards Positions:** 2 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 2 result(s) found — **0 verified relevant**
- **Baseline (baseline.dev):** *untracked*
- **NPM Registry:** 6 result(s) found — **2 verified relevant**
- **Web Platform Tests (wpt.fyi):** 17 item(s) inspected

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 0 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/6225598451154944)
- [ChromeStatusLite](https://chromestatuslite.com/feature/6225598451154944)
- [Specification](https://wicg.github.io/background-fetch)
- [Chromium Tracking Bug](https://crbug.com/455486148)
