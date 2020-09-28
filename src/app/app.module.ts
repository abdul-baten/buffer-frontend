import { AppComponent } from './app.component';
import { AppFacade } from './facade/app.facade';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DashboardHeaderModule } from '@shared/module/header/dashboard-header/dashboard-header.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { EntityStoreModule } from './entity-store.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorInterceptor } from '@core/interceptor/error/error.interceptor';
import { GlobalErrorHandlerUtil } from '@core/util/error/error-handler.util';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPRequestInterceptor } from '@core/interceptor/http-request/http-request.interceptor';
import { LoaderInterceptor } from '@core/interceptor/loader/loader.interceptor';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { LoggerInterceptor } from '@core/interceptor/logger/logger.interceptor';
import { ModalService } from '@core/service/modal/modal.service';
import { PostModalModule } from '@shared/module/modal/post-modal/post-modal.module';
import { ToastModule } from 'primeng/toast';
import { ViewModalModule } from '@shared/module/modal/view-modal/view-modal.module';
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
      useClass: HTTPRequestInterceptor,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
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
