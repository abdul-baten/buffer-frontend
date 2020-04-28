import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { PostDetailsModalComponent } from './container/post-details-modal.component';
import { PostDetailsModalFooterComponent } from './components/post-details-modal-footer/post-details-modal-footer.component';
import { PostDetailsModalImageComponent } from './components/post-details-modal-image/post-details-modal-image.component';
import { PostDetailsModalTimeComponent } from './components/post-details-modal-time/post-details-modal-time.component';
import { PostDetailsModalVideoComponent } from './components/post-details-modal-video/post-details-modal-video.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

@NgModule({
  declarations: [
    PostDetailsModalComponent,
    PostDetailsModalFooterComponent,
    PostDetailsModalImageComponent,
    PostDetailsModalTimeComponent,
    PostDetailsModalVideoComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SlickCarouselModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
  ],
  exports: [PostDetailsModalComponent],
  entryComponents: [PostDetailsModalComponent],
})
export class PostDetailsModalModule {}
