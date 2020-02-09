import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { PostRescheduleConfirmModalComponent } from './container/post-reschedule-confirm-modal.component';

@NgModule({
  declarations: [PostRescheduleConfirmModalComponent],
  entryComponents: [PostRescheduleConfirmModalComponent],
  exports: [PostRescheduleConfirmModalComponent],
  imports: [CommonModule, MatButtonModule],
})
export class PostRescheduleConfirmModalModule {}
