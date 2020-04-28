import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { PopoverModule } from '@shared/module/popover/popover.module';
import { ProfilesComponent } from './container/profiles.component';
import { ProfilesFacade } from './facade/profiles.facade';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { SatPopoverModule } from '@ncstate/sat-popover';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTooltipModule,
    PopoverModule,
    ProfilesRoutingModule,
    SatPopoverModule,
  ],
  providers: [ProfilesFacade],
})
export class ProfilesModule {}
