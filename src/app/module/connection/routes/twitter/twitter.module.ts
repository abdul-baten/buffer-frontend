import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';
import { TwitterComponent } from './container/twitter.component';
import { TwitterFacade } from './facade/twitter.facade';
import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterService } from './service/twitter.service';
@NgModule({
  declarations: [TwitterComponent],
  imports: [ButtonModule, CommonModule, FieldsetModule, LazyLoadImageModule, ToolbarModule, TwitterRoutingModule],
  providers: [TwitterFacade, TwitterService]
})
export class TwitterModule {}
