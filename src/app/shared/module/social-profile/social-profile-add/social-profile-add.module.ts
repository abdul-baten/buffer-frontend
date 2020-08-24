import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialProfileAddComponent } from './container/social-profile-add.component';
import { SocialProfileAddFacade } from './facade/social-profile-add.facade';

@NgModule({
  declarations: [SocialProfileAddComponent],
  exports: [SocialProfileAddComponent],
  imports: [CommonModule, ButtonModule],
  providers: [SocialProfileAddFacade],
})
export class SocialProfileAddModule {}
