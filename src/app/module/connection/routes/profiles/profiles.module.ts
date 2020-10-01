import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '../../../../shared/loader/loader.module';
import { NgModule } from '@angular/core';
import { ProfilesComponent } from './container/profiles.component';
import { ProfilesFacade } from './facade/profiles.facade';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [ProfilesComponent],
  imports: [
    ButtonModule,
    CommonModule,
    InputSwitchModule,
    InputTextModule,
    LazyLoadImageModule,
    LoaderModule,
    ProfilesRoutingModule,
    TableModule,
    ToolbarModule,
    TooltipModule,
  ],
  providers: [ProfilesFacade],
})
export class ProfilesModule {}
