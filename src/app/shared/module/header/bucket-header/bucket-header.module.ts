import { BucketHeaderComponent } from './container/bucket-header.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BucketHeaderComponent],
  exports: [BucketHeaderComponent],
  imports: [ButtonModule, CalendarModule, DropdownModule, InputTextModule, RouterModule],
})
export class BucketHeaderModule {}
