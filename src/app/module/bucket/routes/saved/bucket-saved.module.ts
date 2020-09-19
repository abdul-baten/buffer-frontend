import { BucketHeaderModule } from '@shared/module/header/bucket-header/bucket-header.module';
import { BucketSavedComponent } from './container/bucket-saved.component';
import { BucketSavedFacade } from './facade/bucket-saved.facade';
import { BucketSavedRoutingModule } from './bucket-saved-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from '@shared/module/header/toolbar/toolbar.module';

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
    SplitButtonModule,
    TableModule,
    ToolbarModule,
  ],
  providers: [BucketSavedFacade],
})
export class BucketSavedModule {}
