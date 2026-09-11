import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from './config.js';
import { logger } from './logger.js';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

/**
 * Serves the generated report directory for local preview.
 *
 * This is a development convenience, not a production server: it binds to
 * loopback by default so a report sitting on a laptop is not exposed to the
 * local network (or, on a CI runner, to the world).
 */
export function startServer(options = {}) {
  const port = options.port || config.port;
  const host = options.host || config.host;
  const reportsDir = path.resolve(options.reportsDir || config.reportsDir);

  const server = http.createServer(async (req, res) => {
    // Only reads make sense for a static preview; anything else is rejected
    // outright rather than falling through to a confusing 404.
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      send(res, 405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
      return;
    }

    let reqPath;
    try {
      // A malformed percent-escape (e.g. `/%ZZ`) makes decodeURIComponent
      // throw. Outside a try that rejection escaped the request handler and
      // took down the whole process, so any stray link could kill the server.
      reqPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname);
    } catch {
      send(res, 400, '400 Bad Request');
      return;
    }

    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    // Resolve, then assert containment. The previous guard stripped a leading
    // `../` with a regex, which did nothing for `/a/../../etc/passwd` because
    // the traversal is not at the start of the string. Comparing the resolved
    // path against the root is the only check that actually holds.
    const filePath = path.resolve(reportsDir, '.' + path.posix.normalize(reqPath));
    if (filePath !== reportsDir && !filePath.startsWith(reportsDir + path.sep)) {
      send(res, 403, '403 Forbidden');
      return;
    }

    try {
      let target = filePath;
      const stats = await fs.stat(target);

      if (stats.isDirectory()) {
        // Without the trailing slash, relative links inside the page would
        // resolve against the parent directory.
        if (!reqPath.endsWith('/')) {
          send(res, 301, '', { Location: `${reqPath}/` });
          return;
        }
        target = path.join(target, 'index.html');
      }

      const data = await fs.readFile(target);
      const ext = path.extname(target).toLowerCase();
      const headers = {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Content-Length': data.length,
        // Reports are regenerated in place, so a cached copy is almost always
        // the stale one during local preview.
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      };

      if (req.method === 'HEAD') {
        res.writeHead(200, headers);
        res.end();
        return;
      }

      res.writeHead(200, headers);
      res.end(data);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
        send(res, 404, '404 Not Found');
      } else {
        logger.error(`Failed to serve ${reqPath}: ${err.message}`);
        send(res, 500, '500 Internal Server Error');
      }
    }
  });

  server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
      logger.error(`Port ${port} is already in use. Try: npm run serve -- --port ${port + 1}`);
    } else {
      logger.error(`Server error: ${err.message}`);
    }
    process.exitCode = 1;
  });

  server.listen(port, host, () => {
    const shown = host === '0.0.0.0' || host === '::' ? 'localhost' : host;
    logger.info(`\n🚀 Chrome Ecosystem Updates Dashboard running at:`);
    logger.info(`   http://${shown}:${port}\n`);
    logger.info(`   Serving ${reportsDir}\n`);
  });

  return server;
}
