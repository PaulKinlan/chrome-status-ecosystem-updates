# Local network access restrictions

> **Report Week:** 2026-W42 | **Milestone:** Chrome 156 | **Category:** Stepped rollout

## Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

### Motivation

Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt helps stop the exploitation of vulnerable devices and servers from the drive-by-web, and gives users control over which sites can probe their local network.

## Ecosystem Status

- **Momentum:** High (footprint 705 points, ranked against this week's features because too few have an earlier number to work out a change)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Cautiously Optimistic
- **Executive Take:** Local Network Access (LNA) restrictions gate public-to-private and public-to-loopback network requests behind explicit browser permission prompts, replacing the older preflight-based Private Network Access (PNA) model while offering mixed-content relief for local devices. Chromium is leading full enforcement through a phased rollout spanning Chrome 142 to Chrome 156, having refined the model in Chrome 145 into distinct 'local-network' and 'loopback-network' permissions. Cross-engine consensus on the security rationale is strong, though multi-browser parity remains pending complete enforcement in WebKit and Gecko.

### Recommendations
- Actionable Advice: Audit all client-side calls to intranet or loopback endpoints, ensure your origin runs in a secure context (HTTPS), and query the granular 'loopback-network' and 'local-network' permissions with fallbacks to the legacy 'local-network-access' alias. For managed enterprise workflows relying on local daemon connectivity, configure administrative policy allowances before automated restrictions block unprompted traffic.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## Packages & Polyfills

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

## 📰 Ecosystem Blogs & Articles

- [New permission prompt for Local Network Access \| Blog \| Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF) attacks against private intra...
- [openreplay.com](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF) attacks against private intra...
- [risky.biz](https://news.risky.biz/risky-bulletin-chrome-gets-a-new-prompt-to-prevent-sneaky-local-network-attacks) *(news.risky.biz)*
  > The Web Platform's \*\*Local Network Access (LNA)\*\* restrictions address a longstanding security flaw: public websites silently using the browser as a proxy to probe, fingerprint, or mount Cross-Site Request Forgery (CSRF) attacks against private intra...
- [myipaddresscheck.com](https://myipaddresscheck.com/news/chrome-145-local-network-loopback-permissions) *(myipaddresscheck.com)*
  > \* \*\*Chrome 142\*\*: Shipped LNA restrictions by default, gating requests from public websites to local/loopback addresses (or local sites to loopback) behind an explicit browser permission prompt \* \*\*Chrome 145\*\*: Split the monolithic \`local-network-ac...
- [chromestatus.com](https://chromestatus.com/feature/5068298146414592) *(chromestatus.com)*
  > \* \*\*Chrome 145\*\*: Split the monolithic \`local-network-access\` permission into two granular permissions: \`local-network\` (LAN/private IP ranges like RFC 1918) and \`loopback-network\` (device loopback like \`127.0.0.1\` and \`localhost\`), keeping the old s...
- [chrome.com](https://developer.chrome.com/blog/chrome-147-beta) *(developer.chrome.com)*
  > \* \*\*Chrome 147\*\*: Extended restrictions beyond standard HTTP fetches to include WebSockets and WebTransport connections \* IT administrators have heavily utilized enterprise policies (\`LocalNetworkAccessAllowedForUrls\` and \`LocalNetworkAccessRestricti...
- [retool.com](https://community.retool.com/t/chrome-access-control-allow-private-network/62988) *(community.retool.com)*
  > Many internal and legacy devices could not be reprogrammed to return the \`Access-Control-Allow-Private-Network\` preflight header \* Sandboxed \`iframe\` environments (such as Retool custom components or Dynamics embeds) encountered \`null\` origin CORS is...
- [northwestern.edu](https://services.northwestern.edu/TDClient/30/Portal/KB/PrintArticle?ID=2819) *(services.northwestern.edu)*
  > \* \*\*Desktop Authentication & Security Agents (e.g., Cisco / Duo Desktop)\*\*: \* Identity systems like Duo Desktop authenticate browser sessions via loopback (\`127.0.0.1\`) With Chrome 142+, users experienced new prompt dialogues during single sign-on fl...
- [dynamics.com](https://experience.dynamics.com/ideas/idea/?ideaid=31280f41-9dd7-f011-ad8e-7c1e52e63a74) *(experience.dynamics.com)*
  > \* \*\*Enterprise Web Portals & GIS Applications (e.g., Esri ArcGIS, Retool, Microsoft Dynamics)\*\*: \* Cloud SaaS platforms attempting to bridge data from on-premise local enterprise servers faced immediate connection breaks
- [esri.com](https://community.esri.com/en/discussion/1679056/maps-fail-when-using-chrome-142-and-local-enterprise) *(community.esri.com)*
  > \* \*\*Enterprise Web Portals & GIS Applications (e.g., Esri ArcGIS, Retool, Microsoft Dynamics)\*\*: \* Cloud SaaS platforms attempting to bridge data from on-premise local enterprise servers faced immediate connection breaks
- [chromeenterprise.google](https://chromeenterprise.google/intl/en_ca/policies/local-network-access-allowed-for-urls) *(chromeenterprise.google)*
  > \* IT administrators have heavily utilized enterprise policies (\`LocalNetworkAccessAllowedForUrls\` and \`LocalNetworkAccessRestrictionsTemporaryOptOut\`) to bypass these prompts in internal managed desktop deployments ahead of the planned policy depreca...
- [google.com](https://support.google.com/chrome/thread/414807583/local-network-permission-issue?hl=en) *(support.google.com)*
  > \* IT administrators have heavily utilized enterprise policies (\`LocalNetworkAccessAllowedForUrls\` and \`LocalNetworkAccessRestrictionsTemporaryOptOut\`) to bypass these prompts in internal managed desktop deployments ahead of the planned policy depreca...
- [Articles Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu · Open Google Chrome. Click t...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact emails \[e...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restrictions 2,...
- [Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14743.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Chris Thompson Thu, 02 Oct 2025 15:36:28 -0700 A quick update: We have d...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network acces...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Local netw...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14536.html) *(mail-archive.com)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Alex Russell Wed, 03 Sep 2025 07:21:04 -0700 Is there a document that summarises...
- [Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14874.html) *(mail-archive.com)*
  > Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Rick Byers Sat, 18 Oct 2025 07:58:27 -...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:23 -0700 \*N...
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)*
  > When this policy is set to Disabled or unset, Local Network Access requests will use the default handling of these requests. See https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ for Local Network Access restrictions. This enterprise poli...
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled: Allow Local Network Access (LNA) requests in subframes without explicit delegation \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-permissions-policy-default-enabled) *(chromeenterprise.google)*
  > For more information on Local Network Access, see https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ and https://developer.chrome.com/blog/local-network-access. For more information on permissions policy, see https://developer.mozilla.org/...
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > Due to how the permissions API works, querying for the state of the local-network-access permission returns &quot;prompt&quot; regardless of whether the LNA feature flag is enabled, if the user isn&#x27;t granted or denied the permission.
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Gating the ability for websites to perform these requests behind a permission reduces the ability of sites to use these requests to fingerprint the user&#x27;s local network. This permission is restricted to secure contexts. This work is adding to th...
- [r/sysadmin on Reddit: How to apply LocalNetworkAccessAllowedForUrls in Google Workspace Admin Console.](https://www.reddit.com/r/sysadmin/comments/1o1itmh/how_to_apply_localnetworkaccessallowedforurls_in) *(reddit.com · 2025-10-08T18:31:10)*
  > 1- Local Network Access restrictions &lt;strong&gt;Specifies whether Local Network Access warnings are enforced and requests blocked&lt;/strong&gt; 2- Local file access to file:// URLs in the PDF Viewer 3- Local storage configuration Controls whether users can s...
- [Microsoft Edge Browser Policy Documentation LocalNetworkAccessRestrictionsEnabled \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/localnetworkaccessrestrictionsenabled) *(learn.microsoft.com)*
  > If you enable this policy, Microsoft Edge blocks any request that would otherwise trigger a DevTools warning due to Local Network Access checks. These requests are denied without prompting the user. If you disable or don&#x27;t configure this policy,...
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://paulserban.eu/blog/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(paulserban.eu · 2026-02-28T00:00:00)*
  > Added the following headers to the IoT device&#x27;s API server responses: Access-Control-Allow-Origin: https://iot-dashboard.example.com Access-Control-Allow-Private-Network: true ... Enhanced UI messaging to guide users to grant permissions if prom...
- [Local Network Access iFrame Restrictions Causing Development Problems - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/5646980/local-network-access-iframe-restrictions-causing-d) *(learn.microsoft.com · 2025-12-04T00:00:00)*
  > We are experiencing the exact same problem in Model Driven Power Apps (Dataverse) when we have the API call in a side-panel. The side-panel uses an iframe, and we cannot control this and put allow=&quot;local-network-access&quot; on it. ... The imple...
- [chromium - How does "local network access restrictions" compare to CORS? - Information Security Stack Exchange](https://security.stackexchange.com/questions/283219/how-does-local-network-access-restrictions-compare-to-cors) *(security.stackexchange.com · 2025-10-09T00:00:00)*
  > Chrome (and Chromium-based browsers) have added &quot;local network access restrictions.&quot; Chrome 142 restricts the ability to make requests to the user&#x27;s local network, gated behind a permiss...
- [Chrome's Local-Network-Access: Troubleshooting and Best Practices \| Paul Serban](https://blog.paulserban.eu/post/chromes-local-network-access-troubleshooting-and-best-practices) *(blog.paulserban.eu · 2025-11-29T00:00:00)*
  > Chrome v142 and beyond have introduced new restrictions under the local-network-access (LNA) umbrella, aiming to enhance user privacy and restrict unauthorized access to local network resources. While well-intentioned, these changes present a unique ...
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > It’s to architect around it: server-side ad rendering, proper enterprise policy deployment, and working with your ZTNA vendor to avoid routing browser traffic through address ranges that Chrome now treats as restricted. The web’s security model is ti...
- [Best Practices for Configuring Local Network Permissions in Chrome \| Paul Serban](https://blog.paulserban.eu/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(blog.paulserban.eu · 2026-01-29T00:00:00)*
  > Moreover, nested iframes require properly delegated permissions. Without the &lt;strong&gt;allow=&quot;local-network-access&quot; attribute, any embedded iframes attempting local network access will be blocked by Chrome, even if the top-level page has perm...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > Part of our goal for having a Dev Trial was to give site owners time to adjust their requests (especially if they need to use the mixed content exemptions) and to potentially adapt their UX flows so the permission requests are less surprising to user...
- [Ready for Developer Testing: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/D4nqAa3FUN8) *(groups.google.com)*
  > &lt;strong&gt;Restricts the ability to make requests to the user&#x27;s local network, gated behind a permission prompt&lt;/strong&gt;. A local network request is any request from a public website to a local IP address or loopback, or from a local website (e.g. ...
- [Best Practices for Configuring Local Network Permissions in Chrome](https://paulserban.eu/blog/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(paulserban.eu)*
  > Chrome exposes a developer-friendly API that allows you to programmatically check the status of the local-network-access permission using JavaScript:
- [What to Know about New Permission Prompt for Google Chrome 142 and Edge 143 with ArcGIS En](https://support.esri.com/en-us/knowledge-base/what-to-know-about-new-permission-prompt-in-google-chro-000039171) *(support.esri.com · 2025-12-15T00:00:00)*
  > The Chrome 142 and Edge 143 releases (and newer) now feature a new permission prompt for sites that make connections to a user&#x27;s local network as part of the Local Network Access specification. The aim is to protect users from cross-site request...
- [Error message - Local network access permission denied](https://www.dynamsoft.com/web-twain/docs/faq/chromium-142-local-network-access-issue.html) *(dynamsoft.com · 2025-11-04T00:00:00)*
  > &lt;strong&gt;The symptoms and resolution steps below apply when a user dismisses this prompt or clicks Block&lt;/strong&gt;. Both Chromium-based browsers (Chrome, Edge, Brave, Opera) and Firefox now enforce LNA, but on different rollout timelines and with diffe...
- [Configure Chrome to Suppress the Local Network Access Prompt for Okta FastPass \| Okta Support](https://support.okta.com/help/s/article/configure-chrome-to-suppress-the-local-network-access-prompt-for-okta-fastpass?language=en_US) *(support.okta.com · 2026-05-13T15:34:17)*
  > &lt;strong&gt;Use the toggle to change the permission from Block back to Allow&lt;/strong&gt;. Reload the page. Okta FastPass should now work correctly. Yes, browsers based on Chrome 142 or above will need access to the local network for FastPass.
- [Allow Box domains local network access in Chrome, Edge and Firefox to avoid Box Tools disruption – Box Support](https://support.box.com/hc/en-us/articles/45163820905107-Allow-Box-domains-local-network-access-in-Chrome-Edge-and-Firefox-to-avoid-Box-Tools-disruption) *(support.box.com · 2025-09-29T00:00:00)*
  > &lt;strong&gt;If you are prompted with “Look for and connect to any device on your local network” while using Box, click Allow&lt;/strong&gt;. To help, we’ve added in-app guidance (for Chrome &amp; Edge) that explains this new browser behavior and walks you thro...
- ["Agent not running" when it is running: Chrome's local network prompt and localhost helpers - DEV Community](https://dev.to/azeem_ullah/agent-not-running-when-it-is-running-chromes-local-network-prompt-and-localhost-helpers-4nll) *(dev.to · 2026-10-10T11:14:14)*
  > Iframes. If your app is embedded cross-origin, the outer page has to hand the permission down: &lt;strong&gt;&lt;iframe allow=&quot;loopback-network; local-network-access&quot; ...&gt;&lt;/strong&gt;. Same-origin frames are fine.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/cs_CZ/resources/release-notes) *(chromeenterprise.google · 2026-10-07T22:14:23)*
  > Chrome 146 introduces two new enterprise policies for managing local network access restrictions: LocalNetworkAccessIpAddressSpaceOverrides and LocalNetworkAccessPermissionsPolicyDefaultEnabled.
- [Chrome 156 Release Notes - Chrome Platform Status](https://chromestatus.com/release-notes/156) *(chromestatus.com)*
  > Chrome 146 introduces two new enterprise policies for managing local network access restrictions: LocalNetworkAccessIpAddressSpaceOverrides and LocalNetworkAccessPermissionsPolicyDefaultEnabled.
- [Chrome Local Network Access Prompts with Jamf Trust ZTNA \| Jamf Support Portal](https://support.jamf.com/en/articles/12894739-chrome-local-network-access-prompts-with-jamf-trust-ztna) *(support.jamf.com · 2026-04-01T14:12:14)*
  > Chrome 146 introduces the LocalNetworkAccessIpAddressSpaceOverrides policy, which provides a simpler, more targeted solution for Jamf ZTNA deployments than the other workarounds described in this article.
- [Chrome 156 Blocks Local Network? How to Grant Access (2026)](https://www.superchargebrowser.com/library/chrome-156-local-network-access) *(superchargebrowser.com · 2026-09-25T00:00:00)*
  > Set LocalNetworkAccessAllowedForUrls (with the matching block lists) as a custom configuration until these policies ship in the main Admin Console UI. Use LocalNetworkAccessIpAddressSpaceOverrides if a CG-NAT range is wrongly triggering prompts. ... ...
- [Chrome 154 \| Release notes \| Chrome for Developers](https://developer.chrome.com/release-notes/154) *(developer.chrome.com · 2026-09-22T00:00:00)*
  > This aligns Chromium with the Background Fetch specification and prevents sites from bypassing LNA checks by using Background Fetch instead of regular fetch(). Enterprises can manage this behavior using existing LNA enterprise policies (LocalNetworkA...
- [r/webdev on Reddit: I've never seen this before... What does it mean?](https://www.reddit.com/r/webdev/comments/1pu40e8/ive_never_seen_this_before_what_does_it_mean) *(reddit.com · 2025-12-23T20:19:48)*
  > LNA local network access introduced on chrome 138 restricting website that may be running malicious code from getting into ur network unless u authorise it
- [r/chrome on Reddit: Chrome 142 Local Network Access Restrictions](https://www.reddit.com/r/chrome/comments/1p05ktm/chrome_142_local_network_access_restrictions) *(reddit.com · 2025-11-18T07:19:35)*
  > &lt;strong&gt;In HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome add a 32bit Dword named LocalNetworkAccessRestrictionsTemporaryOptOut with the value set to 1&lt;/strong&gt; .
- [r/chrome on Reddit: How to disable local network access in Chrome (via flags and settings)](https://www.reddit.com/r/chrome/comments/1m354tn/how_to_disable_local_network_access_in_chrome_via) *(reddit.com · 2025-07-18T15:19:35)*
  > One solution (workaround) is to &lt;strong&gt;update &#x27;LocalNetworkAccessAllowedForUrls&#x27; under HKLM\\SOFTWARE\\Policies\\Google\\Chrome and setting the policy value to &#x27;\*&#x27;&lt;/strong&gt;. This allows local network access on all URLs, mimicking the...
- [r/sysadmin on Reddit: Local Network Access & iFrames (Chrome Enterprise Update)](https://www.reddit.com/r/sysadmin/comments/1opd9sd/local_network_access_iframes_chrome_enterprise) *(reddit.com · 2025-11-05T19:54:06)*
  > Specifies whether to (temporarily) opt out of Local Network Access restrictions · We&#x27;ve tried using the Intune Config policy to allow Local Network Access to all domains (straight wildcard), and the issue persists. Has anyone encountered anythin...
- [r/webdev on Reddit: Why are so many websites now asking to "access your local network?"](https://www.reddit.com/r/webdev/comments/1t22lta/why_are_so_many_websites_now_asking_to_access) *(reddit.com · 2026-05-02T21:38:17)*
  > &lt;strong&gt;LNA permission was recently added (eary 2026) as a requirement to access local private networks&lt;/strong&gt;, where before it wasn&#x27;t a requirement and these websites were just doing it anyways.
- [r/chrome on Reddit: Chrome spamming requests for access to local network -- Goodbye Chrome.](https://www.reddit.com/r/chrome/comments/1j6b2nt/chrome_spamming_requests_for_access_to_local) *(reddit.com · 2025-03-08T06:25:14)*
  > I visited cnn and got the same message. Here is information on why websites want to access the local network and a setting on how to block it https://developer.chrome.com/blog/local-network-access
- [r/chrome on Reddit: Local Network Access Allowed for URLs/Managed by your organization](https://www.reddit.com/r/chrome/comments/1oe2o0p/local_network_access_allowed_for_urlsmanaged_by) *(reddit.com · 2025-10-23T13:01:49)*
  > I can &lt;strong&gt;remove the policy by going to the Registry Editor HKEY\_LOCAL\_MACHINE\\Software\\Policies\\Google\\Chrome\\LocalNetworkAccessAllowedforURLs and removing the folder&lt;/strong&gt; but it returns with each restart of the computer.
- [Intent to Ship: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/O6GMKt44Ups) *(groups.google.com)*
  > Compatibility risks: There are some local network requests types that we cannot know ahead of time will be going to the local network (e.g., a subresource request to http://test.example which then resolves to 192.168.0.1). These would be blocked as m...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Articles Does Chrome version 142 affect Webauth access?](https://central.smarsh.com/s/article/Does-Chrome-version-142-affect-Webauth-access) *(central.smarsh.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://&lt;strong&gt;chromestatus.com/feature/5152728072060928&lt;/strong&gt; · Additional Information · If you are unsure what Chrome browser you&#x27;re using, you can verify by following the steps below: Method 1: Using the menu · Open Google Chrom...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Intent to Extend Experiment: Local network access restrictions Chromestatus Tue, 27 Jan 2026 13:08:07 -0800 Contact...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/my-groups) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restr...
- [Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14743.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) Re: \[blink-dev\] Re: Intent to Ship: Local network access restrictions Chris Thompson Thu, 02 Oct 2025 15:36:28 -0700 A quick update:...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local net...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: ...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14536.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Re: Intent to Ship: Local network access restrictions Skip to site navigation (Press enter) \[blink-dev\] Re: Intent to Ship: Local network access restrictions Alex Russell Wed, 03 Sep 2025 07:21:04 -0700 Is there a document that ...
- [Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14874.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) Re: \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Rick Byers Sat, 18 Oct 2025 ...
- [\[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets](https://www.mail-archive.com/blink-dev@chromium.org/msg14871.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Skip to site navigation (Press enter) \[blink-dev\] Intent to Experiment: Local network access restrictions for WebSockets Hubert Chao Sat, 18 Oct 2025 07:42:2...
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com · 2026-01-09T00:43:55)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > I see that 5.4.4.3 of https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/#local-network-access-check does have some &quot;prompt the user&quot; language, so presumably that corresponds to &quot;local-network&quot;.
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com · 2023-04-06T08:41:15)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens @annevk Title of the spec Local Network Access (aka Private Network Access, CORS-RFC1918) URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt; URL to the spec&#x27;s repository htt...
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com · 2025-06-26T16:41:42)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Specification title Local Network Access Specification or proposal URL (if available) https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ Explainer URL (if available) https://github.com/WICG/local-network-access/blob/master/explai...
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com · 2025-06-26T17:03:32)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens No response Title of the proposal Local Network Access URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ URL to the spec&#x27;s repository https://github.com/WICG/local-network-access Issue Tracker URL...
- [html.elements.iframe.allow: missing local-network, local-network-access, and loopback-network entries · Issue #30831 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30831) *(github.com · 2026-10-10T21:07:48)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Chrome versions confirmed via Chromium status and the Local Network Access spec. Firefox implementation: https://bugzil.la/1978550 (RESOLVED FIXED, Firefox 153) Spec: https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ Related iss...
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > When this policy is set to Disabled or unset, Local Network Access requests will use the default handling of these requests. See https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ for Local Network Access restrictions. This enter...
- [LocalNetworkAccessPermissionsPolicyDefaultEnabled: Allow Local Network Access (LNA) requests in subframes without explicit delegation \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-permissions-policy-default-enabled) *(chromeenterprise.google)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > For more information on Local Network Access, see https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ and https://developer.chrome.com/blog/local-network-access. For more information on permissions policy, see https://developer.mo...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [Permissions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) *(developer.mozilla.org)*
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/89) *(github.com)*
- [Local Network Access · Issue #163 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/163) *(github.com)*
- [Local Network Access · Issue #1260 · mozilla/standards-positions](https://github.com/mozilla/standards-positions/issues/1260) *(github.com)*
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions](https://github.com/WebKit/standards-positions/issues/520) *(github.com)*
- [html.elements.iframe.allow: missing local-network, local-network-access, and loopback-network entries · Issue #30831 · mdn/browser-compat-data](https://github.com/mdn/browser-compat-data/issues/30831) *(github.com)*
- [GitHub - qzind/lna: Helpers for Local Network Access restrictions · GitHub](https://github.com/qzind/lna) *(github.com)*
- [\[Proposal\] Allow querying permissions for specific URL · Issue #108 · WICG/local-network-access](https://github.com/WICG/local-network-access/issues/108) *(github.com)*
- [Local network access restrictions · Issue #1127 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1127) *(github.com)*
- [fix(local-network-access): update WebSocket LNA guidance and IPv6 localhost flag (#1651) by rowan-m · Pull Request #1727 · GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src/pull/1727) *(github.com)*
- [Permissions-Policy: local-network directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 69 result(s) found across 13 planned queries — **54 verified relevant**
  - `"chromestatus.com/feature/5152728072060928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (1 returned)
  - `"github.com/WICG/local-network-access/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/local-network-access" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (7 returned)
  - `"Local network access restrictions" API` — *Core feature API query* (8 returned)
  - `"Local network access restrictions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"local-network-access permission" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local network access restrictions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local network access restrictions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (6 returned)
  - `"Local Network Access" "permission prompt" (Chrome OR "Private Network Access") guide OR tutorial` — *Searches for developer guides, tutorials, and practical articles on migrating apps and handling Chrome's new local network access permission prompts.* (7 returned)
  - `"permissions.query" ("local-network" OR "loopback-network" OR "local-network-access") JavaScript` — *Finds JavaScript code snippets and Permissions API usage querying or configuring permissions for local or loopback network requests.* (8 returned)
  - `"LocalNetworkAccessIpAddressSpaceOverrides" OR "LocalNetworkAccessPermissionsPolicyDefaultEnabled" Chrome` — *Locates enterprise policy documentation, administrator rollout guides, and policy implementation notes across corporate Chrome deployments.* (8 returned)
  - `"Local Network Access" restrictions Chrome (localhost OR IoT OR breaking) site:news.ycombinator.com OR site:reddit.com` — *Explores community feedback, developer sentiment, and reported issues regarding breaking changes to localhost or local IoT devices.* (8 returned)
  - `"Local Network Access" ("WebSocket" OR "WebTransport") "mixed content" Chrome` — *Finds technical explanations and implementation articles discussing local network restrictions and mixed content relaxation on WebSockets and WebTransport.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 17 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *HTTP 401 Unauthorized (Check your TWITTER\_BEARER\_TOKEN or X\_BEARER\_TOKEN)*
- **Tweets found by web search:** 3 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 2 result(s) found — **1 verified relevant**
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
