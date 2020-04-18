import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor } from '@core/interceptor/error/error.interceptor';
import { GlobalErrorHandlerUtil } from '@core/util/error/error-handler.util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggerInterceptor } from '@core/interceptor/logger/logger.interceptor';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationModule } from '@shared/module/notification/notification.module';
import { NotificationService } from '@core/service/notification/notification.service';
import { reducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { VirtualScrollerDefaultOptions } from 'ngx-virtual-scroller';

/** Custom options the configure the tooltip's default show/hide delays. */
export const customTooltipConfig: MatTooltipDefaultOptions = {
  hideDelay: 500,
  showDelay: 500,
  touchendHideDelay: 500,
};

/** virtual scroller override settings */
export function vsDefaultOptionsFactory(): VirtualScrollerDefaultOptions {
  return {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 500,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false,
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'buffer' }),
    BrowserTransferStateModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    NotificationModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [
    NotificationService,
    { provide: 'virtual-scroller-default-options', useFactory: vsDefaultOptionsFactory },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: customTooltipConfig },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerUtil,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule {}
