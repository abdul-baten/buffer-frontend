import { CommonModule } from '@angular/common';
import { ConnectionDeleteModalModule } from '@shared/module/modal/connection-delete-modal/connection-delete-modal.module';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { ProfilesComponent } from './container/profiles.component';
import { ProfilesFacade } from './facade/profiles.facade';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    ConnectionDeleteModalModule,
    LazyLoadImageModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    ProfilesRoutingModule,
    TooltipModule,
  ],
  providers: [ProfilesFacade],
})
export class ProfilesModule {}
