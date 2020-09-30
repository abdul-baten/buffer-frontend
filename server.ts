import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { join } from 'path';
import * as https from 'https';
import * as domino from 'domino';
import { readFileSync } from 'fs';
import * as express from 'express';
import * as compression from 'compression';

require('raf/polyfill');

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { REQUEST } from '@nguniversal/express-engine/tokens';

const privateKey = readFileSync('cert/cert.key', 'utf8');
const certificate = readFileSync('cert/cert.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const PORT = process.env.PORT || 5000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

enableProdMode();

// Provide support for window on the server

const template = readFileSync(join('dist/browser', 'index.html')).toString();
const fetch = require('node-fetch');
const win = domino.createWindow(template);

win.fetch = fetch;
// @ts-ignore:next-line
global['window'] = win;
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      configurable: true,
      enumerable: true,
    };
  },
});
// @ts-ignore:next-line
global['document'] = win.document;
// @ts-ignore:next-line
global['CSS'] = null;
// @ts-ignore:next-line
global['Prism'] = null;

// Config renderer
import * as shrinkRay from 'shrink-ray-current';
const app = express();
const httpsServer = https.createServer(credentials, app);
try {
  app.engine('html', (_, options: any, callback) => {
    const engine = ngExpressEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [provideModuleMap(LAZY_MODULE_MAP), { provide: 'REQUEST', useFactory: () => options.req, deps: [] }],
    });
    engine(_, options, callback);
  });
} catch (e) {
  console.log('error', 'there is some issue defining app engine ' + e);
}

// configs
app.enable('etag');

// Middleware
app.use(
  shrinkRay({
    useZopfliForGzip: false,
    zlib: { level: 9 },
    brotli: { mode: 2, quality: 11 },
    threshold: 2048,
    filter: (_req: express.Request, _res: express.Response) => true,
  }),
);
app.use(compression());
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
app.set('view cache', true);
app.use('/', express.static(DIST_FOLDER, { index: false, maxAge: 30 * 86400000 }));

// All regular routes use the Universal engine
app.get('*', (req: express.Request, res: express.Response) => {
  res.render('index', {
    preboot: true,
    req: req,
    res: res,
    providers: [{ provide: REQUEST, useValue: req }],
  });
});

httpsServer.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}!`);
});
