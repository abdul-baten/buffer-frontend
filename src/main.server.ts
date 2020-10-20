import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const xhr2 = require('xhr2');

// eslint-disable-next-line no-underscore-dangle
xhr2.prototype._restrictedHeaders.cookie = false;

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
