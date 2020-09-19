import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@shared/module/loader/container/loader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderComponent],
  entryComponents: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [CommonModule],
})
export class LoaderModule {}
