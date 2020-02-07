import { BucketPublishedComponent } from './container/bucket-published.component';
import { BucketPublishedFacade } from './facade/bucket-published.facade';
import { BucketPublishedFilterComponent } from './components/bucket-published-filter/bucket-published-filter.component';
import { BucketPublishedPostComponent } from './components/bucket-published-post/bucket-published-post.component';
import { BucketPublishedPostImageComponent } from './components/bucket-published-post-image/bucket-published-post-image.component';
import { BucketPublishedPostMenuComponent } from './components/bucket-published-post-menu/bucket-published-post-menu.component';
import { BucketPublishedPostSocialComponent } from './components/bucket-published-post-social/bucket-published-post-social.component';
import { BucketPublishedPostTextComponent } from './components/bucket-published-post-text/bucket-published-post-text.component';
import { BucketPublishedPostTimeComponent } from './components/bucket-published-post-time/bucket-published-post-time.component';
import { BucketPublishedPostVideoComponent } from './components/bucket-published-post-video/bucket-published-post-video.component';
import { BucketPublishedRoutingModule } from './bucket-published-routing.module';
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
import { BucketPublishedPostListComponent } from './components/bucket-published-post-list/bucket-published-post-list.component';

@NgModule({
  declarations: [
    BucketPublishedComponent,
    BucketPublishedFilterComponent,
    BucketPublishedPostComponent,
    BucketPublishedPostImageComponent,
    BucketPublishedPostMenuComponent,
    BucketPublishedPostSocialComponent,
    BucketPublishedPostTextComponent,
    BucketPublishedPostTimeComponent,
    BucketPublishedPostVideoComponent,
    BucketPublishedPostListComponent,
  ],
  imports: [
    BucketPublishedRoutingModule,
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
  providers: [BucketPublishedFacade],
})
export class BucketPublishedModule {}
