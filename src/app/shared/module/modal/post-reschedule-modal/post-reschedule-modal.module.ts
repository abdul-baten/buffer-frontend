import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { PostRescheduleModalComponent } from './container/post-reschedule-modal.component';

@NgModule({
  declarations: [PostRescheduleModalComponent],
  exports: [PostRescheduleModalComponent],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  entryComponents: [PostRescheduleModalComponent],
})
export class PostRescheduleModalModule {}
