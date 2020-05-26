import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { RouterModule } from '@angular/router';
import { SocialProfileToolbarComponent } from './container/social-profile-toolbar.component';
import { SocialProfileToolbarFacade } from './facade/social-profile-toolbar.facade';

@NgModule({
  declarations: [SocialProfileToolbarComponent],
  imports: [CommonModule, NgxTippyModule, RouterModule],
  exports: [SocialProfileToolbarComponent],
  providers: [SocialProfileToolbarFacade],
})
export class SocialProfileToolbarModule {}
