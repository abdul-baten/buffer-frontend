/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'zone.js/dist/zone-node.min';
import 'zone.js/dist/zone-patch-rxjs.min';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { APP_BASE_HREF } from '@angular/common';
import { AppServerModule } from './src/main.server';
import { enableProdMode } from '@angular/core';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { Request, Response } from 'express';
import { createServer, Server } from 'spdy';

require('raf').polyfill();

enableProdMode();

const domino = require('domino');
const template = readFileSync(join('dist/browser', 'index.html')).toString();
const window = domino.createWindow(template);

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.getComputedStyle = window.getComputedStyle;
global.innerHeight = window.innerHeight;
global.innerWidth = window.innerWidth;
global.outerHeight = window.outerHeight;
global.outerWidth = window.outerWidth;
global.HTMLElement = window.HTMLElement;
global.HTMLElement.prototype.getBoundingClientRect = () => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toJSON: () => {},
  top: 0,
  width: 0,
  // eslint-disable-next-line id-length
  x: 0,
  // eslint-disable-next-line id-length
  y: 0
});

// Other optional depending on your application configuration
global.navigator = window.navigator;
global.localStorage = window.localStorage;
global.DOMTokenList = window.DOMTokenList;

Reflect.defineProperty(window.document.body.style, 'transform', {
  value: () => ({
    configurable: true,
    enumerable: true
  })
});

const middlewares = (express: any) => {
  const helmet = require('helmet');
  const hpp = require('hpp');
  const express_enforces_ssl = require('express-enforces-ssl');

  express.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule
    })
  );

  express.enable('trust proxy');

  express.use(express_enforces_ssl());
  express.use(cookieParser());

  express.use(helmet({ contentSecurityPolicy: false }));
  express.use(compression());

  express.use(cors({
    credentials: true,
    origin: true
  }));
  express.use(bodyParser.json());
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(hpp());
};

export const app = (): Server => {
  const key = readFileSync('cert/cert.key', 'utf8');
  const cert = readFileSync('cert/cert.crt', 'utf8');
  const express = require('express')();
  const express_static = require('express-static-gzip');

  const server = createServer(
    '',
    {
      cert,
      key
    },
    express
  );
  const dist_folder = join(process.cwd(), 'dist/browser');
  const index_html = existsSync(join(dist_folder, 'index.original.html')) ? 'index.original.html' : 'index';

  middlewares(express);

  express.set('view engine', 'html');
  express.set('views', dist_folder);

  express.get(
    '*.*',
    express_static(dist_folder, {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      enableBrotli: true,
      orderPreference: ['br', 'deflate', 'gzip'],
      serveStatic: {
        maxAge: '1h'
      }
    })
  );

  // All regular routes use the Universal engine
  express.get('*', (req: Request, res: Response) => {
    res.render(index_html, { preboot: true,

      providers: [
        { provide: APP_BASE_HREF,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          useValue: req.baseUrl }
      ],
      req,
      res });
  });

  return server;
};

const run = (): void => {
  const port = process.env.PORT || Number.parseInt('5000', 10);

  // Start up the Node server
  const server = app();

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Node Express server listening on https://localhost:${port}`);
  });
};

/*
 * Webpack will replace 'require' with '__webpack_require__'
 * '__non_webpack_require__' is a proxy to Node 'require'
 * The below code is to ensure that the server is run only when not requiring the bundle.
 */
declare const __non_webpack_require__: NodeRequire;
const main_module = __non_webpack_require__.main;
const module_file_name = (main_module && main_module.filename) || '';

if (module_file_name === __filename || module_file_name.includes('iisnode')) {
  run();
}

export * from './src/main.server';
