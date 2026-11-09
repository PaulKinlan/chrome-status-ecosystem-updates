# Local network access restrictions

> **Report Week:** 2026-W46 | **Milestone:** Chrome 156 | **Category:** Stepped rollout

## Overview

Chrome 142 restricted the ability to make requests to the user's local network, gated behind a permission prompt. A local network request is any request from a public website to a local IP address or loopback, or from a local website (for example, intranet) to loopback.   Gating the ability for websites to perform these requests behind a permission mitigates the risk of cross-site request forgery attacks against local network devices such as routers, and reduces the ability of sites to use these requests to fingerprint the user's local network.  This permission is restricted to secure contexts. If granted, the permissions additionally relax mixed content blocking for local network requests (since many local devices are not able to obtain publicly trusted TLS certificates for various reasons).  This work supersedes a prior effort called \[Private Network Access\](https://chromestatus.com/feature/5737414355058688), which used preflight requests to have local devices opt in. For more information on this feature, see \[Adapting your website for new Local Network Access restrictions in Chrome\](https://docs.google.com/document/d/1QQkqehw8umtAgz5z0um7THx-aoU251p705FbIQjDuGs/edit?usp=sharing).  Chrome 145 introduced more granular permissions for websites requesting access to a user's local network. The previous single \`local-network-access permission\` is being split into two distinct permissions:  \* \`local-network\`: Grants access to IP addresses in the local network space (for example, intranets, internal devices). \* \`loopback-network\`: Grants access to loopback IP addresses (for example, \`localhost\`, \`127.0.0.1\`).  The old \`local-network\` permission will remain as an alias, ensuring existing configurations and permissions policies continue to function as expected.   This change provides both users and Admins with more precise control over how websites interact with internal network resources. Current enterprise policies managing local network access will not be affected by this change.  Chrome 146 introduces two new enterprise policies for managing local network access restrictions:  \[LocalNetworkAccessIpAddressSpaceOverrides\](https://chromeenterprise.google/policies/#LocalNetworkAccessIpAddressSpaceOverrides) and  \[LocalNetworkAccessPermissionsPolicyDefaultEnabled\](https://chromeenterprise.google/policies/#LocalNetworkAccessPermissionsPolicyDefaultEnabled). These policies can be set using \[custom configurations\](https://support.google.com/chrome/a/answer/14749672).  Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections.  In Chrome 156, the \[LocalNetworkAccessRestrictionsTemporaryOptOut\](https://chromeenterprise.google/policies/#LocalNetworkAccessRestrictionsTemporaryOptOut) policy will be removed.

### Motivation

Currently public websites can probe a user's local network, perform CSRF attacks against vulnerable local devices, and generally abuse the user's browser as a "confused deputy" that has access inside the user's local network or software on their local machine. Gating the ability for sites to make local network requests behind a permission prompt helps stop the exploitation of vulnerable devices and servers from the drive-by-web, and gives users control over which sites can probe their local network.

## Ecosystem Status

- **Momentum:** Quiet (-60 points since 2026-10-12; footprint 645 points)
- **Standards Alignment:** Partial Multi-Engine Interest
- **Sentiment:** Mixed / Skeptical
- **Executive Take:** Local Network Access (LNA) restrictions replace the earlier, unworkable Private Network Access preflight model with explicit browser permission prompts, gating public web origins from silently querying LAN devices or loopback addresses. Chrome began rolling out the prompt in Chrome 142 and introduced granular \`local-network\` and \`loopback-network\` permissions in Chrome 145, accompanied by relaxed mixed-content rules for authorized local endpoints. Broad engine alignment is coalescing around this permission-based model to eliminate drive-by intranet CSRF and port-scanning vectors, although non-Chromium implementations are still maturing.

### Recommendations
- Actionable Advice: Ensure all initiating applications are served from secure HTTPS contexts, and audit any architecture relying on loopback agents or LAN devices to handle rejected permissions gracefully. In embedded contexts, declare explicit \`Permissions-Policy\` headers (\`local-network\` and \`loopback-network\`), and use Chromium flags such as \`--ip-address-space-overrides\` or administrative policies to test and stage rollouts.
- No verified standalone runtime polyfill available; design progressive enhancement fallbacks for non-supporting browsers.

## Web-features Group

*group-level data: web-features [`local-network-access`](https://webstatus.dev/features/local-network-access), shared with 7 other ChromeStatus features*

- Results of the web-features group `local-network-access` on [wpt.fyi](https://wpt.fyi/results?q=feature:local-network-access) (webstatus.dev has no pass rates for it)

## Packages & Polyfills

- [qz-lna](https://www.npmjs.com/package/qz-lna) `v0.1.3` — Helpers for Local Network Access restrictions

## 📰 Ecosystem Blogs & Articles

- [Local Network Access  \|  Modern Web Guidance  \|  Chrome for Developers](https://developer.chrome.com/docs/modern-web-guidance/guides/security/local-network-access) *(developer.chrome.com)*
  > The \*\*Local Network Access (LNA)\*\* specification (formerly developed under the \*Private Network Access\* / PNA umbrella) restricts public or less-private websites from sending arbitrary network requests to private IP ranges (LANs) and loopback interfa...
- [New permission prompt for Local Network Access  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/local-network-access) *(developer.chrome.com)*
  > \*\*Preventing Network Fingerprinting:\*\* Disallows public sites from port-scanning or mapping a user’s local subnet \*\*Shift Away from PNA Preflights:\*\* Rather than requiring every legacy IoT device and printer to implement custom CORS preflight headers...
- [appspot.com](https://cr-status.appspot.com/feature/5152728072060928?gate=5150690177187840) *(cr-status.appspot.com)*
  > If the user grants permission, this property explicitly instructs the browser to relax mixed content restrictions, enabling HTTPS origins to communicate with unencrypted HTTP devices that cannot obtain public TLS certificates
- [Why Chrome Restricts Local Network Access (& How to Adapt) \| Paul Serban](https://www.paulserban.eu/blog/post/why-chrome-restricts-local-network-access-how-to-adapt) *(paulserban.eu)*
  > \*\*Paul Serban — \*"Why Chrome Restricts Local Network Access (& How to Adapt)"\*\*\* \*\*Summary:\*\* A developer-focused walkthrough explaining what steps engineering teams must take if their front-ends communicate with hardware (e.g., local print servers, ...
- [retool.com](https://community.retool.com/t/chrome-access-control-allow-private-network/62988) *(community.retool.com)*
  > \*\*Summary:\*\* A developer-focused walkthrough explaining what steps engineering teams must take if their front-ends communicate with hardware (e.g., local print servers, point-of-sale terminals, or dev tools) \*\*Retool Community Forums:\*\* Developers bu...
- [stackoverflow.com](https://stackoverflow.com/questions/79819723/how-to-adapt-to-local-network-access-introduced-in-chrome-142) *(stackoverflow.com)*
  > \*\*Key recommendations:\*\* Migrating initiating pages strictly to HTTPS, handling prompt rejections gracefully, updating iframe sandbox policies, and setting server headers to preserve functionality without breaking user trust
- [uillinois.edu](https://help.uillinois.edu/TDClient/37/uic/KB/Article/2993/How-do-I-edit-Google-Chrome-Local-Network-Access-Permissions) *(help.uillinois.edu)*
  > Products relying on desktop "companion apps" or local authentication daemons (such as Box Tools, smart-card readers, or FIDO authenticators listening on \`localhost:port\`) began triggering permission prompts or failing silently when embedded in iframe...
- [livingsecurity.com](https://www.livingsecurity.com/support/chrome-network-prompt) *(livingsecurity.com)*
  > Products relying on desktop "companion apps" or local authentication daemons (such as Box Tools, smart-card readers, or FIDO authenticators listening on \`localhost:port\`) began triggering permission prompts or failing silently when embedded in iframe...
- [okta.com](https://help.okta.com/eu/en-us/content/topics/end-user/ov-device-lna-prompt.htm) *(help.okta.com)*
  > Products relying on desktop "companion apps" or local authentication daemons (such as Box Tools, smart-card readers, or FIDO authenticators listening on \`localhost:port\`) began triggering permission prompts or failing silently when embedded in iframe...
- [microsoft.com](https://learn.microsoft.com/en-us/ecdn/how-to/configure-local-network-access-policy) *(learn.microsoft.com)*
  > Microsoft published configuration guides (\*"Configure Local Network Access Policy for Microsoft eCDN"\*) alerting IT departments that peer-to-peer distribution for Teams and video broadcasts inside enterprise networks would be restricted once LNA expa...
- [reddit.com](https://www.reddit.com/r/webdev/comments/1pu40e8/ive_never_seen_this_before_what_does_it_mean) *(reddit.com)*
  > \*\*Reddit (\`r/webdev\`):\*\* Multiple developer threads surfaced from confused developers seeing \*"Look for and connect to any device on your local network"\* pop-ups In several cases, the culprit was traced to production builds accidentally leaving devel...
- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)*
  > Ready for Developer Testing: Local network access restrictions for WebSockets Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Developer Test...
- [Intent to Prototype: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/DAIKnQ12YNU/m/68e8ItW9AAAJ) *(groups.google.com · 2025-09-18T00:00:00)*
  > Intent to Prototype: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Local net...
- [Intent to Prototype: Local Network Access Restrictions for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/CDy8LAs-DoA) *(groups.google.com)*
  > Intent to Prototype: Local Network Access Restrictions for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Local Network A...
- [\[☂️\] Permission-gated Local Network Access \[394009026\] - Chromium](https://issues.chromium.org/issues/394009026) *(issues.chromium.org)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Specific implementation work will be split up into child issues&lt;/strong&gt;. Mentioned issues (1) Links (7) Hide all · “ Proposal: http://shortn/\_hAgrHkcOwB ” · ct...@ #1 · “ Design doc: http:/...
- [Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does.](https://reptile.haus/journal/chrome-156-local-network-access-opt-out-removal-enterprise-policy-migration-2026) *(reptile.haus · 2026-09-16T09:37:21)*
  > Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does. Skip to main content Menu Press enter to begin your search Close Search Security Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does. Share Share Share If anyone on your team set Lo...
- [r/comfyui on Reddit: --enable-cors-header "\*" is not secure even in local network](https://www.reddit.com/r/comfyui/comments/1qcbtvz/enablecorsheader_is_not_secure_even_in_local) *(reddit.com · 2026-01-14T02:56:46)*
  > I saw a new browser&#x27;s permission &quot;Local Network Access Checks&quot; when using Zoom on a new browser based on a new version of chromium. I was interested what is it, and found this recent chromium update https://&lt;strong&gt;chromestatus.com/fea...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restrictions 2,...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: Local netw...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)*
  > Explainer https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.md&lt;/strong&gt; Specification https://wicg.github.io/local-network-access Design docs https://github.com/explainers-by-googlers/local-network-access https://docs.google.co...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14537.html) *(mail-archive.com)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Wednesday, September 3, 2025 at 12:32:02 AM UTC+1 Chris Thompson wrote: &gt; &gt;&gt; Contact emails &gt;&gt; &gt;&gt; cth...@chromium.org &gt;&gt; &gt;&gt; Explainer &gt;&gt; &gt;&gt; https://&lt;strong&gt;githu...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14536.html) *(mail-archive.com)*
  > Best, Alex On Wednesday, September 3, 2025 at 12:32:02 AM UTC+1 Chris Thompson wrote: &gt; Contact emails &gt; &gt; cth...@chromium.org &gt; &gt; Explainer &gt; &gt; https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.md&lt;/strong&gt;...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)*
  > Explainer https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.md&lt;/strong&gt; ·
- [\[blink-dev\] Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14529.html) *(mail-archive.com)*
  > Explainer https://github.com/WICG/local-network-access/blob/main/explainer.md Specification https://wicg.github.io/local-network-access Summary &lt;strong&gt;Chrome 141 restricts the ability for sites to make requests to the user&#x27;s local network, gate...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)*
  > https://github.com/WICG/local-network-access/blob/main/explainer.md · https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;
- [Intent to Ship: Local Network Access allowing same-origin fetches to potentially trustworthy origins](https://groups.google.com/a/chromium.org/g/blink-dev/c/hMfzJiqb6d0) *(groups.google.com)*
  > Both Private Network Access and Local Network Access mean the same thing for now. ... Either email addresses are anonymous for this group or you need the view member email addresses permission to view the original message ... Sorry for the confusion ...
- [Adapting your website for new Local Network Access restrictions in Microsoft Edge \| Microsoft Learn](https://learn.microsoft.com/en-us/deployedge/ms-edge-local-network-access) *(learn.microsoft.com)*
  > Due to how the permissions API works, querying for the state of the local-network-access permission returns &quot;prompt&quot; regardless of whether the LNA feature flag is enabled, if the user isn&#x27;t granted or denied the permission.
- [Chrome's Local Network Access: What It Breaks and How to Fix It \| Steele O'Brien Consulting](https://steeleobrienconsulting.com/blog/chrome-local-network-access) *(steeleobrienconsulting.com · 2026-03-01T00:00:00)*
  > Even the LocalNetworkAccessAllowedForUrls enterprise policy has a critical limitation here: browser policies cannot override iframe sandbox restrictions. Even if the parent origin is whitelisted, nested iframes remain blocked unless the parent frame ...
- [dns - CORS error: “Permission was denied for this request to access the unknown address space” only inside office network (Chrome PNA block?) - Stack Overflow](https://stackoverflow.com/questions/79823001/cors-error-permission-was-denied-for-this-request-to-access-the-unknown-addres) *(stackoverflow.com)*
  > Fix options: Remove the internal DNS override (best) Or make your API return this header on the preflight (OPTIONS): Access-Control-Allow-Private-Network: true Routing all calls through a public reverse-proxy also avoids PNA. ... Save this answer. .....
- [Best Practices for Configuring Local Network Permissions in Chrome \| Paul Serban](https://blog.paulserban.eu/post/best-practices-for-configuring-local-network-permissions-in-chrome) *(blog.paulserban.eu · 2026-09-04T15:45:32)*
  > Moreover, nested iframes require properly delegated permissions. Without the &lt;strong&gt;allow=&quot;local-network-access&quot; attribute, any embedded iframes attempting local network access will be blocked by Chrome, even if the top-level page has perm...
- [Chrome's Local Network Access (LNA) Permission Explained](https://blog.openreplay.com/chrome-local-network-access-lna-permission) *(blog.openreplay.com · 2026-03-08T00:00:00)*
  > Secure contexts only. &lt;strong&gt;The LNA permission can only be requested from HTTPS pages&lt;/strong&gt;. However, since local devices often can’t serve HTTPS, Chrome may relax mixed-content restrictions for clearly local targets after permission is granted,...
- ["requests to the local network are not allowed" (2026): Your Ultimate Guide to Unlocking Localhost & Fixing Cross-Origin Woes](https://codegive.com/blog/requests_to_the_local_network_are_not_allowed.php) *(codegive.com)*
  > Whether you&#x27;re building a new web application, testing a feature, or trying to access a local API, this security restriction often brings development to a halt. This issue arises from fundamental browser security policies designed to protect use...
- [Dell Online Support Experience Impacted Due to Local Network Access Restrictions \| Dell US](https://www.dell.com/support/kbdoc/en-us/000372996/dell-online-support-experience-impacted-due-to-local-network-access-restrictions) *(dell.com)*
  > &lt;strong&gt;Setting the policy value to &#x27;\*&#x27; allows local network access on all URLs&lt;/strong&gt;, mimicking the behavior before the restriction was fully implemented.
- [Allow detection of permissions for Local Network Access from JS \[438135963\] - Chromium](https://issues.chromium.org/issues/438135963) *(issues.chromium.org · 2025-08-12T00:00:00)*
  > https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query Trying to query this results in a compilation issue ” ... Status: Won&#x27;t Fix (Not Reproducible). &lt;strong&gt;Local Network Access is part of the permissions API, permission name being...
- [Preparing Your Web App for Chrome's Local-Network-Access Policies \| Paul Serban](https://blog.paulserban.eu/post/preparing-your-web-app-for-chromes-local-network-access-policies) *(blog.paulserban.eu · 2026-02-28T00:00:00)*
  > Access-Control-Allow-Origin: https://example.com Access-Control-Allow-Methods: GET, POST, OPTIONS Access-Control-Allow-Credentials: true Access-Control-Allow-Private-Network: true · Failing to include this header results in blocked requests, even if ...
- [Local Network Access iFrame Restrictions Causing Development Problems - Microsoft Q&A](https://learn.microsoft.com/en-us/answers/questions/5646980/local-network-access-iframe-restrictions-causing-d) *(learn.microsoft.com · 2025-12-04T00:00:00)*
  > &lt;strong&gt;With the release of Chrome v143 and Edge v143, Local Network Access restrictions have been implemented&lt;/strong&gt;. Due to this, our Teams app development has been halted as it now throws CORS errors in the dev environment.
- [Why Every Website Wants to Access Your Local Network (And What to Do About It)](https://alan-west.hashnode.dev/why-every-website-wants-to-access-your-local-network-and-what-to-do-about-it) *(alan-west.hashnode.dev · 2026-05-03T20:42:28)*
  > Now your frontend hits https://myapp.example.com/api/local-device/status and the proxy handles the local network hop server-side. No browser permission prompt, no PNA preflight. If both your frontend and API are on the local network, serve them from ...
- [Why Every Website Wants to Access Your Local Network (And What to Do About It) \| Authon Blog](https://blog.authon.dev/why-every-website-wants-to-access-your-local-network-and-what-to-do-about-it) *(blog.authon.dev · 2026-05-03T20:42:15)*
  > Now your frontend hits https://myapp.example.com/api/local-device/status and the proxy handles the local network hop server-side. No browser permission prompt, no PNA preflight. If both your frontend and API are on the local network, serve them from ...
- [Private Network Access: Extended protection for web workers and navigation fetches  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/private-network-access-update-2024-03) *(developer.chrome.com · 2024-03-18T00:00:00)*
  > Private Network Access (PNA, formerly known as CORS-RFC1918 and briefly Local Network Access) is &lt;strong&gt;a security feature that restricts the ability of websites to send requests to servers on private networks&lt;/strong&gt;.
- [The Private Network Access (PNA) for non-secure contexts deprecation trial is ending—implement the PNA permission prompt  \|  Blog  \|  Chrome for Developers](https://developer.chrome.com/blog/pna-permission-prompt-ot-end) *(developer.chrome.com · 2024-04-24T00:00:00)*
  > To access private network devices from a website that cannot be converted to HTTPS, you must &lt;strong&gt;use permission prompts to relax mixed content checks&lt;/strong&gt;.
- [How Access-Control-Allow-Private-Network Can Solve Cross-Origin Blocks](https://www.paulserban.eu/blog/post/how-access-control-allow-private-network-can-solve-cross-origin-blocks) *(paulserban.eu)*
  > Private Network Access (PNA) is a protocol that restricts the browser’s ability to interact with resources hosted on private IPs (e.g., 192.168.x.x, 10.x.x.x, 127.0.0.1).
- [Chrome 142's Local Network Access Permission: What It Breaks and How to Ship a Fix \| Trade Assistance LLC](https://trade-assistance.com/blog/chrome-142-local-network-access-permission) *(trade-assistance.com · 2026-05-27T00:00:00)*
  > Same for loopback when you&#x27;re hitting ... the difference between a prompt and a hard mixed-content block. &lt;strong&gt;Add a Permissions-Policy entry to any iframe that needs LNA&lt;/strong&gt;....
- [LocalNetworkAccessRestrictionsTemporaryOptOut: Specifies whether to (temporarily) opt out of Local Network Access restrictions \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-restrictions-temporary-opt-out) *(chromeenterprise.google)*
  > &lt;strong&gt;When this policy is set to Enabled, Local Network Access requests will only display warnings in Chrome DevTools due to Local Network Access checks failing&lt;/strong&gt;. When this policy is set to Disabled or unset, Local Network Access requests w...
- [Chrome Local Network Access Prompts with Jamf Trust ZTNA \| Jamf Support Portal](https://support.jamf.com/en/articles/12894739-chrome-local-network-access-prompts-with-jamf-trust-ztna) *(support.jamf.com · 2026-04-01T14:12:14)*
  > ⚠️ Warning: The LocalNetworkAccessRestrictionsTemporaryOptOut policy that may have been referenced as a quick workaround is removed in Chrome 146. ​ If your deployment uses this policy, migrate to Option 1 (LocalNetworkAccessIpAddressSpaceOverrides) ...
- [LocalNetworkAccessIpAddressSpaceOverrides: Override IP address space mappings \| Chrome Enterprise](https://chromeenterprise.google/policies/local-network-access-ip-address-space-overrides) *(chromeenterprise.google)*
  > &lt;strong&gt;This can be used to treat certain internal address ranges as &quot;public&quot; and thus not subject to Local Network Access checks&lt;/strong&gt;. Conversely, this can be used to treat certain public address ranges that might be used internally as...
- [Chrome 156 Blocks Local Network? How to Grant Access (2026)](https://www.superchargebrowser.com/library/chrome-156-local-network-access) *(superchargebrowser.com · 2026-09-25T00:00:00)*
  > The temporary LocalNetworkAccessRestrictionsTemporaryOptOut policy is &lt;strong&gt;dropped in Chrome 156&lt;/strong&gt; (stable, scheduled October 20, 2026), so managed browsers lose the option to downgrade blocked local network requests to a DevTools warning.
- [Explore New Chrome Enterprise Browser, Core, Premium Features](https://chromeenterprise.google/intl/en_us/resources/release-notes/?ver=156) *(chromeenterprise.google)*
  > Chrome 147 expands Local Network Access restrictions to include WebSocket and WebTransport connections. &lt;strong&gt;In Chrome 156, the LocalNetworkAccessRestrictionsTemporaryOptOut policy will be removed&lt;/strong&gt;.
- [A proposal to restrict sites from accessing a users’ local network \| Hacker News](https://news.ycombinator.com/item?id=44183799) *(news.ycombinator.com · 2025-06-08T09:55:52)*
  > The issue is that &lt;strong&gt;CORS gates access only on the consent of the target server&lt;/strong&gt;. It must return headers that opt into receiving requests from the website · This proposal aims to tighten that, so that even if the website and the network ...

## 🔗 Inbound Citations & Reverse Links

The following external publications and discussions explicitly link to or cite this feature's specification, explainer, or ChromeStatus entry:

- [Ready for Developer Testing: Local network access restrictions for WebSockets](https://groups.google.com/a/chromium.org/g/blink-dev/c/4gx2y5jPGbU) *(groups.google.com · 2025-09-18T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Ready for Developer Testing: Local network access restrictions for WebSockets Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Ready for Deve...
- [Intent to Prototype: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/DAIKnQ12YNU/m/68e8ItW9AAAJ) *(groups.google.com · 2025-09-18T00:00:00)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Intent to Prototype: Local network access restrictions for WebTransport Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype:...
- [Intent to Prototype: Local Network Access Restrictions for WebRTC](https://groups.google.com/a/chromium.org/g/blink-dev/c/CDy8LAs-DoA) *(groups.google.com)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Intent to Prototype: Local Network Access Restrictions for WebRTC Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Prototype: Local...
- [\[☂️\] Permission-gated Local Network Access \[394009026\] - Chromium](https://issues.chromium.org/issues/394009026) *(issues.chromium.org)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > https://chromestatus.com/feature/5152728072060928 · &lt;strong&gt;Specific implementation work will be split up into child issues&lt;/strong&gt;. Mentioned issues (1) Links (7) Hide all · “ Proposal: http://shortn/\_hAgrHkcOwB ” · ct...@ #1 · “ Design d...
- [Local Network Access restrictions (Chrome 142–156, now including WebSocket/WebTransport + policy removal) · Issue #29 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/29) *(github.com · 2026-09-14T08:09:52)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Local Network Access restrictions (Chrome 142–156, now including WebSocket/WebTransport + policy removal) · Issue #29 · getsentry/browser-updates-radar · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance set...
- [Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does.](https://reptile.haus/journal/chrome-156-local-network-access-opt-out-removal-enterprise-policy-migration-2026) *(reptile.haus · 2026-09-16T09:37:21)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does. Skip to main content Menu Press enter to begin your search Close Search Security Chrome 156 Removes Your Local Network Opt-Out. Or M163 Does. Share Share Share If anyone on your t...
- [r/comfyui on Reddit: --enable-cors-header "\*" is not secure even in local network](https://www.reddit.com/r/comfyui/comments/1qcbtvz/enablecorsheader_is_not_secure_even_in_local) *(reddit.com · 2026-01-14T02:56:46)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > I saw a new browser&#x27;s permission &quot;Local Network Access Checks&quot; when using Zoom on a new browser based on a new version of chromium. I was interested what is it, and found this recent chromium update https://&lt;strong&gt;chromestat...
- [Local network access restrictions for WebTransport · Issue #1037 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1037) *(github.com · 2026-07-24T20:41:23)* *(Cites: `https://chromestatus.com/feature/5152728072060928`)*
  > Local network access restrictions for WebTransport · Issue #1037 · GoogleChrome/modern-web-guidance-src · GitHub Skip to content Navigation Menu Sign in Search / Sign in Sign up Appearance settings You signed in with another tab or window. ...
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Ship: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Ship: Local network access restr...
- [Intent to Extend Experiment: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/lRnFRIfzDMU) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Intent to Extend Experiment: Local network access restrictions Groups Groups Conversations All groups and messages Send feedback to Google Help Training Sign in Groups Groups &#xE5C4; &#xE899; &#xE408; &#xE409; Intent to Extend Experiment: ...
- [\[blink-dev\] Intent to Extend Experiment: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg15683.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Explainer https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.md&lt;/strong&gt; Specification https://wicg.github.io/local-network-access Design docs https://github.com/explainers-by-googlers/local-network-access https://docs...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14537.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > &gt; &gt; Best, &gt; &gt; Alex &gt; &gt; On Wednesday, September 3, 2025 at 12:32:02 AM UTC+1 Chris Thompson wrote: &gt; &gt;&gt; Contact emails &gt;&gt; &gt;&gt; cth...@chromium.org &gt;&gt; &gt;&gt; Explainer &gt;&gt; &gt;&gt; https://&lt;st...
- [\[blink-dev\] Re: Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14536.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Best, Alex On Wednesday, September 3, 2025 at 12:32:02 AM UTC+1 Chris Thompson wrote: &gt; Contact emails &gt; &gt; cth...@chromium.org &gt; &gt; Explainer &gt; &gt; https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.m...
- [Intent to Ship: Local network access restrictions for WebTransport](https://groups.google.com/a/chromium.org/g/blink-dev/c/OuQArRDHoBg) *(groups.google.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Explainer https://&lt;strong&gt;github.com/WICG/local-network-access/blob/main/explainer.md&lt;/strong&gt; ·
- [\[blink-dev\] Intent to Ship: Local network access restrictions](https://www.mail-archive.com/blink-dev@chromium.org/msg14529.html) *(mail-archive.com)* *(Cites: `https://github.com/WICG/local-network-access/blob/main/explainer.md`)*
  > Explainer https://github.com/WICG/local-network-access/blob/main/explainer.md Specification https://wicg.github.io/local-network-access Summary &lt;strong&gt;Chrome 141 restricts the ability for sites to make requests to the user&#x27;s local net...
- [GitHub - WICG/local-network-access: A proposal to restrict sites from accessing a users' local network without permission · GitHub](https://github.com/WICG/local-network-access) *(github.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Note: This specification replaces Private Network Access, which was at https://github.com/WICG/private-network-access/ This is the repository for the Local Network Access specification.
- [GitHub - carline706/local-network-access: A proposal to restrict sites from accessing a users' local network without permission · GitHub](https://github.com/carline706/local-network-access) *(github.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Note: This specification replaces Private Network Access, which was at https://github.com/WICG/private-network-access/ This is the repository for the Local Network Access specification.
- [Intent to Ship: Local network access restrictions](https://groups.google.com/a/chromium.org/g/blink-dev/c/cwu_RUmBpzY/m/hk8YuZDWHgAJ) *(groups.google.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > https://github.com/WICG/local-network-access/blob/main/explainer.md · https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/89) *(github.com · 2026-01-09T00:43:55)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > I see that 5.4.4.3 of https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/#local-network-access-check does have some &quot;prompt the user&quot; language, so presumably that corresponds to &quot;local-network&quot;.
- [Local Network Access · Issue #163 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/163) *(github.com · 2023-04-06T08:41:15)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens @annevk Title of the spec Local Network Access (aka Private Network Access, CORS-RFC1918) URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt; URL to the spec&#x27;s repository htt...
- [Intent to Ship: Local Network Access allowing same-origin fetches to potentially trustworthy origins](https://groups.google.com/a/chromium.org/g/blink-dev/c/hMfzJiqb6d0) *(groups.google.com)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > Both Private Network Access and Local Network Access mean the same thing for now. ... Either email addresses are anonymous for this group or you need the view member email addresses permission to view the original message ... Sorry for the ...
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/520) *(github.com · 2025-06-26T17:03:32)* *(Cites: `https://wicg.github.io/local-network-access`)*
  > WebKittens No response Title of the proposal Local Network Access URL to the spec https://&lt;strong&gt;wicg.github.io/local-network-access&lt;/strong&gt;/ URL to the spec&#x27;s repository https://github.com/WICG/local-network-access Issue Tracker URL...

## 📚 Platform Documentation & Specifications

- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Request/targetAddressSpace) *(developer.mozilla.org)*
- [Local network access - Security - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Local_network_access) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network) *(developer.mozilla.org)*
- [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access) *(developer.mozilla.org)*
- [Local Network Access restrictions (Chrome 142–156, now including WebSocket/WebTransport + policy removal) · Issue #29 · getsentry/browser-updates-radar · GitHub](https://github.com/getsentry/browser-updates-radar/issues/29) *(github.com)*
- [Local network access restrictions for WebTransport · Issue #1037 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1037) *(github.com)*
- [GitHub - WICG/local-network-access: A proposal to restrict sites from accessing a users' local network without permission · GitHub](https://github.com/WICG/local-network-access) *(github.com)*
- [GitHub - carline706/local-network-access: A proposal to restrict sites from accessing a users' local network without permission · GitHub](https://github.com/carline706/local-network-access) *(github.com)*
- [Clarify what "local-network" and "loopback-network" permissions enable (and when to prompt the user) · Issue #89 · WICG/local-network-access · GitHub](https://github.com/WICG/local-network-access/issues/89) *(github.com)*
- [Local Network Access · Issue #163 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/163) *(github.com)*
- [Request for Position: Local Network Access · Issue #520 · WebKit/standards-positions · GitHub](https://github.com/WebKit/standards-positions/issues/520) *(github.com)*
- [Record Local Network Access permission decisions and report them from navigator.permissions by igower · Pull Request #74003 · WebKit/WebKit · GitHub](https://github.com/WebKit/WebKit/pull/74003) *(github.com)*
- [Local network access restrictions · Issue #1127 · GoogleChrome/modern-web-guidance-src · GitHub](https://github.com/GoogleChrome/modern-web-guidance-src/issues/1127) *(github.com)*

## 🔍 Investigation Audit Trail

### Searches Executed

- **Brave Search:** 73 result(s) found across 12 planned queries — **50 verified relevant**
  - `"chromestatus.com/feature/5152728072060928" -site:chromestatus.com` *(Reverse Citation)* — *Inbound citations linking to ChromeStatus entry* (8 returned)
  - `"github.com/WICG/local-network-access/blob/main/explainer.md" -site:github.com` *(Reverse Citation)* — *Inbound citations linking to Explainer* (8 returned)
  - `"wicg.github.io/local-network-access" -site:wicg.github.io` *(Reverse Citation)* — *Inbound citations linking to Specification* (8 returned)
  - `"Local network access restrictions" API` — *Core feature API query* (8 returned)
  - `"Local network access restrictions" (blog OR tutorial OR guide OR "how to use")` — *Community tutorials and developer blogs* (8 returned)
  - `"local-network-access permission" OR "local-network" (javascript OR web OR css)` — *Code syntax and WebIDL method usage* (8 returned)
  - `"Local network access restrictions" (adoption OR shipping OR "developer preview" OR PWA)` — *Ecosystem adoption and developer sentiment* (8 returned)
  - `"Local network access restrictions" (site:x.com OR site:twitter.com)` — *Twitter / X developer sentiment and commentary* (8 returned)
  - `"Local Network Access" ("Private Network Access" OR PNA) (guide OR tutorial OR "adapting your website")` — *Finds developer guides and migration tutorials explaining how to transition from Private Network Access (PNA) to the new Local Network Access permission model.* (8 returned)
  - `("local-network" OR "loopback-network") ("navigator.permissions.query" OR "Permissions-Policy") fetch` — *Locates code examples demonstrating how to query or specify the local-network and loopback-network permissions via JavaScript Permissions API or HTTP headers.* (8 returned)
  - `"LocalNetworkAccessIpAddressSpaceOverrides" OR "LocalNetworkAccessRestrictionsTemporaryOptOut" Chrome enterprise` — *Surfaces enterprise rollout announcements, policy management documentation, and organizational adoption timelines for LNA restrictions.* (8 returned)
  - `"Local Network Access" (localhost OR IoT OR "confused deputy") (break OR prompt OR controversy) site:news.ycombinator.com OR site:github.com/WICG` — *Captures community debates, developer reactions, and discussions on breaking changes affecting local development servers and IoT device communications.* (8 returned)
- **Google Search Grounding (gemini-3.8-flash):** 18 result(s) found — **16 verified relevant**
- **Twitter / X API v2:** *found 10 tweet(s)*
- **Tweets found by web search:** 6 result(s) found — **0 verified relevant**
- **Dev.to Community Blogs:** 5 result(s) found — **0 verified relevant**
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
