# WebTransport headers and responseHeaders

> **Report Week:** 2026-W35 | **Milestone:** Chrome 154 | **Category:** Enabled by default

## Overview

Adds support for passing custom HTTP request headers via WebTransportOptions and inspecting server response headers through the WebTransport instance. This allows web applications to supply metadata, authentication tokens, and custom parameters during the initial CONNECT handshake and access server-provided headers once the connection is established.

### Motivation

The WebTransport constructor requires support for custom HTTP request headers to address several technical limitations in authentication, routing, and capability negotiation.

Without custom headers, developers must pass authentication tokens in URL query strings, which exposes credentials in server logs and telemetry, or authenticate over an initial data stream, which adds an additional round trip before the connection is usable.

Furthermore, API gateways and reverse proxies typically inspect HTTP headers at the CONNECT layer. Without custom headers, these intermediaries cannot authorize or route WebTransport sessions via existing pipelines, forcing servers to accept connections before verifying credentials.

Finally, applications often need to negotiate capabilities, such as supported video codecs, during connection setup. Providing custom request headers in WebTransportOptions and a readable responseHeaders property on the WebTransport instance allows clients and servers to authenticate, route, and negotiate capabilities during the initial handshake. This eliminates the need for custom stream-level initialization protocols.

## Ecosystem Status

- **Momentum:** Quiet (0 points)
- **Standards Alignment:** Chromium-Led
- **Sentiment:** Neutral
- **Executive Take:** WebTransport headers and responseHeaders is currently Enabled by default in Chrome 154. Ecosystem momentum is Quiet with Chromium-Led standards alignment and neutral developer pulse.

### Recommendations
- Shipping enabled by default in Chrome 154. Developers can begin adopting in production with appropriate feature detection.
- Firefox and Safari have not yet finalized positions. Use defensive feature detection (guarding with `if ("..." in window)`).
- No direct polyfill detected yet; progressive enhancement fallback required for non-supporting browsers.

## Useful Links

- [ChromeStatus](https://chromestatus.com/feature/5194104408506368)
- [ChromeStatusLite](https://chromestatuslite.com/feature/5194104408506368)
- [Specification](https://www.w3.org/TR/webtransport/#dom-webtransportoptions-headers)
- [Chromium Tracking Bug](https://issues.chromium.org/issues/551850821)
