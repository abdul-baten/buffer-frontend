import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as domino from 'domino';
import { APP_BASE_HREF } from '@angular/common';
import { AppServerModule } from './src/main.server';
import { createServer, Server } from 'https';
import { enableProdMode } from '@angular/core';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { Request, Response, static as expressStatic } from 'express';

require('raf/polyfill');

enableProdMode();

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

// The Express app is exported so that it can be used by serverless Functions.
export function app(): Server {
  const privateKey = readFileSync('cert/cert.key', 'utf8');
  const certificate = readFileSync('cert/cert.crt', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  const express = require('express')();
  const server = createServer(credentials, express);
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  express.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  // Middlewares
  express.use(compression());
  express.use(cookieParser());
  express.use(cors());
  express.use(bodyParser.json());
  express.use(bodyParser.urlencoded({ extended: true }));

  express.set('view engine', 'html');
  express.set('views', distFolder);

  express.get(
    '*.*',
    expressStatic(distFolder, {
      maxAge: '1y',
    }),
  );

  // All regular routes use the Universal engine
  express.get('*', (req: Request, res: Response) => {
    res.render(indexHtml, { preboot: true, req, res, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 5000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on https://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
