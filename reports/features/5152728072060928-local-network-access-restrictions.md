# Local network access restrictions

> **Report Week:** 2026-W44 | **Milestone:** Chrome 156 | **Category:** Stepped rollout

## Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

### Motivation

Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt helps stop the exploitation of vulnerable devices and servers from the drive-by-web, and gives users control over which sites can probe their local network.

## Ecosystem Status

- **Momentum:** High (footprint 665 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Local Network Access (LNA) restrictions supersede the earlier Private Network Access (PNA) preflight proposal by shifting from target-device CORS opt-ins to browser-enforced permission prompts in secure contexts. Rolling out progressively across Chromium releases, the mechanism mitigates intranet CSRF and local port scanning while relaxing mixed-content blocking for approved local endpoints. Both Chromium and Mozilla are driving implementation, though its friction on local companion daemons has necessitated ongoing refinement.

### Recommendations
- Actionable Advice: Ensure all applications initiating requests to private subnets or localhost are served strictly over HTTPS, and test compatibility against permission gates using browser flags. If maintaining desktop companion daemons or enterprise web apps, adopt the granular 'local-network' and 'loopback-network' Permissions Policy directives and deploy enterprise policy allowlists to prevent workflow disruptions.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## Packages & Polyfills

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

## 📰 Ecosystem Blogs & Articles

- [chromestatus.com](https://chromestatus.com/feature/5152728072060928/activity) *(chromestatus.com)*
  > Google transitioned its network boundary security model from \*\*Private Network Access (PNA)\*\*—which originally required target devices to respond to CORS preflight requests—to \*\*Local Network Access (LNA) restrictions\*\* Under this model, initiated re...
- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > Google transitioned its network boundary security model from \*\*Private Network Access (PNA)\*\*—which originally required target devices to respond to CORS preflight requests—to \*\*Local Network Access (LNA) restrictions\*\* The rationale centers on stopp...
- [okta.com](https://support.okta.com/help/s/article/configure-chrome-to-suppress-the-local-network-access-prompt-for-okta-fastpass?language=en_US) *(support.okta.com)*
  > Under this model, initiated requests from public web origins to local network destinations (e.g., private IP blocks or loopback interfaces) are blocked unless explicitly granted by the user via a permission prompt or managed through enterprise admini...
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > Because many local network devices (routers, printers, IoT hardware) cannot easily obtain public TLS certificates or be updated via firmware to support CORS headers, Chrome relaxes mixed-content blocking for local network endpoints once the user expl...
- [chrome.com](https://developer.chrome.com/blog/private-network-access-update-2024-03) *(developer.chrome.com)*
  > \*\*The Pivot from PNA Preflights:\*\* Chrome officially paused the previous PNA preflight model because requiring billions of deployed legacy devices to adopt custom HTTP headers proved practically impossible
- [uillinois.edu](https://help.uillinois.edu/TDClient/37/uic/KB/Article/2993/How-do-I-edit-Google-Chrome-Local-Network-Access-Permissions) *(help.uillinois.edu)*
  > \*\*Permission UX & Mixed Content Waiver:\*\* When a secure origin requests a local resource, the browser shows a prompt (\*"Look for and connect to any device on your local network"\* or split variations) \*\*The "Localhost Daemon" Problem:\*\* Many identity ...
- [appspot.com](https://cr-status.appspot.com/feature/5152728072060928?gate=5150690177187840) *(cr-status.appspot.com)*
  > \*\*Milestone Progression:\*\* Chrome 142 enabled default gating for subresource fetches; Chrome 145 split the permission into \`local-network\` (LAN) and \`loopback-network\` (\`127.0.0.1\` / \`localhost\`); and Chrome 147 expanded enforcement to WebSockets and...
- [chromestatus.com](https://chromestatus.com/feature/5197681148428288) *(chromestatus.com)*
  > \*\*Milestone Progression:\*\* Chrome 142 enabled default gating for subresource fetches; Chrome 145 split the permission into \`local-network\` (LAN) and \`loopback-network\` (\`127.0.0.1\` / \`localhost\`); and Chrome 147 expanded enforcement to WebSockets and...
- [chrome.com](https://developer.chrome.com/release-notes/147) *(developer.chrome.com)*
  > \*\*Milestone Progression:\*\* Chrome 142 enabled default gating for subresource fetches; Chrome 145 split the permission into \`local-network\` (LAN) and \`loopback-network\` (\`127.0.0.1\` / \`localhost\`); and Chrome 147 expanded enforcement to WebSockets and...
- [cardintegrators.com](https://support.cardintegrators.com/support/solutions/articles/72000654186-allowing-local-network-access-in-chrome) *(support.cardintegrators.com)*
  > \*\*The "Localhost Daemon" Problem:\*\* Many identity and desktop companion services (e.g., \*\*Okta FastPass\*\*, \*\*Box Tools\*\*, \*\*Dell SupportAssist\*\*, and smart-card/badge printing agents) rely on web apps calling \`https://localhost\` or \`http://127.0.0.1\`...
- [dell.com](https://www.dell.com/support/kbdoc/en-us/000372996/dell-online-support-experience-impacted-due-to-local-network-access-restrictions) *(dell.com)*
  > \*\*The "Localhost Daemon" Problem:\*\* Many identity and desktop companion services (e.g., \*\*Okta FastPass\*\*, \*\*Box Tools\*\*, \*\*Dell SupportAssist\*\*, and smart-card/badge printing agents) rely on web apps calling \`https://localhost\` or \`http://127.0.0.1\`...
- [retool.com](https://community.retool.com/t/chrome-access-control-allow-private-network/62988) *(community.retool.com)*
  > \*\*Sandboxed and Null-Origin Issues:\*\* Developers using internal platforms like \*\*Retool\*\* or plugin systems like \*\*Figma\*\* reported failures when running scripts that call local microservices If the calling frame operates under an opaque origin (\`ori...
- [figma.com](https://forum.figma.com/ask-the-community-7/chrome-local-network-access-policy-will-make-plugins-published-within-the-organization-unavailable-46262) *(forum.figma.com)*
  > \*\*Sandboxed and Null-Origin Issues:\*\* Developers using internal platforms like \*\*Retool\*\* or plugin systems like \*\*Figma\*\* reported failures when running scripts that call local microservices
- [google chrome 138.0.7204.50 \| PortableApps.com](https://portableapps.com/node/79058) *(portableapps.com · 2025-06-25T00:00:00)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Chrome 141 restricts the ability to make requests to the user&#x27;s local network, gated behind a permission prompt&lt;/strong&gt;.
- [Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu · Open Google Chrome. Click t...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact emails \[e...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Chromestatus Mon, 24 Nov 202...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey, I just wanted to clarify a c...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:23 -0700 \*N...
- [\[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15689.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Chris Thompson Wed, 28 Jan 2026 10:05:29 -0800 Hi Alex...
- [Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Rick Byers Sat, 18 Oct 2025 07:58:27 -...
- [Intent to Prototype: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/DAIKnQ12YNU/m/68e8ItW9AAAJ) *(groups.google.com · 2025-09-18T00:00:00)*
  > Intent to Prototype: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Local net...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restrictions 2,...
- [Microsoft Edge Browser Policy Documentation LocalNetworkAccessAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessallowedforurls) *(learn.microsoft.com)*
  > For more information about Local ... network access restrictions. It &lt;strong&gt;allows specified public websites to access private IP addresses when required for trusted local communication scenarios&lt;/strong&gt;....
- [Microsoft Edge Browser Policy Documentation LocalNetworkAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkallowedforurls) *(learn.microsoft.com · 2026-05-22T00:00:00)*
  > For more information about Local Network Access restrictions, see https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/.
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)*
  > When this policy is set to Disabled or unset, Local Network Access requests will use the default handling of these requests. See https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ for Local Network Access restrictions. This enterprise poli...
- [LocalNetworkAccessAllowedForUrls: Allow sites to make network requests to local devices and local network endpoints. \| Chrome Enterprise](https://chromeenterprise.google/intl/en_uk/policies/local-network-access-allowed-for-urls) *(chromeenterprise.google)*
  > For detailed information on valid URL patterns, please see https://chromeenterprise.google/policies/url-patterns/. See &lt;strong&gt;https://wicg.github.io/local-network-access/ for Local Network Access restrictions&lt;/strong&gt;.
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > Due to how the permissions API works, querying for the state of the local-network-access permission returns &quot;prompt&quot; regardless of whether the LNA feature flag is enabled, if the user isn&#x27;t granted or denied the permission.
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Gating the ability for websites to perform these requests behind a permission reduces the ability of sites to use these requests to fingerprint the user&#x27;s local network. This permission is restricted to secure contexts. This work is adding to th...
- [r/sysadmin on Reddit: How to apply LocalNetworkAccessAllowedForUrls in Google Workspace Admin Console.](https://www.reddit.com/r/sysadmin/comments/1o1itmh/how_to_apply_localnetworkaccessallowedforurls_in) *(reddit.com · 2025-10-08T18:31:10)*
  > 1- Local Network Access restrictions &lt;strong&gt;Specifies whether Local Network Access warnings are enforced and requests blocked&lt;/strong&gt; 2- Local file access to file:// URLs in the PDF Viewer 3- Local storage configuration Controls whether users can s...
- [New Chrome Setting Which Blocks Local Network Access for Web Apps – TechNotes](https://www.technotes.me/2026/02/new-chrome-setting-which-blocks-local-network-access-for-web-apps) *(technotes.me · 2026-02-09T00:00:00)*
  > Web apps that previously worked now fail when calling a local API or local device UI. Users get a prompt asking to allow access to local devices, or the request is blocked. Some apps fail silently (nothing happens), especially when the call is made f...
- [Local Network Access iFrame Restrictions Causing Development Problems - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/5646980/local-network-access-iframe-restrictions-causing-d) *(learn.microsoft.com · 2025-12-04T00:00:00)*
  > We are experiencing the exact same problem in Model Driven Power Apps (Dataverse) when we have the API call in a side-panel. The side-panel uses an iframe, and we cannot control this and put allow=&quot;local-network-access&quot; on it. ... The imple...
- [chromium - How does "local network access restrictions" compare to CORS? - Information Security Stack Exchange](https://security.stackexchange.com/questions/283219/how-does-local-network-access-restrictions-compare-to-cors) *(security.stackexchange.com · 2025-10-09T00:00:00)*
  > Chrome (and Chromium-based browsers) have added &quot;local network access restrictions.&quot; Chrome 142 restricts the ability to make requests to the user&#x27;s local network, gated behind a permiss...
- [Chrome's Local-Network-Access: Troubleshooting and Best Practices \| Paul Serban](https://blog.paulserban.eu/post/chromes-local-network-access-troubleshooting-and-best-practices) *(blog.paulserban.eu · 2025-11-29T00:00:00)*
  > This move was designed to protect users from malicious scripts that attempt to exploit devices on their local network, such as printers, IoT devices, or internal servers. Chrome&#x27;s implementation of this involves a stricter set of rules for cross...
- [How to Debug Blocked Requests: Local-Network-Access in Chrome \| Paul Serban](https://blog.paulserban.eu/post/how-to-debug-blocked-requests-local-network-access-in-chrome) *(blog.paulserban.eu · 2026-02-13T00:00:00)*
  > We&#x27;ll also provide code examples, step-by-step techniques, and actionable insights. Local-Network-Access restrictions &lt;strong&gt;protect users from unauthorized access to their local devices&lt;/strong&gt; (like routers, IoT devices, and local servers).
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu · 2026-02-28T00:00:00)*
  > Enhanced UI messaging to guide users to grant permissions if prompted. Chrome&#x27;s Local Network Access policies are not just another layer of restrictions-they&#x27;re a step toward a more secure web. While these changes might require developers t...
- [Best Practices for Configuring Local Network Permissions in Chrome \| Paul Serban](https://blog.paulserban.eu/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(blog.paulserban.eu · 2026-01-29T00:00:00)*
  > Moreover, nested iframes require properly delegated permissions. Without the &lt;strong&gt;allow=&quot;local-network-access&quot; attribute, any embedded iframes attempting local network access will be blocked by Chrome, even if the top-level page has perm...
- ["requests to the local network are not allowed" (2026): Your Ultimate Guide to Unlocking Localhost & Fixing Cross-Origin Woes](https://codegive.com/blog/requests_to_the_local_network_are_not_allowed.php) *(codegive.com)*
  > Whether you&#x27;re building a new web application, testing a feature, or trying to access a local API, this security restriction often brings development to a halt. This issue arises from fundamental browser security policies designed to protect use...
- [How to Adapt to Local Network Access Introduced in Chrome 142? - Stack Overflow](https://stackoverflow.com/questions/79819723/how-to-adapt-to-local-network-access-introduced-in-chrome-142) *(stackoverflow.com)*
  > &lt;strong&gt;Your code won&#x27;t be able to access the local network without the Local Network Access permission&lt;/strong&gt;. Your code can&#x27;t request that permission over http. You&#x27;ll need to implement https for the secure context that is required...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > We have previously run a Dev Trial and a 50% Finch experiment on Canary/Dev/Beta which helped alert potentially affected developers and find some bugs early before shipping. Based in part on questions from affected developers we have put together an ...
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > On &lt;strong&gt;28 October 2025, Google Chrome 142 shipped a feature that may have quietly broken things across your organisation: Local Network Access (LNA). It’s a permission gate that blocks public websites from making requests to private network addre...
- [Managing the Chrome v141 Local Network Access Prompt \| Beyond Identity Next Generation Docs](https://docs.beyondidentity.com/docs/resources/announcements/chrome-browser) *(docs.beyondidentity.com · 2026-03-14T00:00:00)*
  > &lt;strong&gt;Starting with the release of Chrome version 141 on September 30, 2025&lt;/strong&gt;, Chrome and all Chromium-based browsers will introduce a new Local Network Access (LNA) permission prompt.
- [Chrome 142's Local Network Access Permission: What It Breaks and How to Ship a Fix \| Trade Assistance LLC](https://trade-assistance.com/blog/chrome-142-local-network-access-permission) *(trade-assistance.com · 2026-05-27T00:00:00)*
  > As of May 2026, &lt;strong&gt;every request from a public-web origin into a private IP range or to loopback is gated behind a new permission prompt&lt;/strong&gt;, and a lot of integrations that worked yesterday are throwing what look like CORS errors today.
- [Local Network Access changes in Chromium – VertiGIS Support](https://support.vertigis.com/hc/en-us/articles/32555952561682-Local-Network-Access-changes-in-Chromium) *(support.vertigis.com · 2026-01-15T00:00:00)*
  > Starting with Chrome version 142, ... model. &lt;strong&gt;When a website or web application tries to access resources on your local network (e.g., localhost, 127.0.0.1, or private IP ranges), Chrome now prompts the user for permission&lt;/strong&gt;...
- [Error message - Local network access permission denied](https://www.dynamsoft.com/web-twain/docs/faq/chromium-142-local-network-access-issue.html) *(dynamsoft.com · 2025-11-04T00:00:00)*
  > Firefox implements the same underlying ... before relying on it in production, and contact Dynamsoft Support if you run into issues. &lt;strong&gt;You can optionally query LNA permissions at runtime&lt;/strong&gt;....
- [Chrome Local Network Access Prompts with Jamf Trust ZTNA \| Jamf Support Portal](https://support.jamf.com/en/articles/12894739-chrome-local-network-access-prompts-with-jamf-trust-ztna) *(support.jamf.com · 2026-04-01T14:12:14)*
  > ⚠️ Warning: The LocalNetworkAccessRestrictionsTemporaryOptOut policy that may have been referenced as a quick workaround is removed in Chrome 146. ​ If your deployment uses this policy, migrate to Option 1 (LocalNetworkAccessIpAddressSpaceOverrides) ...
- [Chrome 156 Blocks Local Network? How to Grant Access (2026)](https://www.superchargebrowser.com/library/chrome-156-local-network-access) *(superchargebrowser.com · 2026-09-25T00:00:00)*
  > The temporary LocalNetworkAccessRestrictionsTemporaryOptOut policy is &lt;strong&gt;dropped in Chrome 156 (stable, scheduled October 20, 2026),&lt;/strong&gt; so managed browsers lose the option to downgrade blocked local network requests to a DevTools warning.
- [Chrome and Edge Embedding Issues (Local Network Access) - Curator by InterWorks Documentation](https://docs.curator.interworks.com/embedding_using_analytics/tableau_dashboards/chrome_edge_embedding_issues) *(docs.curator.interworks.com · 2026-09-03T02:41:23)*
  > LocalNetworkAccessIpAddressSpa... top-level sites · LocalNetworkAccessRestrictionsTemporaryOptOut - &lt;strong&gt;Temporary opt-out (available until after Edge 156)&lt;/strong&gt; Microsoft also publishes a detailed adaptation guide with policy guidance ...
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=156) *(chromeenterprise.google)*
  > Chrome 146 introduces two new enterprise policies for managing local network access restrictions: LocalNetworkAccessIpAddressSpaceOverrides and LocalNetworkAccessPermissionsPolicyDefaultEnabled. These policies can be set using custom configurations. ...
- [Microsoft Edge Browser Policy Documentation LocalNetworkAccessRestrictionsTemporaryOptOut \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessrestrictionstemporaryoptout) *(learn.microsoft.com · 2026-09-11T00:00:00)*
  > Value name: LocalNetworkAccessRestrictionsTemporaryOptOut · Value type: REG\_DWORD · 0x00000001 · Preference Key name: LocalNetworkAccessRestrictionsTemporaryOptOut · Example value: &lt;true/&gt; Preference Key name: LocalNetworkAccessRestrictionsTemp...
- [Chrome device permissions](https://help.okta.com/eu/en-us/content/topics/end-user/ov-device-lna-prompt.htm) *(help.okta.com)*
  > Chrome device permissions Skip to main content Skip to docs navigation
- [FOSDEM 2026 - Cleaning Up Local Mess: Firefox's Implementation of Local Network Access](https://archive.fosdem.org/2026/schedule/event/QCSKWL-firefox-local-network-access) *(archive.fosdem.org)*
  > FOSDEM 2026 - Cleaning Up Local Mess: Firefox's Implementation of Local Network Access fosdem-2026 Home About News Schedule Stands Volunteer Practical Brussels / 31 January & 1 February 2026 schedule News Sponsors Contact FOSDEM 2026 / Schedule / Eve...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [google chrome 138.0.7204.50 \| PortableApps.com](https://portableapps.com/node/79058) *(portableapps.com · 2025-06-25T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Chrome 141 restricts the ability to make requests to the user&#x27;s local network, gated behind a permission prompt&lt;/strong&gt;.
- [Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu · Open Google Chrom...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact...
- [\[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport](http://www.mail-archive.com/blink-dev@chromium.org/msg15285.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Skip to site navigation (Press enter) \[blink-dev\] Ready for Developer Testing: Local network access restrictions for WebTransport Chromestatus Mon, ...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14542.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Vladimir Levin Wed, 03 Sep 2025 08:29:23 -0700 Hey, I just wanted to c...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:2...
- [\[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15689.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Extend Experiment: Local network access restrictions Chris Thompson Wed, 28 Jan 2026 10:05:29 -08...
- [Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14874.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Rick Byers Sat, 18 Oct 2025 ...
- [Intent to Prototype: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/DAIKnQ12YNU/m/68e8ItW9AAAJ) *(groups.google.com · 2025-09-18T00:00:00)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Prototype: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restr...
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com · 2026-01-09T00:43:55)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > I see that 5.4.4.3 of https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/#local-network-access-check does have some &quot;prompt the user&quot; language, so presumably that corresponds to &quot;local-network&quot;.
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com · 2023-04-06T08:41:15)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens @annevk Title of the spec Local Network Access (aka Private Network Access, CORS-RFC1918) URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt; URL to the spec&#x27;s repository htt...
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com · 2025-06-26T16:41:42)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Specification title Local Network Access Specification or proposal URL (if available) https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ Explainer URL (if available) https://github.com/WICG/local-network-access/blob/master/explai...
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com · 2025-06-26T17:03:32)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens No response Title of the proposal Local Network Access URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ URL to the spec&#x27;s repository https://github.com/WICG/local-network-access Issue Tracker URL...
- [Microsoft Edge Browser Policy Documentation LocalNetworkAccessAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkaccessallowedforurls) *(learn.microsoft.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > For more information about Local ... network access restrictions. It &lt;strong&gt;allows specified public websites to access private IP addresses when required for trusted local communication scenarios&lt;/strong&gt;....
- [Microsoft Edge Browser Policy Documentation LocalNetworkAllowedForUrls \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/localnetworkallowedforurls) *(learn.microsoft.com · 2026-05-22T00:00:00)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > For more information about Local Network Access restrictions, see https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/.
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > When this policy is set to Disabled or unset, Local Network Access requests will use the default handling of these requests. See https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ for Local Network Access restrictions. This enter...
- [LocalNetworkAccessAllowedForUrls: Allow sites to make network requests to local devices and local network endpoints. \| Chrome Enterprise](https://chromeenterprise.google/intl/en_uk/policies/local-network-access-allowed-for-urls) *(chromeenterprise.google)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > For detailed information on valid URL patterns, please see https://chromeenterprise.google/policies/url-patterns/. See &lt;strong&gt;https://wicg.github.io/local-network-access/ for Local Network Access restrictions&lt;/strong&gt;.

## 📚 Platform Documentation & Specifications

- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com)*
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com)*
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [\[Proposal\] Allow querying permissions for specific URL · Issue #108 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/108) *(github.com)*
- [Permissions-Policy: local-network-access directive - HTTP \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [feat(browser): prompt for local network access permission by DaveDev42 · Pull Request #31505 · stablyai/orca](https://github.com/stablyai/orca/pull/31505) *(github.com)*
- [Permissions-Policy: loopback-network directive - HTTP \| MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [Local network access restrictions · Issue #1127 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1127) *(github.com)*
- [Permissions-Policy: local-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*
- [LocalNetworkAccess \| Firefox administrator reference](https://firefox-admin-docs.mozilla.org/reference/policies/localnetworkaccess) *(firefox-admin-docs.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 61 result(s) found across 13 planned queries — **49 verified relevant**
  - `"chromestatus.com/feature/5152728072060928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (2 returned)
  - `"github.com/WICG/local-network-access/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/local-network-access" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Local network access restrictions" API` — *Core feature API query* (8 returned)
  - `"Local network access restrictions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"local-network-access permission" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local network access restrictions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local network access restrictions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (4 returned)
  - `"Local Network Access" ("Private Network Access" OR LNA OR PNA) permission prompt Chrome` — *Finds technical guides and explainer articles helping web developers navigate Chrome's transition from Private Network Access preflights to permission prompts.* (8 returned)
  - `permissions.query "local-network" OR "loopback-network" OR "local-network-access"` — *Locates code samples and API documentation querying the Permissions API for the local-network and loopback-network descriptor names.* (8 returned)
  - `"LocalNetworkAccessIpAddressSpaceOverrides" OR "LocalNetworkAccessRestrictionsTemporaryOptOut"` — *Discovers enterprise policy guides, administrator release notes, and deployment strategies for managing LNA rollout and deprecation milestones.* (8 returned)
  - `"Local Network Access" (WebSocket OR WebTransport OR fetch) ("permission denied" OR prompt) site:github.com/WICG/local-network-access/issues` — *Surfaces specification debates, edge cases, and real-world breakage reports concerning WebSockets, WebTransport, and fetch under LNA restrictions.* (0 returned)
  - `"Adapting your website for new Local Network Access restrictions in Chrome"` — *Directly locates the official Chrome guidance document, mirror posts, and community write-ups discussing migration paths for affected web apps.* (1 returned)
- **Google Search Grounding (gemini-3.8-flash):** 15 result(s) found — **13 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
- **Hacker News Algolia:** 8 result(s) found — **0 verified relevant**
- **Standards Positions:** 0 result(s) found — **0 verified relevant**
- **Engine Bug Trackers:** 5 result(s) found — **1 verified relevant**
- **Baseline (baseline.dev):** *limited*
- **NPM Registry:** 5 result(s) found — **1 verified relevant**
- **web-features mapping:** *group "local-network-access", shared with 7 other ChromeStatus feature(s)*
- **Web Platform Tests (wpt.fyi):** *group "local-network-access": no stable pass rate for Chrome yet*
- **Sources cited by the AI synthesis:** 12 result(s) found — **9 verified relevant**

### Content Inspected

- **Specification:** ✔ Formally verified
- **Explainers:** 1 document(s) analyzed
- **Standards Discussion Comments:** 0 engineer comment(s) read
- **Web Page Excerpts Ingested:** 13 page(s)

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5152728072060928)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5152728072060928)
- [Specification](https://wicg.github.io/local-network-access)
- [Chromium Tracking Bug](https://crbug.com/394009026)
