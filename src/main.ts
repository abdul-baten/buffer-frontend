import { AppBrowserModule } from './app/app.browser.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().
    bootstrapModule(AppBrowserModule).
    // eslint-disable-next-line no-console
    catch((err) => console.error(err));
});
