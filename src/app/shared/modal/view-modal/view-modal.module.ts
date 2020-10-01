import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { ViewModalComponent } from './container/view-modal.component';

@NgModule({
  declarations: [ViewModalComponent],
  entryComponents: [ViewModalComponent],
  imports: [ButtonModule, CommonModule, LazyLoadImageModule],
  providers: [DynamicDialogRef],
})
export class ViewModalModule {}
