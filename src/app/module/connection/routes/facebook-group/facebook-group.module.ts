import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FacebookGroupComponent } from './container/facebook-group.component';
import { FacebookGroupFacade } from './facade/facebook-group.facade';
import { FacebookGroupRoutingModule } from './facebook-group-routing.module';
import { FacebookGroupService } from './service/facebook-group.service';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FacebookGroupComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    FacebookGroupRoutingModule,
    LoaderModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [FacebookGroupFacade, FacebookGroupService],
})
export class FacebookGroupModule {}
