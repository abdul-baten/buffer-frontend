import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookGroupComponent } from './container/facebook-group.component';
import { FacebookGroupFacade } from './facade/facebook-group.facade';
import { FacebookGroupRoutingModule } from './facebook-group-routing.module';
import { FacebookGroupService } from './service/facebook-group.service';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [FacebookGroupComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConnectionPlanSidebarModule,
    FacebookGroupRoutingModule,
    FieldsetModule,
    LazyLoadImageModule,
    LoaderModule,
    ToolbarModule,
  ],
  providers: [FacebookGroupFacade, FacebookGroupService],
})
export class FacebookGroupModule {}
