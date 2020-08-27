import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookPageComponent } from './container/facebook-page.component';
import { FacebookPageFacade } from './facade/facebook-page.facade';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';
import { FacebookPageService } from './service/facebook-page.service';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FacebookPageComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    FacebookPageRoutingModule,
    FieldsetModule,
    LazyLoadImageModule,
    LoaderModule,
  ],
  providers: [FacebookPageFacade, FacebookPageService],
})
export class FacebookPageModule {}
