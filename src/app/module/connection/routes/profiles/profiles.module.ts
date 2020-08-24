import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConnectionDeleteModalModule } from '@shared/module/modal/connection-delete-modal/connection-delete-modal.module';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { ProfilesComponent } from './container/profiles.component';
import { ProfilesFacade } from './facade/profiles.facade';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { SocialProfileAddModule } from '@shared/module/social-profile/social-profile-add/social-profile-add.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    ConnectionDeleteModalModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    InputTextModule,
    LazyLoadImageModule,
    LoaderModule,
    MatSidenavModule,
    ProfilesRoutingModule,
    SocialProfileAddModule,
    TableModule,
  ],
  providers: [ProfilesFacade],
})
export class ProfilesModule {}
