import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EntityStoreModule } from './entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor } from '@core/interceptor/error/error.interceptor';
import { GlobalErrorHandlerUtil } from '@core/util/error/error-handler.util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPRequestInterceptor } from '@core/interceptor/http-request/http-request.interceptor';
import { LoggerInterceptor } from '@core/interceptor/logger/logger.interceptor';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { NotificationModule } from '@shared/module/notification/notification.module';
import { NotificationService } from '@core/service/notification/notification.service';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { VirtualScrollerDefaultOptions } from 'ngx-virtual-scroller';

/** Custom options the configure the tooltip's default show/hide delays. */
export const customTooltipConfig: MatTooltipDefaultOptions = {
  hideDelay: 500,
  showDelay: 500,
  touchendHideDelay: 500,
};

export const DefaultTooltipOptions: TooltipOptions = {
  autoPlacement: true,
  'hide-delay': 0,
  'max-width': 500,
  placement: 'left',
  'tooltip-class': 'buffer--padding-x-4 buffer--padding-y-3 buffer--font-size-xs buffer--font-family-sans-regular',
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
    HttpClientModule,
    NotificationModule,
    EntityStoreModule,
    TooltipModule.forRoot(DefaultTooltipOptions),
  ],
  providers: [
    NotificationService,
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    },
    { provide: 'virtual-scroller-default-options', useFactory: vsDefaultOptionsFactory },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: customTooltipConfig },
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPRequestInterceptor,
    },
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
