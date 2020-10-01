import { AppComponent } from './app.component';
import { AppFacade } from './facade/app.facade';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DashboardHeaderModule } from './shared/header/dashboard-header/dashboard-header.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { EntityStoreModule } from './entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor, HTTPRequestInterceptor, LoaderInterceptor, LoggerInterceptor } from './core/interceptor';
import { GlobalErrorHandlerUtil } from './core/util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './shared/loader/loader.module';
import { ModalService } from './core/service';
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
    DashboardHeaderModule,
    DynamicDialogModule,
    EntityStoreModule,
    HttpClientModule,
    LoaderModule,
    PostModalModule,
    ToastModule,
    TransferHttpCacheModule,
    ViewModalModule,
  ],
  providers: [
    ConfirmationService,
    DialogService,
    MessageService,
    ModalService,
    AppFacade,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPRequestInterceptor,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerUtil,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
    },
  ],
})
export class AppModule {}
