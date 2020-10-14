import { ApplicationRef, enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { enableDebugTools } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().
    bootstrapModule(AppModule).
    then((module) => enableDebugTools(module.injector.get(ApplicationRef).components[0])).
    // eslint-disable-next-line no-console
    catch((err) => console.error(err));
});

// Ng.profiler.timeChangeDetection()
