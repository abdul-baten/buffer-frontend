import { BucketHeaderModule } from '../../../../shared/header/bucket-header/bucket-header.module';
import { BucketSavedComponent } from './container/bucket-saved.component';
import { BucketSavedFacade } from './facade/bucket-saved.facade';
import { BucketSavedRoutingModule } from './bucket-saved-routing.module';
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
  declarations: [BucketSavedComponent],
  imports: [
    BucketHeaderModule,
    BucketSavedRoutingModule,
    CarouselModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    LazyLoadImageModule,
    NoDataFoundModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule
  ],
  providers: [BucketSavedFacade]
})
export class BucketSavedModule {}
