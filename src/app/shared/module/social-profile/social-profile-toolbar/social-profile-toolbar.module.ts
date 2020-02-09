import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialProfileToolbarComponent } from './container/social-profile-toolbar.component';
import { SocialProfileToolbarFacade } from './facade/social-profile-toolbar.facade';

@NgModule({
  declarations: [SocialProfileToolbarComponent],
  imports: [CommonModule],
  exports: [SocialProfileToolbarComponent],
  providers: [SocialProfileToolbarFacade],
})
export class SocialProfileToolbarModule {}
