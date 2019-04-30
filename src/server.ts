import { resolve } from "path";

const express = require('express');
const next = require('next');
const { createServer } = require('http')
// const { join } = require('path')
const { parse } = require('url')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const router = require("./routes");
const mobxReact = require("mobx-react");
mobxReact.useStaticRendering(true)
const handle = router.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use('static ', express.static('./static'));
  server.use(handle);

  createServer((req: any, res: any) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname === '/static/service-worker.js') {
      // const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, resolve("./static/service-worker.js"))
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
});
