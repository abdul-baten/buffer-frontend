import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LinkedInPageComponent } from './container/linkedin-page.component';
import { LinkedInPageFacade } from './facade/linkedin-page.facade';
import { LinkedInPageRoutingModule } from './linkedin-page-routing.module';
import { LinkedInPageService } from './service/linkedin-page.service';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

@NgModule({
  declarations: [LinkedInPageComponent],
  imports: [ButtonModule, CommonModule, FieldsetModule, LazyLoadImageModule, LinkedInPageRoutingModule, ToolbarModule],
  providers: [LinkedInPageFacade, LinkedInPageService],
})
export class LinkedInPageModule {}
