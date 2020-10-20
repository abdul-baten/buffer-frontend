/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-empty-function */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'zone.js/dist/zone-node.min';
import 'zone.js/dist/zone-patch-rxjs.min';

import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { APP_BASE_HREF } from '@angular/common';
import { AppServerModule } from './src/main.server';
import { Request, Response } from 'express';
import { createServer, Server } from 'spdy';
import { enableProdMode } from '@angular/core';
import { env } from 'process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import cookiesMiddleware from 'universal-cookie-express';

require('raf').polyfill();

enableProdMode();

env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const xhr2 = require('xhr2');

// eslint-disable-next-line no-underscore-dangle
xhr2.prototype._restrictedHeaders.cookie = false;

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
  const express_enforces_ssl = require('express-enforces-ssl');

  express.enable('trust proxy');

  express.use(cookiesMiddleware());

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
};

export const app = (): Server => {
  const key = readFileSync('cert/cert.key', 'utf8');
  const cert = readFileSync('cert/cert.crt', 'utf8');
  const express = require('express')();
  const express_static = require('express-static-gzip');

  const server = createServer(
    {
      ca: cert,
      cert,
      key,
      rejectUnauthorized: true
    },
    express
  );
  const dist_folder = join(process.cwd(), 'dist/browser');
  const index_html = existsSync(join(dist_folder, 'index.original.html')) ? 'index.original.html' : 'index';

  express.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule
    })
  );

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
    global.navigator = { userAgent: req.headers['user-agent'] } as Navigator;

    res.render(index_html, {
      baseUrl: '/',
      originUrl: `https://localhost:${express.get('port')}`,
      preboot: true,
      providers: [
        { provide: APP_BASE_HREF,
          useValue: req.baseUrl
        }
      ],
      req,
      requestUrl: req.originalUrl,
      res
    });
  });

  return server;
};

const run = (): void => {
  const port = env.PORT || Number.parseInt('5000', 10);

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
