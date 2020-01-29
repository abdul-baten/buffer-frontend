// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@shared/module/loader/container/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
