import { BucketScheduledComponent } from './container/bucket-scheduled.component';
import { BucketScheduledFacade } from './facade/bucket-scheduled.facade';
import { BucketScheduledFilterComponent } from './components/bucket-scheduled-filter/bucket-scheduled-filter.component';
import { BucketScheduledPostComponent } from './components/bucket-scheduled-post/bucket-scheduled-post.component';
import { BucketScheduledPostImageComponent } from './components/bucket-scheduled-post-image/bucket-scheduled-post-image.component';
import { BucketScheduledPostMenuComponent } from './components/bucket-scheduled-post-menu/bucket-scheduled-post-menu.component';
import { BucketScheduledPostSocialComponent } from './components/bucket-scheduled-post-social/bucket-scheduled-post-social.component';
import { BucketScheduledPostTextComponent } from './components/bucket-scheduled-post-text/bucket-scheduled-post-text.component';
import { BucketScheduledPostTimeComponent } from './components/bucket-scheduled-post-time/bucket-scheduled-post-time.component';
import { BucketScheduledPostVideoComponent } from './components/bucket-scheduled-post-video/bucket-scheduled-post-video.component';
import { BucketScheduledRoutingModule } from './bucket-scheduled-routing.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
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
import { BucketScheduledPostListComponent } from './components/bucket-scheduled-post-list/bucket-scheduled-post-list.component';

@NgModule({
  declarations: [
    BucketScheduledComponent,
    BucketScheduledFilterComponent,
    BucketScheduledPostComponent,
    BucketScheduledPostImageComponent,
    BucketScheduledPostMenuComponent,
    BucketScheduledPostSocialComponent,
    BucketScheduledPostTextComponent,
    BucketScheduledPostTimeComponent,
    BucketScheduledPostVideoComponent,
    BucketScheduledPostListComponent,
  ],
  imports: [
    BucketScheduledRoutingModule,
    CommonModule,
    LazyLoadImageModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
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
  providers: [BucketScheduledFacade],
})
export class BucketScheduledModule {}
