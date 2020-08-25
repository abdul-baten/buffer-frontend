import { BucketScheduledComponent } from './container/bucket-scheduled.component';
import { BucketScheduledFacade } from './facade/bucket-scheduled.facade';
import { BucketScheduledRoutingModule } from './bucket-scheduled-routing.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

@NgModule({
  declarations: [BucketScheduledComponent],
  imports: [
    BucketScheduledRoutingModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    LazyLoadImageModule,
    MultiSelectModule,
    ScrollingModule,
    SlickCarouselModule,
    SplitButtonModule,
    TableModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
  ],
  providers: [BucketScheduledFacade],
})
export class BucketScheduledModule {}
