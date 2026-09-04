import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const port = 4173;
createServer(async (_req, res) => {
  try { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(await readFile('index.html')); }
  catch { res.writeHead(500); res.end('Server error'); }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
