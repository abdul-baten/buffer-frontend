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
import { ModalService } from '@core/service/modal/modal.service';
import { NotificationModule } from '@shared/module/notification/notification.module';
import { PostModalModule } from '@shared/module/modal/post-modal/post-modal.module';
import { ToastModule } from 'primeng/toast';

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
    PostModalModule,
    ToastModule,
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService,
    ModalService,
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {},
    },
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
