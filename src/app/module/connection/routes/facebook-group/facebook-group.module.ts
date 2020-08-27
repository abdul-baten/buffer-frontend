import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookGroupComponent } from './container/facebook-group.component';
import { FacebookGroupFacade } from './facade/facebook-group.facade';
import { FacebookGroupRoutingModule } from './facebook-group-routing.module';
import { FacebookGroupService } from './service/facebook-group.service';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FacebookGroupComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    FacebookGroupRoutingModule,
    FieldsetModule,
    LazyLoadImageModule,
    LoaderModule,
  ],
  providers: [FacebookGroupFacade, FacebookGroupService],
})
export class FacebookGroupModule {}
