import { BucketHeaderModule } from '@shared/module/header/bucket-header/bucket-header.module';
import { BucketPublishedComponent } from './container/bucket-published.component';
import { BucketPublishedFacade } from './facade/bucket-published.facade';
import { BucketPublishedRoutingModule } from './bucket-published-routing.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

@NgModule({
  declarations: [BucketPublishedComponent],
  imports: [
    BucketHeaderModule,
    BucketPublishedRoutingModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    LazyLoadImageModule,
    TableModule,
    VgBufferingModule,
    VgControlsModule,
    VgCoreModule,
    VgOverlayPlayModule,
  ],
  providers: [BucketPublishedFacade],
})
export class BucketPublishedModule {}
