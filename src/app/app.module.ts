import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { EntityStoreModule } from './entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor } from '@core/interceptor/error/error.interceptor';
import { GlobalErrorHandlerUtil } from '@core/util/error/error-handler.util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPRequestInterceptor } from '@core/interceptor/http-request/http-request.interceptor';
import { LoggerInterceptor } from '@core/interceptor/logger/logger.interceptor';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationModule } from '@shared/module/notification/notification.module';
import { PostCreateModalModule } from '@shared/module/modal/post-create-modal/post-create-modal.module';
import { ToastModule } from 'primeng/toast';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { VirtualScrollerDefaultOptions } from 'ngx-virtual-scroller';

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
    ConfirmDialogModule,
    DynamicDialogModule,
    EntityStoreModule,
    HttpClientModule,
    NotificationModule,
    PostCreateModalModule,
    ToastModule,
    TooltipModule.forRoot(DefaultTooltipOptions),
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService,
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    },
    { provide: 'virtual-scroller-default-options', useFactory: vsDefaultOptionsFactory },
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
