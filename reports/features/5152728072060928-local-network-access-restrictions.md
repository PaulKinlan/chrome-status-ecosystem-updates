# Local network access restrictions

> **Report Week:** 2026-W43 | **Milestone:** Chrome 156 | **Category:** Stepped rollout

## Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

### Motivation

Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt helps stop the exploitation of vulnerable devices and servers from the drive-by-web, and gives users control over which sites can probe their local network.

## Ecosystem Status

- **Momentum:** High (footprint 625 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Chrome has moved forward with Local Network Access restrictions, shifting away from the complex Private Network Access preflight model to an explicit browser permission prompt split into local-network and loopback-network controls. While this hardens security against cross-site request forgery and local network fingerprinting, it introduces severe friction for web apps that interface with local hardware, developer tooling, and intranet servers. The feature currently sits in limited availability, heavily driven by Chromium with other engine stances still materializing.

### Recommendations
- Actionable Advice: Web teams dealing with intranet apps or local hardware integration should audit their requests, prepare for secure context requirements, and test against Chrome's granular permission flags to handle scenarios where users deny or are prompted for local and loopback access.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## Packages & Polyfills

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

## 📰 Ecosystem Blogs & Articles

- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > The transition from the legacy \*\*Private Network Access (PNA)\*\* specification to the \*\*Local Network Access (LNA)\*\* permission model marks a major shift in how Chromium browsers protect private IP addresses and loopback endpoints from public internet...
- [chrome.com](https://developer.chrome.com/blog/private-network-access-preflight) *(developer.chrome.com)*
  > \*\*Why the pivot happened:\*\* PNA originally relied on CORS preflights requiring target devices (routers, printers, IoT hardware) to respond with headers like \`Access-Control-Allow-Private-Network: true\`
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > This proved largely impractical for unpatchable embedded devices \*\*The LNA model:\*\* Starting with Chrome 142, Chromium switched to gating public-to-local requests behind an explicit browser permission prompt within secure (HTTPS) contexts
- [microsoft.com](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessipaddressspaceoverrides) *(learn.microsoft.com)*
  > \*\*Evolution:\*\* Chrome 145 split the permission into \`local-network\` (intranets/RFC 1918) and \`loopback-network\` (\`127.0.0.1\`/\`localhost\`), Chrome 146 added enterprise CIDR overrides, and Chrome 147 expanded enforcement across WebSockets and WebTransp...
- [chrome.com](https://developer.chrome.com/release-notes/142) *(developer.chrome.com)*
  > \*\*"New permission prompt for Local Network Access" & Release Notes (M142+)
- [chrome.com](https://developer.chrome.com/blog/pna-on-hold) *(developer.chrome.com)*
  > Google officially announced the pause of PNA preflights in favor of the user-permission prompt model
- [web.dev](https://web.dev/cors-rfc1918-feedback) *(web.dev)*
  > The posts explain the security rationale: preventing Cross-Site Request Forgery (CSRF) such as "drive-by pharming" against local routers and eliminating silent intranet port scanning and fingerprinting
- [retool.com](https://community.retool.com/t/chrome-access-control-allow-private-network/62988) *(community.retool.com)*
  > \*\*Adoption Guide ("Adapting your website for new Local Network Access restrictions in Chrome") It provides guidance on migrating sites to secure contexts, updating embedded \`&lt;iframe&gt;\` elements, managing the prompt lifecycle, and testing via DevTools ...
- [google.com](https://support.google.com/chrome/thread/414807583/local-network-permission-issue?hl=en) *(support.google.com)*
  > query({ name: 'local-network' })\`
- [New Chrome Setting Which Blocks Local Network Access for Web Apps – TechNotes](https://www.technotes.me/2026/02/new-chrome-setting-which-blocks-local-network-access-for-web-apps) *(technotes.me)*
  > It highlights that web apps must implement robust UI fallback handling: if a user denies or dismisses the prompt, apps need to display clear troubleshooting instructions rather than hanging or throwing unhandled promise rejections
- [authon.dev](https://blog.authon.dev/why-every-website-wants-to-access-your-local-network-and-what-to-do-about-it) *(blog.authon.dev)*
  > Authon / Alan West: \*"Why Every Website Wants to Access Your Local Network"\* \*\*Focus:\*\* Deep dive into the attack surface and developer mechanics
- [Configure Chrome to Suppress the Local Network Access Prompt for Okta FastPass \| Okta Support](https://support.okta.com/help/s/article/configure-chrome-to-suppress-the-local-network-access-prompt-for-okta-fastpass?language=en_US) *(support.okta.com)*
  > Services that bridge web portals to native local agents—such as \*\*Dell Online Support\*\* (hardware diagnostics via a localhost daemon) and \*\*Okta FastPass\*\* (authenticating via local loopback sockets)—experienced broken user flows or repetitive prompt...
- [dell.com](https://www.dell.com/support/kbdoc/en-us/000372996/dell-online-support-experience-impacted-due-to-local-network-access-restrictions) *(dell.com)*
  > Services that bridge web portals to native local agents—such as \*\*Dell Online Support\*\* (hardware diagnostics via a localhost daemon) and \*\*Okta FastPass\*\* (authenticating via local loopback sockets)—experienced broken user flows or repetitive prompt...
- [microsoft.com](https://learn.microsoft.com/en-us/ecdn/how-to/configure-local-network-access-policy) *(learn.microsoft.com)*
  > Both enterprise vendors and identity providers have published guidance advising corporate administrators to pre-approve internal domains using the enterprise policy \`LocalNetworkAccessAllowedForUrls\` to bypass end-user prompts Microsoft published con...
- [jonbrown.org](https://jonbrown.org/blog/when-chromium-mistakes-your-vpn-for-a-local-network) *(jonbrown.org)*
  > IT and security teams observed that modern Zero Trust Network Access (ZTNA) clients and Carrier-Grade NAT (CGNAT) ranges (such as \`100.64.0.0/10\`) often caused external SaaS platforms to be misclassified as "local" requests by Chromium Developer blog...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact emails \[e...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restrictions 2,...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Chromestatus Mon, 24 Nov 202...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey, I just wanted to clarify a c...
- [\[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15689.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Chris Thompson Wed, 28 Jan 2026 10:05:29 -0800 Hi Alex...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Local netw...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network acces...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:23 -0700 \*N...
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > Due to how the permissions API works, querying for the state of the local-network-access permission returns &quot;prompt&quot; regardless of whether the LNA feature flag is enabled, if the user isn&#x27;t granted or denied the permission.
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Gating the ability for websites to perform these requests behind a permission reduces the ability of sites to use these requests to fingerprint the user&#x27;s local network. This permission is restricted to secure contexts. This work is adding to th...
- [Local Network Access iFrame Restrictions Causing Development Problems - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/5646980/local-network-access-iframe-restrictions-causing-d) *(learn.microsoft.com · 2025-12-04T00:00:00)*
  > We are experiencing the exact same problem in Model Driven Power Apps (Dataverse) when we have the API call in a side-panel. The side-panel uses an iframe, and we cannot control this and put allow=&quot;local-network-access&quot; on it. ... The imple...
- [r/sysadmin on Reddit: How to apply LocalNetworkAccessAllowedForUrls in Google Workspace Admin Console.](https://www.reddit.com/r/sysadmin/comments/1o1itmh/how_to_apply_localnetworkaccessallowedforurls_in) *(reddit.com · 2025-10-08T18:31:10)*
  > 1- Local Network Access restrictions &lt;strong&gt;Specifies whether Local Network Access warnings are enforced and requests blocked&lt;/strong&gt; 2- Local file access to file:// URLs in the PDF Viewer 3- Local storage configuration Controls whether users can s...
- [Chrome's Local-Network-Access: Troubleshooting and Best Practices \| Paul Serban](https://blog.paulserban.eu/post/chromes-local-network-access-troubleshooting-and-best-practices) *(blog.paulserban.eu · 2025-11-29T00:00:00)*
  > This move was designed to protect users from malicious scripts that attempt to exploit devices on their local network, such as printers, IoT devices, or internal servers. Chrome&#x27;s implementation of this involves a stricter set of rules for cross...
- [Microsoft Edge Browser Policy Documentation LocalNetworkAccessAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessallowedforurls) *(learn.microsoft.com)*
  > Specifies a list of URL patterns for which requests initiated from matching origins are exempt from Local Network Access restrictions.
- [chromium - How does "local network access restrictions" compare to CORS? - Information Security Stack Exchange](https://security.stackexchange.com/questions/283219/how-does-local-network-access-restrictions-compare-to-cors) *(security.stackexchange.com · 2025-10-09T00:00:00)*
  > Chrome (and Chromium-based browsers) have added &quot;local network access restrictions.&quot; Chrome 142 restricts the ability to make requests to the user&#x27;s local network, gated behind a permiss...
- [How to Debug Blocked Requests: Local-Network-Access in Chrome \| Paul Serban](https://blog.paulserban.eu/post/how-to-debug-blocked-requests-local-network-access-in-chrome) *(blog.paulserban.eu · 2026-02-13T00:00:00)*
  > We&#x27;ll also provide code examples, step-by-step techniques, and actionable insights. Local-Network-Access restrictions &lt;strong&gt;protect users from unauthorized access to their local devices&lt;/strong&gt; (like routers, IoT devices, and local servers).
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu · 2026-02-28T00:00:00)*
  > Enhanced UI messaging to guide users to grant permissions if prompted. Chrome&#x27;s Local Network Access policies are not just another layer of restrictions-they&#x27;re a step toward a more secure web. While these changes might require developers t...
- [Best Practices for Configuring Local Network Permissions in Chrome \| Paul Serban](https://blog.paulserban.eu/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(blog.paulserban.eu · 2026-01-29T00:00:00)*
  > Moreover, nested iframes require properly delegated permissions. Without the &lt;strong&gt;allow=&quot;local-network-access&quot; attribute, any embedded iframes attempting local network access will be blocked by Chrome, even if the top-level page has perm...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)*
  > Part of our goal for having a Dev Trial was to give site owners time to adjust their requests (especially if they need to use the mixed content exemptions) and to potentially adapt their UX flows so the permission requests are less surprising to user...
- [Best Practices for Configuring Local Network Permissions in Chrome](https://paulserban.eu/blog/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(paulserban.eu)*
  > Chrome exposes a developer-friendly API that allows you to programmatically check the status of the local-network-access permission using JavaScript:
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > We have previously run a Dev Trial and a 50% Finch experiment on Canary/Dev/Beta which helped alert potentially affected developers and find some bugs early before shipping. Based in part on questions from affected developers we have put together an ...
- [Error message - Local network access permission denied](https://www.dynamsoft.com/web-twain/docs/faq/chromium-142-local-network-access-issue.html) *(dynamsoft.com · 2025-11-04T00:00:00)*
  > If Dynamic Web TWAIN runs inside ... iframe is same-origin, no additional iframe permission configuration is required. &lt;strong&gt;For Chrome 145+, use loopback-network (and local-network only if needed).&lt;/strong&gt;...
- [Test Chrome Local Network Access with an HTTPS Tunnel \| Localtonet Blog](https://localtonet.com/blog/test-chrome-local-network-access-https-tunnel) *(localtonet.com · 2026-10-16T08:15:17)*
  > &lt;strong&gt;The loopback-network permission applies when a public origin reaches a service on the user&#x27;s own machine, such as localhost, 127.0.0.1, or ::1.&lt;/strong&gt; The local-network permission applies when the destination is another protected devic...
- [Chrome 156 Blocks Local Network? How to Grant Access (2026)](https://www.superchargebrowser.com/library/chrome-156-local-network-access) *(superchargebrowser.com · 2026-09-25T00:00:00)*
  > Two grants sit behind it. &lt;strong&gt;local-network covers a public site reaching a device on your LAN, such as a router or an internal server. loopback-network covers a public site reaching an app running on the machine you are using&lt;/strong&gt;.
- [Why Chrome Restricts Local Network Access (& How to Adapt) \| Paul Serban](https://paulserban.eu/blog/post/why-chrome-restricts-local-network-access-how-to-adapt) *(paulserban.eu · 2026-01-14T00:00:00)*
  > navigator.permissions.query({ name: &#x27;local-network-access&#x27; }) .then((result) =&gt; { console.log(&#x27;Local Network Access Permission:&#x27;, result.state); if (result.state === &#x27;granted&#x27;) { console.log(&#x27;Access allowed&#x27;...
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)*
  > When this policy is set to Enabled, &lt;strong&gt;Local Network Access requests will only display warnings in Chrome DevTools due to Local Network Access checks failing&lt;/strong&gt;. When this policy is set to Disabled or unset, Local Network Access requests w...
- [Chrome Local Network Access Prompts with Jamf Trust ZTNA \| Jamf Support Portal](https://support.jamf.com/en/articles/12894739-chrome-local-network-access-prompts-with-jamf-trust-ztna) *(support.jamf.com · 2026-04-01T14:12:14)*
  > ⚠️ Warning: The LocalNetworkAccessRestrictionsTemporaryOptOut policy that may have been referenced as a quick workaround is removed in Chrome 146. ​ If your deployment uses this policy, migrate to Option 1 (LocalNetworkAccessIpAddressSpaceOverrides) ...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes) *(chromeenterprise.google · 2026-09-09T00:00:00)*
  > Chrome 146 introduces two new enterprise policies for managing local network access restrictions: LocalNetworkAccessIpAddressSpaceOverrides and LocalNetworkAccessPermissionsPolicyDefaultEnabled. These policies can be set using custom configurations. ...
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > There’s a supplementary policy — LocalNetworkAccessPermissionsPolicyDefaultEnabled — that &lt;strong&gt;causes LNA permissions to be automatically delegated to child iframes without explicit annotation&lt;/strong&gt;.
- [Chrome 154 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/154) *(chromestatus.com)*
  > LocalNetworkAccessRestrictionsTemporaryOptOut · LocalNetworkAccessAllowedForUrls · LoopbackNetworkAllowedForUrls · LocalNetworkAccessPermissionsPolicyDefaultEnabled · LocalNetworkAccessIpAddressSpaceOverrides).
- [r/webdev on Reddit: Why are so many websites now asking to "access your local network?"](https://www.reddit.com/r/webdev/comments/1t22lta/why_are_so_many_websites_now_asking_to_access) *(reddit.com · 2026-05-02T21:38:17)*
  > This is because &quot;Local Network Access&quot; has been added to the site permissions managed by your browser. This means your browser is asking you whether or not to grant you permission. ... Back to the pen ! ... Is it that easy to stop you from ...
- [r/webdev on Reddit: I've never seen this before... What does it mean?](https://www.reddit.com/r/webdev/comments/1pu40e8/ive_never_seen_this_before_what_does_it_mean) *(reddit.com · 2025-12-23T20:19:48)*
  > Suddenly chrome was throwing this prompt when the browser tries to access the ... It’s technically true but I feel sounds much more invasive than what we were trying to do. It’s like if the only option when installing an app was to grant it all permi...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restr...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Chromestatus Mon, ...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey, I just wanted to c...
- [\[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15689.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Chris Thompson Wed, 28 Jan 2026 10:05:29 -08...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: ...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local net...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:2...
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com · 2026-01-09T00:43:55)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > I see that 5.4.4.3 of https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/#local-network-access-check does have some &quot;prompt the user&quot; language, so presumably that corresponds to &quot;local-network&quot;.
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com · 2025-06-26T16:41:42)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Specification title Local Network Access Specification or proposal URL (if available) https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ Explainer URL (if available) https://github.com/WICG/local-network-access/blob/master/explai...
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com · 2025-06-26T17:03:32)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens No response Title of the proposal Local Network Access URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ URL to the spec&#x27;s repository https://github.com/WICG/local-network-access Issue Tracker URL...
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com · 2023-04-06T08:41:15)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens @annevk Title of the spec Local Network Access (aka Private Network Access, CORS-RFC1918) URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt; URL to the spec&#x27;s repository htt...
- [Local Network Access checks do not run on GTK and WPE by igower · Pull Request #76721 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/76721) *(github.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Local Network Access checks do not run on GTK and WPE https://bugs.webkit.org/show\_bug.cgi?id=327217 rdar://189783419 Reviewed by NOBODY (OOPS!). This is Local Network Access feature work: https://&lt;strong&gt;wicg.github.io/local-network-access...

## 📚 Platform Documentation & Specifications

- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com)*
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com)*
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com)*
- [Local Network Access checks do not run on GTK and WPE by igower · Pull Request #76721 · WebKit/WebKit](https://github.com/WebKit/WebKit/pull/76721) *(github.com)*
- [Local network access restrictions · Issue #1127 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1127) *(github.com)*
- [\[Proposal\] Allow querying permissions for specific URL · Issue #108 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/108) *(github.com)*
- [Firefox 153 supports local-network and loopback-network permissions by RizgarOzan · Pull Request #30685 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/pull/30685) *(github.com)*
- [Permissions-Policy: local-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 68 result(s) found across 13 planned queries — **45 verified relevant**
  - `"chromestatus.com/feature/5152728072060928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/local-network-access/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/local-network-access" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (5 returned)
  - `"Local network access restrictions" API` — *Core feature API query* (8 returned)
  - `"Local network access restrictions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"local-network-access permission" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local network access restrictions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local network access restrictions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (5 returned)
  - `"Local Network Access" Chrome (permission OR prompt) "local-network" OR "loopback-network" guide` — *Developer tutorials and transition guides for adapting web applications to Chrome's local network permission prompts.* (8 returned)
  - `navigator.permissions.query ("local-network" OR "loopback-network" OR "local-network-access")` — *JavaScript syntax and code examples showing how to query the local and loopback network permissions via the Permissions API.* (8 returned)
  - `"Local Network Access" (WebSocket OR WebTransport OR fetch) "permission prompt" mixed content` — *Code examples and implementation details for initiating fetch, WebSocket, and WebTransport requests to local network endpoints.* (8 returned)
  - `"LocalNetworkAccessIpAddressSpaceOverrides" OR "LocalNetworkAccessRestrictionsTemporaryOptOut" OR "LocalNetworkAccessPermissionsPolicyDefaultEnabled"` — *Enterprise policy updates, administrator rollout timelines, and institutional adoption tracking.* (8 returned)
  - `"Local Network Access" (router OR IoT OR localhost) permission (site:news.ycombinator.com OR site:reddit.com)` — *Community discussions, developer sentiment, and real-world friction reports regarding breaking changes to local development and IoT interfaces.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 24 result(s) found — **19 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 6 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 8 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152728072060928)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152728072060928)
- [Specification](https://wicg.github.io/local-network-access)
- [Chromium Tracking Bug](https://crbug.com/394009026)
