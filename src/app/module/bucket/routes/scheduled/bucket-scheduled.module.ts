import { BucketScheduledComponent } from './container/bucket-scheduled.component';
import { BucketScheduledFacade } from './facade/bucket-scheduled.facade';
import { BucketScheduledRoutingModule } from './bucket-scheduled-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';
import { BucketHeaderModule } from '@shared/module/header/bucket-header/bucket-header.module';

@NgModule({
  declarations: [BucketScheduledComponent],
  imports: [
    BucketScheduledRoutingModule,
    CalendarModule,
    CarouselModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    LazyLoadImageModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
    BucketHeaderModule,
  ],
  providers: [BucketScheduledFacade],
})
export class BucketScheduledModule {}
