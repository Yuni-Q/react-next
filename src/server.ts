// import * as express from 'express';
const express = require('express');
const next = require('next');

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

  server.listen(port);
});
