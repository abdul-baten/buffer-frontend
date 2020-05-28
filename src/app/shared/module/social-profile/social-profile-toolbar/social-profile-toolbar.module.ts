import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileToolbarComponent } from './container/social-profile-toolbar.component';
import { SocialProfileToolbarFacade } from './facade/social-profile-toolbar.facade';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [SocialProfileToolbarComponent],
  imports: [CommonModule, LazyLoadImageModule, RouterModule, TooltipModule],
  exports: [SocialProfileToolbarComponent],
  providers: [SocialProfileToolbarFacade],
})
export class SocialProfileToolbarModule {}
