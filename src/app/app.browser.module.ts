import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { StateTransferInitializerModule } from '@nguniversal/common';

export const get_request = (): Record<string, unknown> => ({ headers: { cookie: document.cookie } });

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    StateTransferInitializerModule,
    BrowserTransferStateModule
  ],
  providers: [
    {
      provide: REQUEST,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      useFactory: get_request
    },
    {
      provide: 'ORIGIN_URL',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      useValue: location.origin
    }
  ]
})
export class AppBrowserModule {}
