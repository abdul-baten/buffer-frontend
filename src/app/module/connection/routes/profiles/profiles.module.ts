import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { NgModule } from '@angular/core';
import { ProfilesComponent } from './container/profiles.component';
import { ProfilesFacade } from './facade/profiles.facade';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    ConnectionPlanSidebarModule,
    InputTextModule,
    LazyLoadImageModule,
    LoaderModule,
    ProfilesRoutingModule,
    TableModule,
    ToolbarModule,
  ],
  providers: [ProfilesFacade],
})
export class ProfilesModule {}
