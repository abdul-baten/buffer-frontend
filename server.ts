import 'zone.js/dist/zone-node';

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

// @ts-ignore:next-line
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.getComputedStyle = window.getComputedStyle;
global.innerHeight = window.innerHeight;
global.innerWidth = window.innerWidth;
global.outerHeight = window.outerHeight;
global.outerWidth = window.outerWidth;
global.HTMLElement = window.HTMLElement;
global.HTMLElement.prototype.getBoundingClientRect = () => {
  return {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    toJSON: () => {},
  };
};

// If using IgxIconService to register icons
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Other optional depending on your application configuration
global.navigator = window.navigator;
global.localStorage = window.localStorage;
global.DOMTokenList = window.DOMTokenList;

Object.defineProperty(window.document.body.style, 'transform', {
  value: () => {
    return {
      configurable: true,
      enumerable: true,
    };
  },
});

// The Express app is exported so that it can be used by serverless Functions.
export function app(): Server {
  const privateKey = readFileSync('cert/cert.key', 'utf8'),
    certificate = readFileSync('cert/cert.crt', 'utf8'),
    express = require('express')(),
    helmet = require('helmet'),
    hpp = require('hpp'),
    express_enforces_ssl = require('express-enforces-ssl'),
    expressStaticGzip = require('express-static-gzip'),
    server = createServer(
      '',
      {
        key: privateKey,
        cert: certificate,
      },
      express,
    ),
    distFolder = join(process.cwd(), 'dist/browser'),
    indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  express.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    }),
  );

  express.enable('trust proxy');

  express.use(express_enforces_ssl());
  express.use(cookieParser());

  express.use(helmet({ contentSecurityPolicy: false }));
  express.use(compression());

  express.use(
    cors({
      origin: 'https://localhost:5000',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
      preflightContinue: false,
      maxAge: 3600,
    }),
  );
  express.use(bodyParser.json());
  express.use(bodyParser.urlencoded({ extended: true }));
  express.use(hpp());

  express.set('view engine', 'html');
  express.set('views', distFolder);

  express.get(
    '*.*',
    expressStaticGzip(distFolder, {
      enableBrotli: true,
      orderPreference: ['br', 'deflate', 'gzip'],
      serveStatic: {
        maxAge: '1y',
      },
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
