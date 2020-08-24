import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConnectionHeaderModule } from '@shared/module/header/connection-header/connection-header.module';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { TwitterComponent } from './container/twitter.component';
import { TwitterFacade } from './facade/twitter.facade';
import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterService } from './service/twitter.service';
@NgModule({
  declarations: [TwitterComponent],
  imports: [
    CommonModule,
    ConnectionHeaderModule,
    ConnectionPlanSidebarModule,
    LoaderModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    TwitterRoutingModule,

    FieldsetModule,
    ButtonModule,
    LazyLoadImageModule,
  ],
  providers: [TwitterFacade, TwitterService],
})
export class TwitterModule {}
