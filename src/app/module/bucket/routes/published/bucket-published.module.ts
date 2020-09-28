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
import { NoDataFoundModule } from '@shared/module/no-data-found/no-data-found.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

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
    NoDataFoundModule,
    TableModule,
    ToolbarModule,
  ],
  providers: [BucketPublishedFacade],
})
export class BucketPublishedModule {}
