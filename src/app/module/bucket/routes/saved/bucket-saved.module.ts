import { BucketSavedComponent } from './container/bucket-saved.component';
import { BucketSavedFacade } from './facade/bucket-saved.facade';
import { BucketSavedFilterComponent } from './components/bucket-saved-filter/bucket-saved-filter.component';
import { BucketSavedPostComponent } from './components/bucket-saved-post/bucket-saved-post.component';
import { BucketSavedPostImageComponent } from './components/bucket-saved-post-image/bucket-saved-post-image.component';
import { BucketSavedPostMenuComponent } from './components/bucket-saved-post-menu/bucket-saved-post-menu.component';
import { BucketSavedPostSocialComponent } from './components/bucket-saved-post-social/bucket-saved-post-social.component';
import { BucketSavedPostTextComponent } from './components/bucket-saved-post-text/bucket-saved-post-text.component';
import { BucketSavedPostTimeComponent } from './components/bucket-saved-post-time/bucket-saved-post-time.component';
import { BucketSavedPostVideoComponent } from './components/bucket-saved-post-video/bucket-saved-post-video.component';
import { BucketSavedRoutingModule } from './bucket-saved-routing.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { BucketSavedPostListComponent } from './components/bucket-saved-post-list/bucket-saved-post-list.component';

@NgModule({
  declarations: [
    BucketSavedComponent,
    BucketSavedFilterComponent,
    BucketSavedPostComponent,
    BucketSavedPostImageComponent,
    BucketSavedPostMenuComponent,
    BucketSavedPostSocialComponent,
    BucketSavedPostTextComponent,
    BucketSavedPostTimeComponent,
    BucketSavedPostVideoComponent,
    BucketSavedPostListComponent,
  ],
  imports: [
    BucketSavedRoutingModule,
    CommonModule,
    LazyLoadImageModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ScrollingModule,
    SlickCarouselModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VirtualScrollerModule,
  ],
  providers: [BucketSavedFacade],
})
export class BucketSavedModule {}
