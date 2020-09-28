import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InstagramBusinessComponent } from './container/instagram-business.component';
import { InstagramBusinessFacade } from './facade/instagram-business.facade';
import { InstagramBusinessRoutingModule } from './instagram-business-routing.module';
import { InstagramBusinessService } from './service/instagram-business.service';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [InstagramBusinessComponent],
  imports: [ButtonModule, CommonModule, ToolbarModule, InstagramBusinessRoutingModule, FieldsetModule, LazyLoadImageModule],
  providers: [InstagramBusinessFacade, InstagramBusinessService],
})
export class InstagramBusinessModule {}
