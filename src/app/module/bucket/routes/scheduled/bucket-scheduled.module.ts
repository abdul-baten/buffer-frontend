import { BucketHeaderModule } from '../../../../shared/header/bucket-header/bucket-header.module';
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
import { NoDataFoundModule } from '../../../../shared/no-data-found/no-data-found.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '../../../../shared/header/toolbar/toolbar.module';

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
    NoDataFoundModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
    BucketHeaderModule,
  ],
  providers: [BucketScheduledFacade],
})
export class BucketScheduledModule {}
