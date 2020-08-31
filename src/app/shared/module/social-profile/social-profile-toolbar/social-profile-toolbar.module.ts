import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialProfileToolbarComponent } from './container/social-profile-toolbar.component';
import { SocialProfileToolbarFacade } from './facade/social-profile-toolbar.facade';

@NgModule({
  declarations: [SocialProfileToolbarComponent],
  imports: [CarouselModule, CommonModule, LazyLoadImageModule, RouterModule],
  exports: [SocialProfileToolbarComponent],
  providers: [SocialProfileToolbarFacade],
})
export class SocialProfileToolbarModule {}
