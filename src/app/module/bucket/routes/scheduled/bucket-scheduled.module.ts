import { BucketHeaderModule } from '@shared/module/header/bucket-header/bucket-header.module';
import { BucketScheduledComponent } from './container/bucket-scheduled.component';
import { BucketScheduledFacade } from './facade/bucket-scheduled.facade';
import { BucketScheduledRoutingModule } from './bucket-scheduled-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [BucketScheduledComponent],
  imports: [
    BucketHeaderModule,
    BucketScheduledRoutingModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    LazyLoadImageModule,
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
