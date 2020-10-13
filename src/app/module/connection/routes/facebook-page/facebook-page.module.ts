import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FacebookPageComponent } from './container/facebook-page.component';
import { FacebookPageFacade } from './facade/facebook-page.facade';
import { FacebookPageRoutingModule } from './facebook-page-routing.module';
import { FacebookPageService } from './service/facebook-page.service';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [FacebookPageComponent],
  imports: [ButtonModule, CommonModule, ToolbarModule, FacebookPageRoutingModule, FieldsetModule, LazyLoadImageModule],
  providers: [FacebookPageFacade, FacebookPageService]
})
export class FacebookPageModule {}
