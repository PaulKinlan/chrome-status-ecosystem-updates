import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from './config.js';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.svg': 'image/svg+xml',
};

export function startServer(options = {}) {
  const port = options.port || config.port;
  const reportsDir = options.reportsDir || config.reportsDir;

  const server = http.createServer(async (req, res) => {
    let reqPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
    if (reqPath === '/' || reqPath === '') {
      reqPath = '/index.html';
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
    const filePath = path.join(reportsDir, safePath);

    try {
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        const indexHtml = path.join(filePath, 'index.html');
        const data = await fs.readFile(indexHtml);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
        return;
      }

      const data = await fs.readFile(filePath);
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  });

  server.listen(port, () => {
    console.log(`\n🚀 Chrome Ecosystem Updates Dashboard running at:`);
    console.log(`   http://localhost:${port}\n`);
  });

  return server;
}
