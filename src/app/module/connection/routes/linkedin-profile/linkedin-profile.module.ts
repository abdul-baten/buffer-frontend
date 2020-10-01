import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LinkedInProfileComponent } from './container/linkedin-profile.component';
import { LinkedInProfileFacade } from './facade/linkedin-profile.facade';
import { LinkedInProfileRoutingModule } from './linkedin-profile-routing.module';
import { LinkedInProfileService } from './service/linkedin-profile.service';
import { NgModule } from '@angular/core';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';

@NgModule({
  declarations: [LinkedInProfileComponent],
  imports: [ButtonModule, CommonModule, FieldsetModule, LazyLoadImageModule, LinkedInProfileRoutingModule, ToolbarModule],
  providers: [LinkedInProfileFacade, LinkedInProfileService],
})
export class LinkedInProfileModule {}
