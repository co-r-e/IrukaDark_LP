#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = process.cwd();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function safeJoin(root, targetPath) {
  const p = path.normalize(targetPath).replace(/^\/+/, '');
  const full = path.join(root, p);
  if (!full.startsWith(path.resolve(root))) {
    return null; // path traversal detected
  }
  return full;
}

function resolveFilePath(urlPath) {
  const qIndex = urlPath.indexOf('?');
  const cleanPath = decodeURIComponent(qIndex >= 0 ? urlPath.slice(0, qIndex) : urlPath);
  let filePath = safeJoin(ROOT, cleanPath);
  if (!filePath) return null;
  return new Promise((resolve) => {
    fs.stat(filePath, (err, stat) => {
      if (!err && stat.isDirectory()) {
        const indexPath = path.join(filePath, 'index.html');
        fs.access(indexPath, fs.constants.F_OK, (e) => {
          resolve(e ? filePath : indexPath);
        });
      } else if (!err && stat.isFile()) {
        resolve(filePath);
      } else {
        // Try with leading slash trimmed and index fallback (e.g., "/" -> "/index.html")
        if (cleanPath.endsWith('/')) {
          const indexPath = safeJoin(ROOT, path.join(cleanPath, 'index.html'));
          resolve(indexPath);
        } else {
          resolve(filePath);
        }
      }
    });
  });
}

function serveFile(req, res, filePath) {
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return send404(res);
    const ext = path.extname(filePath).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    
    // 開発環境: 常に最新ファイルを取得（キャッシュ無効化）
    const headers = {
      'Content-Type': type,
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Accept-Ranges': 'bytes',
      'Last-Modified': stat.mtime.toUTCString(),
      'ETag': `"${stat.mtime.getTime()}-${stat.size}"`
    };
    
    // ETag/If-None-Match による304 Not Modified チェック
    const ifNoneMatch = req.headers['if-none-match'];
    const etag = headers['ETag'];
    if (ifNoneMatch === etag) {
      res.writeHead(304, headers);
      return res.end();
    }
    
    res.writeHead(200, headers);
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(filePath).pipe(res);
  });
}

function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = req.url || '/';
    const filePath = await resolveFilePath(urlPath);
    if (!filePath) return send404(res);
    serveFile(req, res, filePath);
  } catch {
    send404(res);
  }
});

const preferred = parseInt(process.env.PORT || '3000', 10) || 3000;
const maxAttempts = 50;

function tryListen(port, attempt = 0) {
  server.once('error', (err) => {
    if (err && err.code === 'EADDRINUSE' && attempt < maxAttempts) {
      tryListen(port + 1, attempt + 1);
    } else {
      console.error('[dev-server] Failed to start:', err);
      process.exit(1);
    }
  });
  server.listen(port, '127.0.0.1', () => {
    const address = server.address();
    const actual = typeof address === 'object' && address ? address.port : port;
    console.log(`\nIrukaDark LP dev server running: http://localhost:${actual}`);
    console.log('Press Ctrl+C to stop.');
  });
}

tryListen(preferred);
