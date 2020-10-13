import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConnectionServiceModule } from 'ng-connection-service';
import { DashboardHeaderModule } from './shared/header/dashboard-header/dashboard-header.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { EntityStoreModule } from './entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor, HttpRequestInterceptor, LoaderInterceptor, LoggerInterceptor } from './core/interceptor';
import { GlobalErrorHandlerUtil } from './core/util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './shared/loader/loader.module';
import { PostModalModule } from './shared/modal/post-modal/post-modal.module';
import { ToastModule } from 'primeng/toast';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ViewModalModule } from './shared/modal/view-modal/view-modal.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'buffer' }),
    BrowserTransferStateModule,
    ConfirmDialogModule,
    ConnectionServiceModule,
    DashboardHeaderModule,
    DynamicDialogModule,
    EntityStoreModule,
    HttpClientModule,
    LoaderModule,
    PostModalModule,
    ToastModule,
    TransferHttpCacheModule,
    ViewModalModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor
    },
    {
      multi: true,
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerUtil
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor
    }
  ]
})
export class AppModule {}
