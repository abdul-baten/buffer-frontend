import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ConnectionPlanSidebarModule } from '@shared/module/connection-plan-sidebar/connection-plan-sidebar.module';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderModule } from '@shared/module/loader/loader.module';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';
import { TwitterComponent } from './container/twitter.component';
import { TwitterFacade } from './facade/twitter.facade';
import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterService } from './service/twitter.service';
@NgModule({
  declarations: [TwitterComponent],
  imports: [
    ButtonModule,
    CommonModule,
    ConnectionPlanSidebarModule,
    FieldsetModule,
    LazyLoadImageModule,
    LoaderModule,
    TwitterRoutingModule,
    ToolbarModule,
  ],
  providers: [TwitterFacade, TwitterService],
})
export class TwitterModule {}
